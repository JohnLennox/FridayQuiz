import React from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import QuizHome from "./pages/QuizHome";
import QuestionList from "./pages/QuestionList";

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
                        <Route path="/question" element={<QuestionList/>}/>
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
