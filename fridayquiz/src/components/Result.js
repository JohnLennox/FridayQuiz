import React from "react";
import {Link} from "react-router-dom";
import ResultGraph from "./ResultsGraph";

class Result extends React.Component {
    getOriginalResult() {
        let quizList = JSON.parse(window.localStorage.getItem("FridayQuizResults"));
        let quizId = JSON.parse(window.localStorage.getItem("quizId"));
        let answerList;
        if (!quizList) {
            return "";
        }
        for (const [key, value] of Object.entries(quizList)) {
            if (key == quizId) {
                answerList = value;
            }
        }

        let correctCount = 0;
        if (!answerList) {
            return "";
        }

        for (let i = 0; i < answerList.length; i++) {
            if (answerList[i].correct) {
                correctCount++;
            } else if (answerList[i].answer === answerList[i].selectedAnswer) {
                correctCount++;
            }
        }
        return correctCount + "/" + answerList.length;
    }

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
        let score = JSON.parse(window.localStorage.getItem("currentScore"));
        let questionCount = JSON.parse(window.localStorage.getItem("questionCount"));
        let message = this.getResultMessage(score, questionCount);
        let original = this.getOriginalResult();
        return (
            <div className="container" style={HeightWrapper}>
                <div className="row">
                    <h1 style={ScoreStyle}>You scored: {score}/{questionCount}</h1>
                    <h1 style={ScoreStyle}>Your original score was: {original}</h1>
                    <h2 style={MessageStyle}>{message}</h2>
                </div>
                <br></br>
                <div>
                <h2>Score History</h2>
                <ResultGraph/>
                </div>

                <div className="row">
                    <div className="col">
                        <Link to={"/"}>
                            <button className="btn btn-primary">Try again?</button>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={"/review"}>
                            <button className="btn btn-primary">View results?</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const HeightWrapper = {
    minHeight: '100vh'
}

const ButtonStyle = {
    margin: '0.5rem'
}

const MessageStyle = {
    padding: '0.1rem'
}

const ScoreStyle = {
    padding: '0.1rem'
}

export default Result;
