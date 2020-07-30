import React from 'react'
import OneItem from '../Item/OneItem'

const Items = ({data=[]}) => {
    return data.map(d => <OneItem />)
}

export default Items