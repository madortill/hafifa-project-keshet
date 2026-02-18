import { useNavigate } from "react-router-dom";
import backBtn from "../../src/assets/media/backBtn.png";
import nextBtn from "../../src/assets/media/nextBtn.png";
import "./NavigationButtons.css";

function LearningNavigation({ currentPage, totalPages }) {
  const navigate = useNavigate();

  const goNext = () => {
    if (currentPage < totalPages) {
      navigate(`/learn/${currentPage + 1}`);
    }
  };

  const goBack = () => {
    if (currentPage > 1) {
      navigate(`/learn/${currentPage - 1}`);
    }
  };

  const handleClick = () => {
    if (currentPage === totalPages) {
      navigate("/learn/end");
    } else {
      goNext();
    }
  };  

  return (
    <div className="learning-nav">
      <img
        src={nextBtn}
        alt="next btn"
        className="nav-btn"
        onClick={handleClick} 
      ></img>

      {currentPage>1 && <img
        src={backBtn}
        alt="back btn"
        className="nav-btn"
        onClick={goBack}
        disabled={currentPage === 1}
      ></img>}
    </div>
  );
}

export default LearningNavigation;
