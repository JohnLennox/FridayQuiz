import React from "react";
import AnswerReview from "./AnswerReview";

class QuestionReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.next = this.next.bind(this);
    }

    componentDidMount() {
    }

    next = () => {
        this.props.nextQuestionReview();
    }

    render() {
        let question = <h2 style={QuestionText}>{this.props.question}</h2>
        let image = <img style={ImageStyle} src={(this.props.image)} alt="quiz logo"></img>
        let selectedAnswer = this.props.selectedAnswer;
        let correctAnswer = this.props.correctAnswer;
        let selectedInList = false;

        let next = <button style={buttonStyle} onClick={this.next} className="btn btn-primary">Next</button>
        const answers = this.props.options.map((item, index) => {
            let correct,selected = false;
            if(item === correctAnswer){
                correct = true;
            }
            if(item === selectedAnswer){
                selectedInList = true;
                selected = true;
            }
            return  <AnswerReview
                correctAnswer={correct}
                selectedAnswer={selected}
                key={index}
                answer={item}/>
            }
        );
        if (!selectedInList){
            answers.push(
                <AnswerReview
                    correctAnswer={false}
                    selectedAnswer={true}
                    key={answers.length + 1}
                    answer={"Your answer: " + selectedAnswer}/>
            )
        }
        return (
            <div style={QuestionWrapper}>
                {image}
                {question}
                {answers}
                {next}
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

export default QuestionReview;
