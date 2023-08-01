import React from "react";
import "./CaughtPokemon.css";

const CaughtPokemon = (props) => {
  return (
    <div className="caught-pokemon-container">
      <h1 className="caught-pokemon-list-title">Pokemon List:</h1>
      <ul className="caught-pokemon-list">
        {props.pokemons.map((pokemonName) => {
          return (
            <li className="caught-pokemon-list-element" key={pokemonName}>
              {pokemonName}
            </li>
          );
        })}
      </ul>
      <div className="caught-pokemon-info">
        <p>{"Caught " + props.pokemons.length + " Pokémon on " + props.date}</p>
      </div>
    </div>
  );
};

export default CaughtPokemon;
