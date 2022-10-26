import React from "react";
import jsonData from "../resources/ExampleQuiz";
import {Link} from "react-router-dom";

class QuizHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        fetch(jsonData)
            .then(r => r.text())
            .then(text => {
                this.setState({quizData: JSON.parse(text)})
            });
        if(window.localStorage.getItem("localStorageCleared") == null){
            window.localStorage.clear();
            window.localStorage.setItem("localStorageCleared", "true");
        }
    }

    render() {
        let title;
        let author;
        let date;
        let quizImage;
        if (this.state.quizData) {
            quizImage = <div className={"text-center"}><img style={ImageStyle} src={(this.state.quizData.quizImage)}
                                                            alt="quiz logo"></img></div>
            title = <h1 style={titleStyle}>{this.state.quizData.quizName}</h1>
            author = <h3 style={authorStyle}>Created by: {this.state.quizData.quizAuthor}</h3>
            date = <small style={dateStyle}>{this.state.quizData.quizDate}</small>
        }
        return (
            <div className="container" style={QuizHomeStyle}>
                {title}
                {quizImage}
                <Link to={"/question"}>
                    <button style={buttonStyle} className="btn btn-primary">Start Quiz</button>
                </Link>
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

const buttonStyle = {
    margin: '0.5rem'
}

const ImageStyle = {
    width: '60%'
}

const titleStyle = {
    padding: '0.5rem'
}

const authorStyle = {
    padding: '0.5rem'
}

const dateStyle = {
    padding: '0.5rem'
}

export default QuizHome;
