import "./Game.css";
import apiData from "../../Api/ApiGame";
import { useState, useEffect } from "react";
import GameCard from "../../components/GameCard/GameCard";

function Game() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [data, setData] = useState("");

  const handleSearchValue = (e) => {
    setData(e.target.value);
    getGames();
  };

  useEffect(() => {}, []);

  const getGames = async () => {
    try {
      const gamesList = await apiData(`games?search=${data}`, "&");

      console.log(gamesList.results);
      setAllData(gamesList.results);
      setFilteredData(gamesList.results);
    } catch (err) {
      console.error("err", err);
    }
  };

  return (
    <div className="App">
      <input
        value={data}
        onChange={handleSearchValue}
        type="text"
        id="input"
        name="input"
        required
        size="100%"
        placeholder="Entrer votre jeu"
        className="question"
        autocomplete="off"
      />
      <label for="nme"></label>
      <div className="article">
        {filteredData.map((c) => (
          <GameCard
            key={c?.id}
            name={c?.name}
            image={c?.background_image}
            genre={c.genres[0]?.name}
            release={c?.released}
            score={c?.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
