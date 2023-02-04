import React from "react";
import jsonData from "../resources/ExampleQuiz";
import PresentationQuestion from "../components/PresentationQuestion";
import AnswersTitlePage from "./AnswersTitlePage";
import EndOfPresentationPage from "./EndOfPresentationPage";

class PresentationMode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            activeQuiz: true,
            quizLength: 0,
            showAnswers: false,
            endOfPresentation: false
        };
        this.onAnswerSubmit = this.onAnswerSubmit.bind(this)
        this.onPreviousQuestion = this.onPreviousQuestion.bind(this)
    }

    componentDidMount() {
        fetch(jsonData)
            .then(r => r.text())
            .then(text => {
                this.setState({quizData: JSON.parse(text)})
            });
        this.setState({questionIndex: 0})
    }

    onPreviousQuestion() {
        let qi = this.state.questionIndex;
        this.setState({questionIndex: qi - 1});
    }

    onAnswerSubmit() {
        let qi = this.state.questionIndex;
        this.setState({questionIndex: qi + 1});
        this.isEndOfQuestionList(qi);
    }

    isEndOfQuestionList(questionIndex) {
        if (this.state.showAnswers && (questionIndex === this.state.quizData.questions.length - 1)) {
            console.log("END OF PRESENTATION")
            this.setState({endOfPresentation: true})
        } else if (questionIndex === this.state.quizData.questions.length - 1) {
            this.setState({activeQuiz: false})
            this.setState({quizLength: this.state.quizData.questions.length})
            this.setState({showAnswers: true})
            this.setState({questionIndex: -1})
        }

    }

    render() {
        let title, question;
        let currentQuestion = this.state.questionIndex;
        if (this.state.questionIndex === -1 && this.state.quizData) {
            title = <h1>{this.state.quizData.quizName}</h1>
            question = <AnswersTitlePage nextQuestionReview={this.onAnswerSubmit}/>
        } else if (this.state.endOfPresentation) {
            question = <EndOfPresentationPage/>
        } else if (this.state.quizData && (this.state.questionIndex <= this.state.quizData.questions.length - 1)) {
            title = <h1>{this.state.quizData.quizName}</h1>
            let questionInfo = this.state.quizData.questions[currentQuestion];
            question = <PresentationQuestion
                nextQuestionReview={this.onAnswerSubmit}
                previousQuestionReview = {this.onPreviousQuestion}
                questionIndex ={currentQuestion}
                options={questionInfo.options}
                image={questionInfo.image}
                correctAnswer={questionInfo.answer}
                question={questionInfo.Question}
                questionId={questionInfo.questionId}
                showAnswers={this.state.showAnswers}
                quizId={this.state.quizData.quizId}
            />
        }
        return (
            <div>
                {title}
                {question}
            </div>
        )
    }
}

export default PresentationMode;
