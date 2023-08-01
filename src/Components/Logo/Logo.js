import React from "react";
import "./Logo.css";

const Logo = (props) => {
const handleClick =()=>{
  alert('uy Zoona')
}


  return (
    <header>
      <div className="header-container">
        <div className="title-container">
          <h1 className="title">{props.appName}</h1>
          <h1 className="description">{props.description}</h1>
        </div>
        <div className="centered-image-container">
<<<<<<< HEAD
          <div className="pokemon-background"></div>
=======
          <img
            className="centered-image"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pidgye"onClick={handleClick}/>
>>>>>>> c4e2a9c644e01b9c5ce2be99ae97f53a145fb6a8
        </div>
      </div>
    </header>
  );
};

export default Logo;
