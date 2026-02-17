import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroAnimationScreen.css";
import Logo from "../../src/assets/media/till_whitelogo.svg";
import spaceship from "../../src/assets/media/spaceship.svg"
import bg from "../../src/assets/media/OpenAnim.gif";

function IntroScreen() {
  const navigate = useNavigate();

  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 2500);
    const timer2 = setTimeout(() => setShowButton(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="open-container" style={{ backgroundImage: `url(${bg})` }} >
      <div className="spaceship-wrapper">
        <img
          src={spaceship}
          alt="spaceship"
          className="spaceship glow"
        />
      </div>

      <img
        src={Logo}
        alt="Logo"
        className={`logo fade ${showContent ? "show" : ""}`}
      />

      <p className={`header fade ${showContent ? "show" : ""}`}>
        ברוכים הבאים ללומדת פיצוץ אסטרואידים!
      </p>

      <button
        className={`btn fade ${showButton ? "show" : ""}`}
        onClick={() => navigate("/topics")}
      >
        התחל
      </button>
    </div>
  );
}

export default IntroScreen;
