import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../src/data/practice2.json";
import "./AsteroidPractice.css";
import spaceLaunchStation from "../../src/assets/media/spaceLaunchStationSpeach.png";
import Asteroid from "../../src/assets/media/asteroid.svg";
import explosion from "../../src/assets/media/explosion.gif";
import Rocket from "../../src/assets/media/rocket-bomb-svgrepo-com.svg";
import launcher from "../../src/assets/media/launcher.svg";
import Btn from "../../src/assets/media/launch.svg";
import bg from "../../src/assets/media/MainBackground.png";

function AsteroidPractice() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const index = Number(questionId) - 1;
  const question = data.questions[index];

  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");
  const [rocketPosition, setRocketPosition] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [showExplosion, setShowExplosion] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setInputX("");
    setInputY("");
    setRocketPosition(null);
    setFeedback(null);
    setShowExplosion(false);
    setLocked(false);
  }, [questionId]);

  if (!question) return null;

  const handleLaunch = () => {
    if (locked) return;

    const x = Number(inputX);
    const y = Number(inputY);

    if (isNaN(x) || isNaN(y)) return;

    setLocked(true);

    // שלב 1 – מיקום התחלתי (משגר)
    setRocketPosition({ x: 90, y: 90 });

    // שלב 2 – אחרי רנדר אחד מזיזים ליעד
    setTimeout(() => {
      setRocketPosition({ x, y });
    }, 50);

    const tolerance = 3;

    // בדיקת פגיעה
    setTimeout(() => {
      const hit =
        Math.abs(x - question.x) <= tolerance &&
        Math.abs(y - question.y) <= tolerance;

      if (hit) {
        setShowExplosion(true);
        setFeedback("success");
      } else {
        setFeedback("fail");
      }

      setTimeout(() => {
        if (index + 1 < data.questions.length) {
          navigate(`/practiceAsteroid/${index + 2}`);
        } else {
          navigate("/finalScreen");
        }
      }, 2500);
    }, 1100);
  };

  return (
    <div className="asteroid-wrapper" style={{ backgroundImage: `url(${bg})` }}>
      {/* כותרת */}
      <div className="asteroid-header">
        <div className="asteroid-title">תרגול - פיצוץ אסטרואיד</div>
        <p className="asteroid-p">
          הכניסו את הקואורדינטות המתאימות לקלט ונסו לפוצץ את האסטרואיד בזמן
          ולהציל את כדור הארץ!
        </p>
      </div>
      <div className="game-astro-info">
        {/* בועית דיבור */}
        <div className="speach-div">
          <div className="asteroid-counter">
            {index + 1}/{data.questions.length}
          </div>
          <img
            src={spaceLaunchStation}
            alt="spaceLaunchStation"
            className="spaceLaunchStation"
          ></img>
          <div className="speech-bubble">
            הקואורדינטות הן: {question.x}X, {question.y}Y
          </div>
        </div>

        {/* אזור משחק */}
        <div className="space-area">
          {/* אסטרואיד */}
          <img
            src={Asteroid}
            alt=""
            className="asteroid"
            style={{ left: `${question.x}%`, top: `${question.y}%` }}
          />

          {/* פיצוץ */}
          {/* {showExplosion && (
            <img
              src={explosion}
              alt=""
              className="explosion"
              style={{ left: `${question.x}%`, top: `${question.y}%` }}
            />
          )} */}
          {showExplosion && (
            <div
              className="explosion"
              style={{ left: `${question.x}%`, top: `${question.y}%` }}
            />
          )}

          {/* טיל */}
          {rocketPosition && (
            <img
              src={Rocket}
              alt=""
              className="rocket"
              style={{
                left: `${rocketPosition.x}%`,
                top: `${rocketPosition.y}%`,
              }}
            />
          )}

          {/* משגר */}
          <img src={launcher} alt="" className="launcher" />
        </div>

        {/* אזור קלט */}
        <div className="controls">
          <input
            type="number"
            placeholder="Y"
            value={inputY}
            onChange={(e) => setInputY(e.target.value)}
          />

          <input
            type="number"
            placeholder="X"
            value={inputX}
            onChange={(e) => setInputX(e.target.value)}
          />

          <img
            src={Btn}
            alt="btn"
            className={`launch-btn ${locked ? "glow" : ""}`}
            onClick={handleLaunch}
          />
        </div>
      </div>

      {/* חיווי */}
      {/* {feedback === "success" && (
        <div className="feedback success">כל הכבוד!</div>
      )} */}
      {feedback === "success" && (
        <>
          <div className="confetti-container">
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  background: `hsl(${Math.random() * 360}, 80%, 60%)`,
                }}
              />
            ))}
          </div>
          <div className="feedback success">כל הכבוד!</div>
        </>
      )}

      {feedback === "fail" && <div className="feedback fail">לא נורא :)</div>}
    </div>
  );
}

export default AsteroidPractice;
