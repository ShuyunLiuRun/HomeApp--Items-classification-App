import React from 'react';

function Table(props){
    const {name, positionID, isContainer, fields} = props.data;
    return (
    <p>{name} - {positionID} - {isContainer} - {fields}</p>
    )
}
export default Table;