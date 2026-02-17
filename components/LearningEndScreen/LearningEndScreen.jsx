import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./LearningEndScreen.css";
import imgBtn from "../../src/assets/media/nextBtn.png";
import astroTil from "../../src/assets/media/astronautAndSpaceship.svg";
import bg from "../../src/assets/media/MainBackground.png";

function LearningEndScreen({
  title,
  description,
  primaryButton,
  secondaryButton,
  quesCounter,
  resetCount
}) {
  const navigate = useNavigate();

  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    const count = Number(localStorage.getItem("correctCount") || 0);
    setCorrectCount(count);

    if (resetCount) {
      localStorage.removeItem("correctCount"); // מוחק רק אם הבקשה הגיעה
    }
  }, [resetCount]);

  return (
    <div className="end-intro-container" style={{ backgroundImage: `url(${bg})` }} >
        <p className="end-intro-title">{title}</p>

        {quesCounter && (
            <p className="ques-counter">ענית נכון על {correctCount}/7 שאלות</p>
        )}

        <p className="end-intro-text">{description}</p>

        <div className="end-intro-buttons">
          <button
            onClick={() => navigate(primaryButton.path)}
            className="primary-btn"
          >
            {primaryButton.label}
            <img src={imgBtn} alt="img btn" className="img-btn-end-intro"></img>
          </button>

          {secondaryButton && (
            <button
              className="secondary-btn"
              onClick={() => navigate(secondaryButton.path)}
            >
              {secondaryButton.label}
            </button>
          )}
        </div>

        <img src={astroTil} alt="astro img" className="astroTil"></img>
      </div>
  );
}

export default LearningEndScreen;
