import React from "react";
import "./Logo.css";

const Logo = (props) => {
const handleClick =()=>{
  alert('uy Zoona')
}


  return (
    <header>
      <div className="header-container">
        <h1 className="title">{"Hello " + props.appName}</h1>
        <div className="centered-image-container">
          <img
            className="centered-image"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pidgye"onClick={handleClick}/>
        </div>
      </div>
    </header>
  );
};

export default Logo;
