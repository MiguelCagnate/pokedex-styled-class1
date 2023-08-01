import React, { useState } from "react";
import Logo from "./Components/Logo/Logo";
import CaughtPokemon from "./Components/CaughtPokemon/CaughtPokemon";
import "./App.css";
import NewPokemon from "./Components/NewPokemon/NewPokemon";

function App() {
  const appName = "Pokedex";
  const description = "A dummy pokemon list";
  const dateString = new Date().toLocaleDateString();

  const [caughtPokemons, setCaughtPokemons] = useState([
    "Pikachu",
    "Charizard",
    "Bulbasaur",
    "Squirtle",
  ]);
  const onPokemonEnteredListener = (newPokemon) => {
    setCaughtPokemons([...caughtPokemons, newPokemon]);
  };

  return (
    <div className="app-container">
      <Logo appName={appName} description={description} />
      <div className="pokemon-container">
        <div className="caught-pokemon-content">
        <CaughtPokemon date={dateString} pokemons={caughtPokemons} />
        </div>
        <div className="new-pokemon-content">
        <NewPokemon onNewPokemon={onPokemonEnteredListener} />
        </div>
      </div>
    </div>
  );
}

export default App;
