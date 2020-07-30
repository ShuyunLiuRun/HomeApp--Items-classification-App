import React from 'react'
import OneItem from './Item/OneItem.js'
import Items from './Items/Items.js'


const Main = ({Data}) =>
    <div className="main">
        <div className="header">
            <p>Header is still under construction...</p>
            {/* <Header /> */}
        </div>
        <div className="body-contents">
            <div className="list-items">
                <Items data={Data}/>
            </div>
            <div className="add-item"></div>
        </div>
        
    </div>
    
export default Main
