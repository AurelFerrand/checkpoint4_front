import React from "react";
import "./GameCard.css";

const GameCard = ({ name, image, genre, release, score }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={image} alt={name}></img>
      <div className="info">
        <h1>{name}</h1>
        <p>{genre}</p>
        <h1>date de sortie : {release}</h1>
        <h1>score : {score}</h1>
      </div>
    </div>
  );
};

export default GameCard;
