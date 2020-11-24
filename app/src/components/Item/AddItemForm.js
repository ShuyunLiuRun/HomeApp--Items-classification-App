import React from 'react';
import { Link } from "react-router-dom";

const AddItemForm = ({ currentContainerId, handleFormSubmit }) => {

  const data = {
    item_name: "",
    additional_information: "",
    is_container: false
  };

  const handleName = (event) => {
    data.item_name = event.target.value;
  }

  const handleAdditionalInformation = (event) => {
    data.additional_information = event.target.value;
  }

  const handleIsContainer = (event) => {
    data.is_container = event.target.value;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(data)
  }

  return (
    <form>
      <label>
        Add Item Name:
      </label>
      <input name="item_name" type="text" onChange={handleName} style={formStyle} />

      <label>
        Additional Information:
      </label>
      <textarea rows="4" cols="50" name="additional_information" onChange={handleAdditionalInformation} style={formStyle} />

      <label>
        Is It A Container?
      </label>
      <div onChange={handleIsContainer} style={formStyle}>
        <input type="radio" value="true" name="is_container" />Yes
        <input type="radio" value="false" name="is_container" />No
      </div>
      <Link to="/" >
        <button onClick={handleSubmit} style={formStyle}>Submit</button>
      </Link>
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