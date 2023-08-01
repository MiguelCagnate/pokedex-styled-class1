import React, { useEffect, useState } from "react";

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => response.json())
      .then((pokemonData) => setPokemonData(pokemonData)       
    
  )}, []);

console.log(pokemonData)

    if (pokemonData) {
    return pokemonData ? (
        
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    ) : null;
  }
}

export default PokemonMoves;
