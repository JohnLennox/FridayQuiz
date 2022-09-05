import React from "react";

import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import QuizHome from "./pages/QuizHome";
import Question from "./pages/Question";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div style={MainStyle}>
                <Router>
                    <Routes>
                        <Route path="/" element={<QuizHome/>}/>
                        <Route path="/question" element={<Question/>}/>
                    </Routes>
                </Router>
            </div>

        )
    }
}

const MainStyle = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    color: 'white'
}

export default App;
