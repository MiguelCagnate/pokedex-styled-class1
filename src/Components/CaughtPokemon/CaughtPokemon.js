import React from "react";
import "./CaughtPokemon.css"

const CaughtPokemon = (props) => {
    return (
      <p className="centered-text">Caught 0 Pokémon on {props.date}</p>
    )
}

export default CaughtPokemon;