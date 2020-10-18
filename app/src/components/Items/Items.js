import React from 'react'
import OneItem from '../Item/OneItem.js'

const Items = ({data, clickOnItem}) => {
    
    return (
        data === null || data === undefined || data === '' ?
        <div>You haven't record have any item in your place yet. Please click the Plus icon to add a item in your home.</div> :
        data.map(d => <OneItem data={d} key={d.ID} clickOnItem={clickOnItem}/>) 
    )
}

export default Items