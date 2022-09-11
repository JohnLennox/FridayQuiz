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

    submitAnswer = () => {
        if (this.state.selectedAnswer === '') {
            alert("Please select an answer");
            return;
        }
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
