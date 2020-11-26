import React from 'react';
import Main from '../Main.js';


const ClickOnOneItem = ({clickOnItem, Data, containerLabel, isLoading}) =>{
    return (
        
        <Main clickOnItem={clickOnItem} Data={Data} currentContainer={containerLabel} isLoading={isLoading} />
    )
}

export default ClickOnOneItem;