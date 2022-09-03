import React from "react";
import './App.css';
import QuizHome from "./pages/QuizHome";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        let page = <QuizHome imageUri = {require("./resources/img.png")}></QuizHome>;
        return (
            <div className="App">
                <header className="App-body">
                    {page}
                </header>
            </div>
        )
    }
}

export default App;
