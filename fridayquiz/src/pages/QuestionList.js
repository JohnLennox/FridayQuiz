import React from "react";
import jsonData from "../resources/ExampleQuiz";
import Question from "../components/Question";
import { Navigate } from "react-router-dom";
import QuestionText from "../components/QuestionText";

class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null,
            questionIndex: 0,
            score: 0,
            activeQuiz: true,
            quizLength: 0
        };
        this.onAnswerSubmit = this.onAnswerSubmit.bind(this)
    }

    componentDidMount() {
        fetch(jsonData)
            .then(r => r.text())
            .then(text => {
                this.setState({quizData: JSON.parse(text)})
            });
    }

    onAnswerSubmit(correct) {
        if (correct) {
            let score = this.state.score;
            this.setState({score: score + 1});
        }
        let qi = this.state.questionIndex;
        this.setState({questionIndex: qi + 1});
        this.isEndOfQuestionList(qi)
    }

    isEndOfQuestionList(questionIndex) {
        if (questionIndex === this.state.quizData.questions.length - 1) {
            this.setState({activeQuiz: false})
            this.setState({quizLength: this.state.quizData.questions.length})
        }
    }

    render() {
        let title, question, result;
        let currentQuestion = this.state.questionIndex;
        let quizId = "";
        if(this.state.quizData){
            quizId = this.state.quizData.quizId;
        }
        if (this.state.quizData && this.state.activeQuiz) {
            title = <h1>{this.state.quizData.quizName}</h1>
            let questionInfo = this.state.quizData.questions[currentQuestion];
            if (questionInfo.questionType === "TEXT"){
                question = <QuestionText
                    onAnswerSubmit={this.onAnswerSubmit}
                    answers={questionInfo.options}
                    image={questionInfo.image}
                    answer={questionInfo.answer}
                    question={questionInfo.Question}
                    questionId={questionInfo.questionId}
                    quizId={this.state.quizData.quizId}
                    variance={questionInfo.variance}
                />
            }else {

                question = <Question
                    onAnswerSubmit={this.onAnswerSubmit}
                    answers={questionInfo.options}
                    image={questionInfo.image}
                    answer={questionInfo.answer}
                    question={questionInfo.Question}
                    questionId={questionInfo.questionId}
                    quizId={this.state.quizData.quizId}
                />
            }
        } else if(!this.state.activeQuiz) {
            question = null;
            window.localStorage.setItem("quizId", JSON.stringify(quizId));
            window.localStorage.setItem("currentScore", JSON.stringify(this.state.score));
            window.localStorage.setItem("questionCount", JSON.stringify(this.state.quizLength));
            result = <Navigate to='/result' />
        }
        return (
            <div style={QuestionListStyle}>
                {title}
                {question}
                {result}
            </div>
        )
    }
}

const QuestionListStyle = {
    paddingLeft: '1.5 rem',
    paddingRight: '1.5 rem',
    marginTop: 0,
    minHeight: '100vh'
}

export default QuestionList;
