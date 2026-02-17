// import { useEffect , useState } from "react"
// import { useNavigate } from "react-router-dom"
// import "./IntroAnimationScreen.css";
// import Logo from "../../src/assets/media/till_whitelogo.svg"

// function IntroScreen() {
//   const navigate = useNavigate()
//   const [showContent, setShowContent] = useState(false);
//   const [showButton, setShowButton] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowContent(true);
// //     }, 3000)}); // 3 שניות
//     useEffect(() => {
//         setTimeout(() => {setShowContent(true);}, 3000)
//         setTimeout(() => setShowButton(true), 5000);
//       }, [])

//   return (
//     <div className="open-container">
//         <img src="src/assets/media/spaceship.svg" alt="spaceship" className="spaceship"></img>
//         {showContent && (
//         <>
//           <img src={Logo} alt="Logo" className="logo" />
//           <p className="header">ברוכים הבאים ללומדת פיצוץ אסטרואידים!</p>
//           <button className="btn" onClick={() => navigate("/")}>התחל</button>
//         </>
//       )}
//     </div>
//   )
// }

// export default IntroScreen

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroAnimationScreen.css";
import Logo from "../../src/assets/media/till_whitelogo.svg";

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
    <div className="open-container">
      <div className="spaceship-wrapper">
        <img
          src="src/assets/media/spaceship.svg"
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
