import React, { useState } from "react";
import './AddString.css'

const AddString = (props) => {
  const [AddString, setAddString] = useState("");

  const handleInputChange = (e) => {
    setAddString(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFormCompleted(AddString);
    setAddString("");
  };

  return (
    <form className="form" onSubmit={handleSubmit} >
      <label>Add Ability</label>
      <input className="input" type="text" value={AddString} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
};
export default AddString;
