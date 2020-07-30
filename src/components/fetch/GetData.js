import React, {useEffect, useState} from 'react'

const data = require('../../data.json')

    //TODO: Create API carry the data

function GetData(){
    const [state,setState] = useState([])
    //fake data
    setState(data);
}

export default GetData