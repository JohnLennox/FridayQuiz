import React from "react";


class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizImage: this.props.imageUri,
        }
    }
    render(){
        return (
            <div>
                <img src = {this.props.imageUri} alt = "something"></img>
            </div>
        );
    }
}

export default Image;