import React from "react";

class EndOfPresentationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={EndOfPresentationPageWrapper}>
                <h1>Thanks for playing!</h1>
                <h1>How did you do?</h1>
            </div>
        )
    }
}

const EndOfPresentationPageWrapper = {
    minHeight: '100vh'
}

const buttonStyle = {
    margin: '0.5rem'
}

export default EndOfPresentationPage;
