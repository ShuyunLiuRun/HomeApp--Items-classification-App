import React from 'react'
import OneItem from '../Item/OneItem.js'

const Items = ({data, clickOnItem}) => {
    
    return (
        data.map(d => <OneItem data={d} key={d.ID} clickOnItem={clickOnItem}/>) 
    )
}

export default Items