import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./FinalScreen.css";
import imgBtn from "../../src/assets/media/nextBtn.png";
import astroTil from "../../src/assets/media/astronautAndSpaceship2.svg";
import bg from "../../src/assets/media/backgroundEnd.png";

function FinalScreen() {
  const navigate = useNavigate();

  return (
      <div className="end-intro-container" style={{ backgroundImage: `url(${bg})` }}>
        <p className="end-intro-title">וואוו כל הכבוד
        סיימתם את הלומדה!!</p>
        
        <p className="end-intro-text">עכשיו אתם מומחים בפיצוץ אסטרואידים ומוכנים להציל את כדור הארץ!</p>
        
        <button
            onClick={() => navigate("/intro")}
            className="primary-btn"
          >
            בחזרה ללומדה
            <img src={imgBtn} alt="img btn" className="img-btn-end-intro"></img>
          </button>

        <img src={astroTil} alt="astro img" className="astroTil"></img>
      </div>
  );
}

export default FinalScreen;
