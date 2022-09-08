import React from "react";
import jsonData from "../resources/ExampleQuiz";
import Question from "../components/question";

class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null
        };
    }

    componentDidMount() {
        fetch(jsonData)
            .then(r => r.text())
            .then(text => {
                this.setState({quizData: JSON.parse(text)})
            })
    }

    render() {
        let title;
        let questions;
        if (this.state.quizData) {
            // quizImage = <img style={ImageStyle} src={(this.state.quizData.quizImage)} alt="quiz logo"></img>
            title = <h1>{this.state.quizData.quizName}</h1>
            questions = <Question answers = {this.state.quizData.questions[0].options} image = {this.state.quizData.questions[0].image} question = {this.state.quizData.questions[0].Question} />
            // author = <h3>Created by: {this.state.quizData.quizAuthor}</h3>
            // date = <small>{this.state.quizData.quizDate}</small>
        }
        return (
            <div>
                {title}
                {questions}
            </div>
        )
    }
}

export default QuestionList;
