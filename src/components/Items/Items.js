import React from 'react'
import OneItem from '../Item/OneItem'

const Items = ({data}) => {
    return data.map(d => <OneItem data={d} key={d.ID}/>)
}

export default Items