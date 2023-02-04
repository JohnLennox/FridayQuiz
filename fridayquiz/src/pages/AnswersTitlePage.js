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
            <div className="container-fluid" style={AnswerTitleWrapper}>
                <div className="row">

                </div>
                <div className="row">
                    <div className="col align-items-center">

                        <img className="img-fluid" style={ImageStyle}
                             src={'https://praywithconfidence.com/wp-content/uploads/2020/06/answered-prayers.png'}
                             alt="quiz logo"></img>
                    </div>
                </div>
                <div className="row fixed-bottom">
                    <div className="col p-2">
                    {next}
                    </div>
                </div>
            </div>
        )
    }
}

const AnswerTitleWrapper = {
    minHeight: '100vh'
}

const buttonStyle = {
    width: '40%'
}

const ImageStyle = {
    width: '70%'
}

export default AnswersTitlePage;
