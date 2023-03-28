import React from "react";
import jsonData from "../resources/ExampleQuiz";
import {Link} from "react-router-dom";
import QrCode from "../resources/QRCode.png";

class QuizPresentationHome extends React.Component {
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
        if (window.localStorage.getItem("LocalStorageCleared") == null) {
            window.localStorage.clear();
            window.localStorage.setItem("LocalStorageCleared", "true");
        }
    }

    render() {
        let title;
        let author;
        let date;
        let QRimage;
        if (this.state.quizData) {
            QRimage = <div className={"text-center"}><img style={ImageStyle} src={QrCode} alt="quiz logo"></img></div>
            title = <h1 style={titleStyle}>{this.state.quizData.quizName}</h1>
            author = <h3 style={authorStyle}>Created by: {this.state.quizData.quizAuthor}</h3>
            date = <small style={dateStyle}>{this.state.quizData.quizDate}</small>
        }
        return (
            <div style={QuestionWrapper} className="container">
                <div >
                    {title}
                    {QRimage}
                    {date}
                    {author}
                </div>
                <Link to={"/presentation"}>
                    <button style={buttonStyle} className="btn btn-primary">Start Quiz</button>
                </Link>
            </div>
        )
    }
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


const QuestionWrapper = {
    minHeight: '100vh'
}

const ImageStyle = {
    width: '30%'
}

const buttonStyle = {
    margin: '0.5rem',
    minWidth: '50%'
}


export default QuizPresentationHome;
