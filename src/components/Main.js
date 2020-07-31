import React from 'react'
import Items from './Items/Items.js'


const Main = ({Data}) =>{
    return(
    <div className="main">
        <div className="header">
            <p>Header is still under construction...</p>
            {/* <Header /> */}
        </div>
        <div className="body-contents">
            <div className="list-items" style={itemsStyle}>
                <Items data={Data}/>
            </div>
            <div className="add-item"></div>
        </div>
    </div>
)
    

}
    
const itemsStyle = {
    display:"flex",
    flexWrap:"wrap"
}
export default Main
