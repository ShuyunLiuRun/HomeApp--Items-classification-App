import React from 'react';
import OneItem from '../Item/OneItem.js';

const Items = ({ data, clickOnItem , deleteItem}) => {

    return (
        data === null || data === undefined || data === '' ?
            <div>You haven't record have any item in your place yet. Please click the Plus icon to add a item in your home.</div> :
             data.map(d => <div key={d.ID} className="list-items" ><OneItem key={d.ID} data={d} clickOnItem={clickOnItem} deleteItem={deleteItem} /></div> )
    
    )
}

export default Items