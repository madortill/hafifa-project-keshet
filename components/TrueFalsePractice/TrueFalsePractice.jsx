import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../src/data/practice1.json";
import "./TrueFalsePractice.css";
import astroTil from "../../src/assets/media/astronautAndSpaceship.svg";

function TrueFalsePractice() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const questionIndex = Number(questionId) - 1;
  const question = data.questions[questionIndex];

  const [feedback, setFeedback] = useState(null);
  const [locked, setLocked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(Number(localStorage.getItem("correctCount") || 0));  

  if (!question) return <div>שאלה לא נמצאה</div>;

  const handleAnswer = (answer) => {
    if (locked) return;

    setLocked(true);
    setSelectedAnswer(answer); // שמירה על מה נלחץ

    const isCorrect = answer === question.correctAnswer;
    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
        const newCount = correctCount + 1;
        localStorage.setItem("correctCount", newCount);
        setCorrectCount(newCount);
      }      

    setTimeout(() => {
      if (questionIndex + 1 < data.questions.length) {
        navigate(`/practice/${questionIndex + 2}`);
      } else {
        navigate("/practice1/end");
      }
    }, 2000);
  };

  useEffect(() => {
    setFeedback(null);
    setLocked(false);
  }, [questionId]);

  return (
    <div className="practice-container">
      <div className="practice1-info">
        <p className="practice1-title">תרגול נכון ולא נכון</p>
        <div className="practice1-div">
          {/* Counter */}
          <div className="practice-counter">
            {questionIndex + 1}/{data.questions.length}
          </div>

          {/* שאלה */}
          <div className="practice-question">{question.text}</div>

          {/* כפתורים */}
          <div className="practice-buttons">
            <button
              className={`answer-btn true 
                ${feedback && selectedAnswer === true && selectedAnswer === question.correctAnswer ? "correct" : ""}
                ${feedback && selectedAnswer === true && selectedAnswer !== question.correctAnswer ? "highlight" : ""}`}
              onClick={() => handleAnswer(true)}
            >
              נכון
            </button>

            <button
              className={`answer-btn false
                ${feedback && selectedAnswer === false && selectedAnswer === question.correctAnswer ? "correct" : ""}
                ${feedback && selectedAnswer === false && selectedAnswer !== question.correctAnswer ? "highlight" : ""}`}
              onClick={() => handleAnswer(false)}
            >
              לא נכון
            </button>
          </div>

          {/* טקסט חיווי */}
          {feedback && (
            <div className={`feedback ${feedback}`}>
              {feedback === "correct" ? "יפה מאוד!" : "לא נכון :("}
            </div>
          )}
        </div>
        <img src={astroTil} alt="astro img" className="astroTil-practice"></img>
      </div>
    </div>
  );
}

export default TrueFalsePractice;
