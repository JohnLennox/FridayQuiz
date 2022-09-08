import React from "react";

class AnswerOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
        this.chosen = this.chosen.bind(this);
    }

    componentDidMount() {

    }

    chosen(){
        this.props.setAnswer(this.props.answer);
    }

    render() {
        let option = <h2>{this.props.answer}</h2>;
        let optionStyling = unselectedStyling;
        if(this.props.selectedAnswer === this.props.answer){
           optionStyling = selectedStyling;
        }
        return (
            <div  onClick={() => this.chosen()} style = {optionStyling}>
                {option}
            </div>
        )
    }
}
const unselectedStyling = {
    borderRadius: '5px',
    borderWidth: '3px',
    backgroundColor: 'grey',
    margin: '1rem',
    padding: '0.5em'
}
const selectedStyling = {
    borderRadius: '5px',
    borderWidth: '3px',
    backgroundColor: 'blue',
    margin: '1rem',
    padding: '0.5em'
}
export default AnswerOption;
