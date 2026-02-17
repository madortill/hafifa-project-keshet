import React from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import OpenScreen from "../components/OpenScreen/OpenScreen.jsx";
import IntroScreen from "../components/IntroAnimationScreen/IntroAnimationScreen.jsx";
import TopicsScreen from "../components/TopicsScreen/TopicsScreen.jsx";
import LearningScreen from "../components/LearningScreen/LearningScreen.jsx";
import LearningEndScreen from "../components/LearningEndScreen/LearningEndScreen.jsx";
import TrueFalsePractice from "../components/TrueFalsePractice/TrueFalsePractice.jsx";
import AsteroidPractice from "../components/AsteroidPractice/AsteroidPractice.jsx";
import FinalScreen from "../components/FinalScreen/FinalScreen.jsx";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<OpenScreen />} />
            <Route path="/intro" element={<IntroScreen />} />
            <Route path="/topics" element={<TopicsScreen />} />
            <Route path="/learn/:pageId" element={<LearningScreen />} />
            <Route
              path="/learn/end"
              element={
                <LearningEndScreen
                  title="וואוו כל הכבוד
סיימתם את כל החומר הלימודי בלומדה!!"
                  description="מוכנים להמשיך לתרגול?"
                  primaryButton={{
                    label: "אל התרגול!",
                    path: "/practice/intro",
                  }}
                  secondaryButton={{
                    label: "חזרה לחומר",
                    path: "/learn/1",
                  }}
                />
              }
            />

            <Route
              path="/practice/intro"
              element={
                <LearningEndScreen
                  title="תרגול נכון ולא נכון"
                  description="בתרגול הבא יהיו 7 שאלות על החומר הלימודי עליהן תצטרכו לענות ב”נכון” ו”לא נכון”. לחצו על הכפתורים המתאימים.
בהצלחה!"
                  primaryButton={{
                    label: "להתחלת התרגול!",
                    path: "/practice/1",
                  }}
                  resetCount={true}
                />
              }
            />
            <Route
              path="/practice/:questionId"
              element={<TrueFalsePractice />}
            />
            <Route
              path="/practice1/end"
              element={
                <LearningEndScreen
                  title="וואוו כל הכבוד
סיימתם את התרגול הראשון!!"
                  quesCounter={true}
                  description="בתרגול הבא תקבלו קואורדינטות מתחנת השיגור ותצטרכו להכניס את הקלט המתאים של הקואורדינטות בשביל לכוון את משגר הפצצות. לאחר מכן לחצו על כפתור שגר וראו אם הצלחתם לנטרל את האיום.
בהצלחה!"
                  primaryButton={{
                    label: "להתחלת התרגול!",
                    path: "/practiceAsteroid/1",
                  }}
                />
              }
            />
            <Route path="/practiceAsteroid/:questionId" element={<AsteroidPractice />} />
            <Route path="/finalScreen" element={<FinalScreen />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
