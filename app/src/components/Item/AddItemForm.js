import React from 'react';
import { Link } from "react-router-dom";

const AddItemForm = ({ currentContainerId, handleFormSubmit }) => {

  const form = {
    item_name: "",
    additional_information: "",
    is_container: true
  };

  const requiredFields = [
    'item_name',
  ];

  const handleName = (event) => {
    form.item_name = event.target.value;
  }

  const handleAdditionalInformation = (event) => {
    form.additional_information = event.target.value;
  }

  const handleIsContainer = (event) => {
    form.is_container = event.target.value;
  }

  const handleSubmit = (e) => {
    //e.preventDefault();      can't add. otherwise it cannot redirect when click on submit btn
    formValidation(form) ?
      handleFormSubmit(form) : alert("Please input item's name.")
  }

  const formValidation = (form) => {
    return  requiredFields.map((s) => form[s] ? true : false).indexOf(false) === -1;
  }

  return (
    <form>
      <label>
        Add Item Name:
      </label>
      <input
        name="item_name"
        type="text"
        onChange={handleName}
        style={formStyle} />

      <label>
        Additional Information:
      </label>
      <textarea
        rows="4"
        cols="50"
        name="additional_information"
        onChange={handleAdditionalInformation}
        style={formStyle} />

      <label>
        Is It A Container?
      </label>
      <div onChange={handleIsContainer} style={formStyle}>
        <input type="radio" value="true" name="is_container" />Yes
        <input type="radio" value="false" name="is_container" />No
      </div>
      <Link to="/" className="submitBtn">

        <button onClick={handleSubmit} style={formStyle} className="submitBtn">
          Submit
        </button>
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
