import { useState } from "react";
import "./FlipCard.css";
import AsteroidBaby from "../../src/assets/media/AstroidBaby.png";
import AsteroidTeen from "../../src/assets/media/AstroidTeen.png";
import AsteroidOld from "../../src/assets/media/AstroidOld.png";

function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const cardImages = {
    "AsteroidBaby.png": AsteroidBaby,
    "AsteroidTeen.png": AsteroidTeen,
    "AsteroidOld.png": AsteroidOld,
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-inner">
        <div className="flip-front">
          <img
            src={cardImages[card.image]}
            alt={card.front}
            className={`card-image ${
              card.image === "AsteroidBaby.png" ? "baby-asteroid" : ""
            }`}
          />
          <h3 className="card-title">{card.front}</h3>
        </div>

        <div className="flip-back">
          <text className="card-title">{card.front}</text>
          <text className="card-p-back">{card.back}</text>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
