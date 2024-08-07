import React from "react";

import {HashRouter, Route, Routes} from "react-router-dom";

import QuizHome from "./pages/QuizHome";
import QuizReview from "./pages/QuizReview";
import QuestionList from "./pages/QuestionList";
import Result from "./components/Result";
import PresentationMode from "./pages/PresentationMode";
import QuizPresentationHome from "./pages/QuizPresentationHome";
import ResultGraph from "./components/ResultsGraph";
import MoneyManager from "./pages/MoneyManager";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div style={MainStyle}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<QuizHome/>}/>
                        <Route path="/test" element={<ResultGraph/>}/>
                        <Route path="/question" element={<QuestionList/>}/>
                        <Route path="/review" element={<QuizReview/>}/>
                        <Route path="/result" element={<Result/>}/>
                        <Route path="/presentation" element={<PresentationMode/>}/>
                        <Route path="/display" element={<QuizPresentationHome/>}/>
                        <Route path="/MoneyManager" element={<MoneyManager/>}/>
                    </Routes>
                </HashRouter>
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
