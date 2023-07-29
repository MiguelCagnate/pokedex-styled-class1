import React, { useState } from "react";

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
    <form className="input-container" onSubmit={handleSubmit}>
      <label>Add Ability</label>
      <input type="text" value={AddString} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
};
export default AddString;
