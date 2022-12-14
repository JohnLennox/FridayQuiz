import React from "react";
import AnswerOption from "./AnswerOption";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: ''
        };
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() {
        this.setState({selectedAnswer: ''})
    }

    setAnswer = (answer) => {
        this.setState({selectedAnswer: answer});
    }

    checkForQuestion = (answerInfo, answerList) => {
        for (let i = 0; i < answerList.length; i++) {
            if (answerList[i].questionId === answerInfo.questionId) {
                return true;
            }
        }
        return false;
    }

    checkForQuiz = (quizId, quizzes) => {
        return (quizzes[quizId] != null);
    }

    saveSelectedAnswer = () => {
        let answerInfo = {
            question: this.props.question,
            image: this.props.image,
            selectedAnswer: this.state.selectedAnswer,
            answer: this.props.answer,
            options: this.props.answers,
            questionId: this.props.questionId
        }

        let allQuizResults = null;
        if (window.localStorage.getItem("FridayQuizResults")) {
            allQuizResults = JSON.parse(window.localStorage.getItem("FridayQuizResults"));
        }

        if (!allQuizResults) {
            let quizResults = [];
            window.localStorage.setItem("FridayQuizResults", JSON.stringify(quizResults));
            allQuizResults = quizResults;
        }

        if (this.checkForQuiz(this.props.quizId, allQuizResults)) {
            let quizId = this.props.quizId;
            let quizData;
            for (const [key, value] of Object.entries(allQuizResults)) {
                if (key == quizId) {
                    quizData = value;
                }
            }
            if (!this.checkForQuestion(answerInfo, quizData)) {
                quizData.push(answerInfo);
            }
            allQuizResults[quizId] = (quizData);
            window.localStorage.setItem("FridayQuizResults", JSON.stringify(allQuizResults))
        } else {
            let answerData = [];
            answerData.push(answerInfo);
            allQuizResults[this.props.quizId] = answerData;
            window.localStorage.setItem("FridayQuizResults", JSON.stringify(allQuizResults));
        }
    }

    submitAnswer = () => {
        if (this.state.selectedAnswer === '') {
            alert("Please select an answer");
            return;
        }

        this.saveSelectedAnswer();

        if (this.state.selectedAnswer === this.props.answer) {
            this.props.onAnswerSubmit(true)
        }
        this.props.onAnswerSubmit(false)
        this.setState({selectedAnswer: ''})
    }

    render() {
        let question = <h2 style={QuestionText}>{this.props.question}</h2>
        let image = <img style={ImageStyle} src={(this.props.image)} alt="quiz logo"></img>
        let submit = <button style={buttonStyle} onClick={this.submitAnswer} className="btn btn-primary">Submit</button>
        const answers = this.props.answers.map((item, index) =>
            <AnswerOption selectedAnswer={this.state.selectedAnswer} setAnswer={this.setAnswer} key={index}
                          answer={item}></AnswerOption>
        );
        return (
            <div style={QuestionWrapper}>
                {image}
                {question}
                {answers}
                {submit}
            </div>
        )
    }
}

const QuestionWrapper = {
    minHeight: '100vh'
}

const ImageStyle = {
    width: '60%'
}

const QuestionText = {
    margin: '1rem'
}

const buttonStyle = {
    margin: '0.5rem'
}

export default Question;
