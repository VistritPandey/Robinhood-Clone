import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'


function LineGraph() {

    const [ graphData, setGraphData] = useState([])
    const data = 
    [{
        x: 10,
        y: 20
    },{
        x: 15,
        y: 10
    }]

    const createMockData = () => {
        let data = []
        let value = 50
        for (var i=0; i<366; i++) {
            let date = new Date()
            date.setHours(0,0,0,0)
            date.setDate(i)
            value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random()*10)
            data.push({x: date, y: value})
        }
    }

    useEffect(() => {

    }, [])

    return (
        <div className="linegraph">
            <Line 
                data={{
                    datasets: [
                        {
                            type: "line",
                            data: data,
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: "rgba(0, 0, 0, 0)",
                            pointBackgroundColor: "rgba(0, 0, 0, 0)",
                            pointHoverBackgroundColor: "#5AC53B",
                            pointHoverBorderColor: "#000000",
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6
                        }
                    ]
                }}
                options = {{
                    legend : {
                        display: false
                    },
                    tooltips : {
                        mode: "index",
                        intersect: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default LineGraph
