import React from 'react'
import {Line} from 'react-chartjs-2'


function LineGraph() {
    return (
        <div className="linegraph">
            <Line 
                data={{
                    datasets: [
                        {
                            type: "line",
                            data: data
                        }
                    ]
                }}
            />
        </div>
    )
}

export default LineGraph
