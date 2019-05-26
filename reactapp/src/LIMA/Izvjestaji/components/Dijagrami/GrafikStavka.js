import React, { Fragment, Component } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        xAxes: [],
    },
}

const chart = {
    Pie: Pie,
    Bar: Bar,
    Line: Line,
}

class GrafikStavka extends Component {
    constructor(){
        super();
        this.state = {
            data: null,
            tipGrafika: Bar
        };
    }
    componentDidMount(){
        let { data, nazivStavke, tipGrafika } = this.props;
        let dataAggregate = {};
        for(let i=0;i<data.length;i++){
            if(data[i] in dataAggregate){
                dataAggregate[data[i]]++;
            } else dataAggregate[data[i]] = 1;
        }
        let dataForState = {
            labels: [],
            datasets: [{
                label: nazivStavke,
                backgroundColor: 'rgba(15,145,20,0.2)',
                borderColor: 'rgba(15,145,20,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,252,82,0.4)',
                hoverBorderColor: 'rgba(75,252,82,1)',
                data: []
            }]
        };
        for(var instance in dataAggregate) {
            dataForState.labels.push(instance);
            dataForState.datasets[0].data.push(dataAggregate[instance]);
        }
        this.setState({
            data: dataForState,
            tipGrafika: tipGrafika
        });
    }
    render(){
        const Chart = chart[this.state.tipGrafika]
        return (this.state.data ? 
            <Chart
                data={this.state.data}
                options={ options }
            /> :
            "loading...")
    }
}

export default GrafikStavka;