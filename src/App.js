import React from "react";
import Logo from "./Components/Logo/Logo";
import CaughtPokemon from "./Components/CaughtPokemon/CaughtPokemon";
import "./App.css"
import BestPokemon from "./Components/BestPokemon/BestPokemon";
 

function App() {
  const appName = "Pokedex";
  const dateString = (new Date()).toLocaleDateString();
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']; 
  return (
    <div className="app-container">
      <Logo appName={appName}/>
      <BestPokemon abilities={abilities}/>
      <CaughtPokemon date={dateString}/>
    </div>
  );
}

export default App;
