import React from "react";
import AnswerReview from "./AnswerReview";

class PresentationQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    componentDidMount() {
    }

    next = () => {
        this.props.nextQuestionReview();
    }

    previous = () => {
        this.props.previousQuestionReview()
    }

    render() {
        let previous = <button style={buttonStyle} className="btn btn-primary" disabled={true}>Previous</button>;
        let question = <h2 style={QuestionText}>{this.props.question}</h2>
        let image = <img className="img-fluid" style={ImageStyle} src={(this.props.image)} alt="quiz logo"></img>
        let correctAnswer = this.props.correctAnswer;
        let displayAnswer = this.props.showAnswers;

        let next = <button style={buttonStyle} onClick={this.next} className="btn btn-primary">Next</button>
        if (this.props.questionIndex > 0) {
            previous = <button style={buttonStyle} onClick={this.previous} className="btn btn-primary">Previous</button>
        }

        const answers = this.props.options.map((item, index) => {
                let correct, selected = false;
                if (item === correctAnswer && displayAnswer) {
                    correct = true;
                }
                return <AnswerReview
                    correctAnswer={correct}
                    selectedAnswer={selected}
                    key={index}
                    answer={item}/>
            }
        );
        return (
            <div style={QuestionWrapper} className="container">
                <div className="row">
                    {question}
                </div>
                <div style = {MainBody} className="row">
                    <div className="col align-items-center">
                        <div className="h-100 d-flex  align-items-center">
                            {image}
                        </div>
                    </div>
                    <div className="col">
                        <table style={tableStyle}>
                            <tbody>
                            <tr>
                                <td className="align-middle">{answers}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="row fixed-bottom">
                    <div className="col p-2">
                        {previous}
                    </div>
                    <div className="col p-2">
                        {next}
                    </div>
                </div>
            </div>
        )
    }
}

const QuestionWrapper = {
    minHeight: '100vh'
}

const ImageStyle = {
    width: '100%'
}

const MainBody = {
    paddingTop: '5%',
    paddingBottom: '5%'
}

const tableStyle = {
    height: '100%',
    width: '100%'
}

const QuestionText = {
    margin: '1rem'
}

const buttonStyle = {
    margin: '0.5rem',
    minWidth: '50%'
}

export default PresentationQuestion;
