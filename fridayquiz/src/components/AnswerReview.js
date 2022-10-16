import React from "react";

class AnswerReview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let backgroundColor= 'grey';
        let borderColor = 'grey';
        if(this.props.correctAnswer){
            backgroundColor = 'green';
        }else if(this.props.selectedAnswer){
            backgroundColor = 'blue';
        }
        let option = <h2>{this.props.answer}</h2>;

        return (
            <div style={{
                borderRadius: '5px',
                borderWidth: '3px',
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                margin: '1rem',
                padding: '0.5em'
            }}>
                {option}
            </div>
        )
    }
}

export default AnswerReview;
