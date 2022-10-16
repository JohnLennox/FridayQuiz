import React from "react";
import Question from "../components/Question";
import Result from "../components/Result";
import jsonData from "../resources/ExampleQuiz";
import QuestionReview from "../components/QuestionReview";

class QuizReview extends React.Component {
    // Get the answer info
    // Make a question review component like a question component but you cant select
    //loop through all of them

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null,
            questionIndex: 0,
            score: 0,
            activeReview: true,
            answerData: null
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
        if(qi !== this.state.quizData.length){
            this.setState({questionIndex: qi + 1});
        }
    }

    render() {
        let title, question;
        let currentQuestion = this.state.questionIndex;
        let quizId;
        if (this.state.quizData) {
            title = <h1>{this.state.quizData.quizName}</h1>
            //    get the quiz info from local storage
            quizId = this.state.quizData.quizId;
            let allQuizResults = JSON.parse(window.localStorage.getItem("FridayQuizResults"));
            let quiz = allQuizResults[quizId];
            let questionInfo = quiz[currentQuestion];
            question = <QuestionReview question={questionInfo.question}
                                       options={questionInfo.options}
                                       selectedAnswer={questionInfo.selectedAnswer}
                                       correctAnswer={questionInfo.answer}
                                       nextQuestionReview={this.onNextQuestion}
                                       image={questionInfo.image}/>
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