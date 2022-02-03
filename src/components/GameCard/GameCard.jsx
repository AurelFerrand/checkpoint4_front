import { useState } from "react";
import "./GameCard.css";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const GameCard = ({ name, id, image, genre, release, score }) => {
  const [isFavorite, setIsFavorite] = useState();

  const handleFavorite = (name, id) => {
    setIsFavorite(!isFavorite);
    axios.post("http://localhost:5000/game", {
      name: name,
      slug_id: id,
    });
  };

  return (
    <div className="card-container">
      <img className="card-img" src={image} alt={name}></img>
      <div className="info">
        <h2>{name}</h2>
        <p>{genre}</p>
        <h2>date de sortie : {release}</h2>
        <h2>score : {score}</h2>
        <div
          id="favorite"
          className={isFavorite ? "isFavorite" : "notFavorite"}
          onClick={() => {
            handleFavorite(name, id);
          }}
          role="button"
          tabIndex={0}
        >
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
