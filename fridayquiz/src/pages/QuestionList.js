import React from "react";
import jsonData from "../resources/ExampleQuiz";
import Question from "../components/Question";
import Result from "../components/Result";

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
        if (this.state.quizData && this.state.activeQuiz) {
            title = <h1>{this.state.quizData.quizName}</h1>
            let questionInfo = this.state.quizData.questions[currentQuestion];
            question = <Question
                onAnswerSubmit={this.onAnswerSubmit}
                answers={questionInfo.options}
                image={questionInfo.image}
                answer={questionInfo.answer}
                question={questionInfo.Question}/>
        } else {
            question = null;
            result = <Result score={this.state.score} numberOfQuestions={this.state.quizLength}/>
        }
        return (
            <div>
                {title}
                {question}
                {result}
            </div>
        )
    }
}

export default QuestionList;
