import React from "react";
import "./Logo.css";

const Logo = (props) => {
  return (
    <header>
      <div className="header-container">
        <div className="title-container">
          <h1 className="title">{props.appName}</h1>
          <h1 className="description">{props.description}</h1>
        </div>
        <div className="centered-image-container">
          <div className="pokemon-background"></div>
        </div>
      </div>
    </header>
  );
};

export default Logo;
