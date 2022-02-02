import React from "react";
import "./GameCard.css";

const GameCard = ({ name, image, genre, release, score }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={image} alt={name}></img>
      <div className="info">
        <h2>{name}</h2>
        <p>{genre}</p>
        <h2>date de sortie : {release}</h2>
        <h2>score : {score}</h2>
      </div>
    </div>
  );
};

export default GameCard;
