import React from 'react'
import OneItem from '../Item/OneItem'

const Items = ({data}) => {
    const {items,isLoading} = data;
    return (
        isLoading ? <div>Loading</div> : items.map(d => <OneItem data={d} key={d.ID}/>)
    )
}

export default Items