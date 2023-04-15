import React from "react";
import BarChart from "./BarChart";

class ResultGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    markQuiz(quizObj) {
        if (!quizObj) return;
        let score = 0;
        for (let i = 0; i < quizObj.length; i++) {
            if ((quizObj[i].selectedAnswer === quizObj[i].answer) || quizObj[i].correct) {
                score++;
            }
        }
        return Math.round((score / quizObj.length) * 100);
    }

    getHistoricStats() {
        let fridayQuizResults = JSON.parse(window.localStorage.getItem('FridayQuizResults'));
        this.markQuiz(fridayQuizResults[14])
        let historicStats = [];
        for (let i = 0; i < fridayQuizResults.length; i++) {
            if (fridayQuizResults[i]) {
                historicStats.push(this.markQuiz(fridayQuizResults[i]));
            }
        }
        return historicStats;
    }

    formatChartData(dataObject) {
        let labelContent = [];
        for (let i = 0; i < dataObject.length; i++) {
            labelContent.push(dataObject[i] + '%')
        }

        return {
            labels: labelContent,
            datasets: [
                {
                    label: 'Scores',
                    data: dataObject,
                    // backgroundColor: ['','',''],
                    borderWidth: 2
                }
            ]
        }
    }

    render() {
        let scores = this.getHistoricStats()
        let formattedChartData = this.formatChartData(scores);
        return (
            <div id="">
                <BarChart chartData={formattedChartData} chartOptions={this.getChartOptions()}/>
            </div>
        )
    }

    getChartOptions() {
        return {
            plugins: {
                title: {
                    display: true,
                    text: "My Quiz Results"
                },
                legend: {
                    // display: false
                },
            },
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
        }
    }
}

const MainStyle = {
    backgroundColor: '#282c34',
    textAlign: 'center',
    color: 'white',
    paddingLeft: '1.5 rem',
    paddingRight: '1.5 rem',
    marginTop: 0,
    minHeight: '100vh'

}

export default ResultGraph;