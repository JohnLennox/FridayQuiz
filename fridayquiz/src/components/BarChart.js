import React from "react";
import {Chart as ChartJS} from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="chart-container">
                <Line data={this.props.chartData}
                     options={this.props.chartOptions}
                />
            </div>
        )
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

export default BarChart;