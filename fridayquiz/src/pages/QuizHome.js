import React from "react";
import jsonData from "../resources/ExampleQuiz";

class QuizHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        let author;
        let date;
        let quizImage;
        if (this.state.quizData) {
            console.log("here")
            quizImage = <img style={ImageStyle} src={(this.state.quizData.quizImage)} alt="quiz logo"></img>
            title = <h1>{this.state.quizData.quizName}</h1>
            author = <h3>Created by: {this.state.quizData.quizAuthor}</h3>
            date = <small>{this.state.quizData.quizDate}</small>
        }
        return (
            <div className="container" style={QuizHomeStyle}>

                {title}
                {quizImage}
                <div className = "">
                    <button type="button" className="btn btn-primary">Primary</button>
                </div>
                {author}
                {date}
            </div>
        )
    }
}

const QuizHomeStyle = {
    paddingLeft: '1.5 rem',
    paddingRight: '1.5 rem',
    marginTop: 0,
    minHeight: '100vh'
}

const ImageStyle = {
    width: '60%'
}

export default QuizHome;
