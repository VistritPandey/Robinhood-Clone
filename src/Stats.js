import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from 'axios'

const TOKEN = "bva7pa748v6us1m9hse0";
const BASE_URL = "https://finnhub.io/api/v1/quote"

function Stats() {

    const [stockData, setstockData] = useState([]);
    const getStockData = (stock) => {
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((error) => {
            console.error("Error", error.message)
        })
    }

    useEffect(() => {

    }, [])
    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
