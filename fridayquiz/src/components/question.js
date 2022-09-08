import React from "react";
import AnswerOption from "./AnswerOption";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: ''
        };
    }

    componentDidMount() {

    }

    setAnswer = (answer) =>{
        this.setState({selectedAnswer: answer});
    }

    render() {
        let question = <h2 style={QuestionText}>{this.props.question}</h2>
        let image = <img style={ImageStyle} src={(this.props.image)} alt="quiz logo"></img>
        let submit = <button className="btn btn-primary">Submit</button>
        const answers = this.props.answers.map((item, index) =>
            <AnswerOption selectedAnswer = {this.state.selectedAnswer} setAnswer = {this.setAnswer} key={index} answer = {item}></AnswerOption>
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

export default Question;
