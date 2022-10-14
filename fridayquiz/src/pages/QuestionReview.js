import React from "react";

class QuestionReview extends React.Component {
    // Get the answer info
    // Make a question review component like a question component but you cant select
    //loop through all of them

    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: null,
            questionIndex: 0,
            score: 0,
            activeReview: true,
            answerData: null
        };
        this.onAnswerSubmit = this.onAnswerSubmit.bind(this)
    }
    isEndOfQuestionList(questionIndex) {
        if (questionIndex === this.state.answerData.length - 1) {
            this.setState({activeQuiz: false})
            this.setState({quizLength: this.state.quizData.questions.length})
        }
    }

    onNextQuestion() {
        let qi = this.state.questionIndex;
        this.setState({questionIndex: qi + 1});
        this.isEndOfQuestionList(qi)
    }

    render(){
        return(
            <div>
                QUESTION REVIEW
            </div>
        )
    }
}

export default QuestionReview;