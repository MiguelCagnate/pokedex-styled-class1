import React, { useState } from "react";
import "./NewPokemon.css";

const NewPokemon = (props) => {
  const [newPokemonName, setNewPokemonName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onNewPokemon(newPokemonName);
    setNewPokemonName("");
  };

  const handleChange = (event) => {
    setNewPokemonName(event.target.value);
  };

  return (
    <div className="new-pokemon-container">
      <h2 className="new-pokemon-title">New Pokemon</h2>
      <form onSubmit={handleSubmit} className="new-pokemon-form">
        <input
          type="text"
          value={newPokemonName}
          onChange={handleChange}
          placeholder="Pokemon name"
          className="new-pokemon-input"
        />
        <button type="submit" className="new-pokemon-submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewPokemon;
