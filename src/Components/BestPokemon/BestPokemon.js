import React from "react";
import "./BestPokemon.css"

const BestPokemon = (props) => {
    return (
      <div className="centered-div">
        <p>My favorite Pokémon is Squirtle</p>
        <ul className="centered-div">
          {props.abilities.map((ability, index) => {
            return <li key={index}>{ability}</li>
          })}
        </ul>
      </div>
    )
}

export default BestPokemon;