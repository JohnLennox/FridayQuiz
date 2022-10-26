import React from "react";
import jsonData from "../resources/ExampleQuiz";
import QuestionReview from "../components/QuestionReview";
import {Navigate} from "react-router-dom";

class QuizReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null,
            questionIndex: 0,
            score: 0,
            activeReview: true,
            answerData: null,
            reviewComplete: false
        };
        this.onNextQuestion = this.onNextQuestion.bind(this);
    }

    componentDidMount() {
        fetch(jsonData)
            .then(r => r.text())
            .then(text => {
                this.setState({quizData: JSON.parse(text)})
            });
    }

    onNextQuestion() {
        let qi = this.state.questionIndex;
        if (qi === this.state.quizData.questions.length - 1) {
            this.setState({reviewComplete: true});
        }
        this.setState({questionIndex: qi + 1});
    }

    render() {
        let question;
        let currentQuestion = this.state.questionIndex;
        let quizId;
        if (this.state.quizData && !this.state.reviewComplete) {
            quizId = this.state.quizData.quizId;
            let allQuizResults = JSON.parse(window.localStorage.getItem("FridayQuizResults"));
            let quiz = allQuizResults[quizId];
            let questionInfo = quiz[currentQuestion];
            if (questionInfo === undefined) {
                question = <Navigate to='/result'/>
            } else {
                question = <QuestionReview question={questionInfo.question}
                                           options={questionInfo.options}
                                           selectedAnswer={questionInfo.selectedAnswer}
                                           correctAnswer={questionInfo.answer}
                                           nextQuestionReview={this.onNextQuestion}
                                           image={questionInfo.image}/>
            }
        } else if (this.state.reviewComplete) {
            question = <Navigate to='/result'/>
        }

        return (
            <div style={MainStyle}>
                <h1>Quiz Review</h1>
                {question}
            </div>
        )
    }
}

const MainStyle = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    color: 'white'
}

export default QuizReview;