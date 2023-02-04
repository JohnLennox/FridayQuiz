import React from "react";

class EndOfPresentationPage extends React.Component {
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

export default EndOfPresentationPage;
