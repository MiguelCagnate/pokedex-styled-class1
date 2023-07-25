import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <header>
      <div className="header-container">
        <h1 className="title">{"Hello " + props.appName}</h1>
        <div className="centered-image-container">
          <img
            className="centered-image"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          />
        </div>
      </div>
    </header>
  );
};

export default Logo;
