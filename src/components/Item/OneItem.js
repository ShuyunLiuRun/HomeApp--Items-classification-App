// each item is wrapped in a litte square container,
// TODO: set the css in this file(containers' size, background color...)
// TODO: Show the item's name in the suqare
import React from 'react'

const OneItem = ({data}) =>{
    console.log(data)
    const name = data.name
    return(
    <div className="item" style={itemStyle}>{name}</div>
    )
}


const itemStyle = {
    height:"60px",
    width:"60px",
    backgroundColor:"#DCDCDC",
    padding:"10px",
    margin:"10px",
    borderRadius:"10px"
}

export default OneItem