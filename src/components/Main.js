import React from 'react'
import OneItem from './OneItem.js'

const Items = data.map(d => <OneItem data={d} key={d.ID}/>);

const Main = ({Data}) =>
    <div className="main">
        <div className="header">
            <p>Header is still under construction...</p>
            {/* <Header /> */}
        </div>
        <div className="body-contents">
            <div className="list-items">
                {Items}
            </div>
            <div className="add-item"></div>
        </div>
        
    </div>
    

