import React from "react";
import {checkForQuiz, checkForQuestion} from "./Util";

const images = require.context('../resources/QuestionImages', false, /\.(png|jpe?g|svg)$/);

class QuestionText extends React.Component {
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

    saveSelectedAnswer = (isCorrect) => {
        let answerInfo = {
            question: this.props.question,
            image: this.props.image,
            selectedAnswer: this.state.selectedAnswer,
            answer: this.props.answer,
            options: this.props.answers,
            questionId: this.props.questionId,
            correct: isCorrect
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

        if (checkForQuiz(this.props.quizId, allQuizResults)) {
            let quizId = this.props.quizId;
            let quizData;
            for (const [key, value] of Object.entries(allQuizResults)) {
                if (key == quizId) {
                    quizData = value;
                }
            }
            if (!checkForQuestion(answerInfo, quizData)) {
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
            alert("Please enter an answer");
            return;
        }

        let userAnswer = this.state.selectedAnswer.toLowerCase().trim();
        let answer = this.props.answer.toLowerCase().trim();
        let variance = this.props.variance;

        if (variance) {
            userAnswer = Number(userAnswer);
            variance = Number(variance);
            answer = Number(answer);

            if (userAnswer >= answer - variance && userAnswer <= answer + variance) {
                this.props.onAnswerSubmit(true);
                this.saveSelectedAnswer(true);
                this.setState({selectedAnswer: ''})
                return;
            }
        }

        if (userAnswer === answer) {
            this.props.onAnswerSubmit(true)
            this.saveSelectedAnswer(true);
        } else {
            this.props.onAnswerSubmit(false)
            this.saveSelectedAnswer(false);
        }
        this.setState({selectedAnswer: ''})
    }

    render() {
        let imageLoc = "./" + this.props.image;
        let imageSrc;
        try {
            imageSrc = images(imageLoc);
        } catch (error) {
            imageSrc = this.props.image;
        }

        let image = <img style={ImageStyle} src={imageSrc} alt="quiz logo"></img>


        let question = <h2 style={QuestionTextStyle}>{this.props.question}</h2>
        let submit = <button style={buttonStyle} onClick={this.submitAnswer} className="btn btn-primary">Submit</button>
        return (
            <div style={QuestionWrapper}>
                {image}
                {question}
                <input type="text" value={this.state.selectedAnswer} onChange={(e) => this.setAnswer(e.target.value)}/>
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

const QuestionTextStyle = {
    margin: '1rem'
}

const buttonStyle = {
    margin: '0.5rem'
}

export default QuestionText;
