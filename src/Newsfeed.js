import React from 'react'
import './Newsfeed.scss'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import {Avatar, Chip} from '@material-ui/core'

const Newsfeed = () => {

    const [popularTopics, setPopularTopics]=useState( [
      "Tech",
      "Movies",
      "Upcoming Earnings",
      "Healthcare",
      "Smartphones",
      "Technology",
      "Pharma",
    ])
  
    return (
      <div className={'newsfeed'}>
        <div className="newsfeed__container">
          <div className="newsfeed__chatSection">
            <div className="newsfeed__portfolio">
              <h1>$123,456</h1>
              <p>+$23.03 (+0.05%) Today</p>
            </div>
            <div className="newsfeed__chart">
              <LineGraph/>
              <TimeLine/>
            </div>
          </div>
          <div className="newsfeed__buyingSection">
            <h2> Buying Power </h2>
            <h2> $23.00 </h2>
          </div>
          <div className="newsfeed__marketSection">
            <div className="newsfeed__marketBox">
              <p> Markets Closed </p>
              <h1> Merry Christmas </h1>
            </div>
          </div>
          <div className="newsfeed__popularlistsSection">
            <div className="newsfeed__popularlistsIntro">
              <h1> Popular lists </h1>
              <p> Show More </p>
            </div>
            <div className="newsfeed__popularlistsBadges">
              {popularTopics.map((topic)=>(
                <Chip
                  className={'topic__badge'}
                  variant={'outlined'}
                  label={topic}
                  avatar={<Avatar
                  src={`https://avatars.dicebear.com/4.5/api/human/${topic}.svg`}
                  />}
                />
              ))}
            </div>
          </div>
        </div>
  
      </div>
    );
  };
  
  export default Newsfeed;
  