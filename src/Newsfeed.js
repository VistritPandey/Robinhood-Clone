import React from 'react'
import './Newsfeed.css'

function NewsFeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$123,321</h1>
                        <p>+$25.52 (+0.05%) Today</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed
