import React from "react";

class AnswersTitlePage extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
    }

    next = () => {
        this.props.nextQuestionReview();
    }

    render() {
        let next = <button style={buttonStyle} onClick={this.next} className="btn btn-primary">Next</button>
        return (
            <div style={AnswerTitleWrapper}>
                <h1>Answers</h1>
                {next}
            </div>
        )
    }
}

const AnswerTitleWrapper = {
    minHeight: '100vh'
}

const buttonStyle = {
    margin: '0.5rem'
}

export default AnswersTitlePage;
