import React, { useState, useEffect} from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import {Avatar, Chip} from '@material-ui/core'

const NewsFeed = () => {
    const [popularTopics, setPopularTopics] = useState([
        'Technology',
        'Movies',
        'Upcoming Earnings', 
        'Crypto', 
        'Cannabis', 
        'Healthcare Supplies',
    ])

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="newsfeed">
          <div className="newsfeed__container">
            <div className="newsfeed__chart_section">
                <div className="newsfeed__price__asset">
                    <h1>$123,321</h1>
                    <p>$23.03 (+0.05%) Today</p>
                </div>
                <div className="newsfeed__chart">
                    <LineGraph />
                    <TimeLine />
                </div>
            </div>
            <div className="newsfeed__buying__section">
                <h2>Buying Power</h2>
                <h2>$23.32</h2>
            </div>
            <div className="newsfeed__market__section">
                <div className="newsfeed__market__box">
                    <p>Markets are closed</p>
                    <h1>Merry Christmas</h1>
                </div>
                <div className="newsfeed__popularlists__section">
                  <div className="newsfeed__popularlists__intro">
                      <h1>Popular Lists</h1>
                      <p>Show More</p>
                  </div>
                </div>
                <div className="newsfeed__popularlists__badges">
                  {popularTopics.map((topic) => (
                    <Chip 
                        className="topic__badge"
                        variant="outlined"
                        label={topic}
                        avatar={<Avatar 
                            src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                        />}
                    />
                  ))}
                </div>              
            </div>     
          </div>                          
        </div>
    )
}

export default NewsFeed