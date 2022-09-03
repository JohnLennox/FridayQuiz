import React from "react";

import Image from "../components/Image";

class QuizHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizTitle: "John's Test Quiz",
            quizAuthor: 'John'
        }
    }

    render() {
        return (
            <div className="QuizHome">
                <Image imageUri={require("..//resources/img.png")} ></Image>
                <h1>{this.state.quizTitle}</h1>
                <h3>{this.state.quizAuthor}</h3>
            </div>
        )
    }
}

export default QuizHome;
