import React, { useState } from 'react';

const AddItemForm = ({currentContainerId, handleFormSubmit}) => {

  const data = {
    item_name: "",
    additional_information: "",
    is_container: false
  };
  
  const handleNameChange = (event) => {
    data.item_name = event.target.value ;
  }
  
  const handleAIChange = (event) => {
    data.additional_information = event.target.value ;
  }
  
  const handleICChange = (event) => {
    data.is_container = event.target.value ;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleFormSubmit(data)
  }

  return (
    <form>
      <span>{currentContainerId}</span>
      <label>
        名字:
      </label>
      <input name="item_name" type="text" onChange={handleNameChange} style={formStyle}/>

      <label>
        Additional Information:
      </label>
      <textarea rows="4" cols="50" name="additional_information" onChange={handleAIChange} style={formStyle}/>

      <label>
        Is It A Container?
      </label>
      <div onChange={handleICChange} style={formStyle}>
        <input type="radio" value="true" name="is_container"/>Yes
        <input type="radio" value="false" name="is_container"/>No
      </div>

      <button onClick={handleSubmit}  style={formStyle}>Submit</button>
    </form>
  );
}

const formStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box"
}

export default AddItemForm;