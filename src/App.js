import React, { useState } from "react";
import Logo from "./Components/Logo/Logo";
import BestPokemon from "./Components/BestPokemon/BestPokemon";
import CaughtPokemon from "./Components/CaughtPokemon/CaughtPokemon";
import "./App.css";
import AddString from "./Components/AddString/AddString";

function App() {
  const appName = "Pokedex";
  const dateString = new Date().toLocaleDateString();
  const [abilities, setAbilities] = useState(["Anticipation", "Adaptability", "Run-Away"]);
  const handleNewAbility =(newAbility)=>{
    setAbilities([...abilities, newAbility])
  }

  return (
    <div className="app-container">
      <Logo appName={appName} />
      <BestPokemon abilities={abilities} />
      <AddString onFormCompleted={handleNewAbility} />
      <CaughtPokemon date={dateString} />
    </div>
  );
}

export default App;
