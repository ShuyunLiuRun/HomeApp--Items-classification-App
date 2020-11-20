import React from 'react';
import Main from '../Main.js';


const ClickOnOneItem = ({clickOnItem, Data, containerLabel, isLoading}) =>{
    // 这里才去数据库拿东西
    console.log("containerLabel"+containerLabel);
    return (
        
        <Main clickOnItem={clickOnItem} Data={Data} currentContainer={containerLabel} isLoading={isLoading} />
    )
}

export default ClickOnOneItem;