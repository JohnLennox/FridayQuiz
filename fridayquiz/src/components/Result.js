import React from "react";
import {Link} from "react-router-dom";

class Question extends React.Component {

    getResultMessage(score, questionCount) {
        let message = "Well done!";
        let percentage = (score / questionCount) * 100;
        if (percentage <= 25) {
            message = "Better luck next time!"
        } else if (percentage <= 50) {
            message = "Almost a pass!"
        } else if (percentage === 100) {
            message = "Perfect Score!"
        }
        return message
    }

    render() {
        let score = this.props.score;
        let questionCount = this.props.numberOfQuestions;
        let message = this.getResultMessage(score, questionCount);
        return (
            <div style={HeightWrapper}>
                <h1 style={ScoreStyle}>You scored: {score}/{questionCount}</h1>
                <h2 style={MessageStyle}>{message}</h2>
                <Link to={"/"}>
                    <button className="btn btn-primary">Try again?</button>
                </Link>
            </div>
        )
    }
}

const HeightWrapper = {
    minHeight: '100vh'
}

const MessageStyle = {
    padding: '0.5rem'
}

const ScoreStyle = {
    padding: '0.5rem'
}

export default Question;
