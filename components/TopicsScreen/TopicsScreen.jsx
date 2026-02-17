import { useNavigate } from "react-router-dom";
import "./TopicsScreen.css";
import topics from "../../src/assets/media/topics.png";
import clouds from "../../src/assets/media/clouds.png";
import astro from "../../src/assets/media/astronautAndSpaceship2.svg";

function TopicsScreen() {
  const navigate = useNavigate();

  return (
    <div className="topics-container">
      <text className="TopicPageHeader">מוכנים לדעת איך להציל את כדור הארץ?</text>
      <text className="TopicPageText">אלה הם הנושאים שנלמד היום בדיוק בשביל זה!</text>

      <img src={topics} alt="topics" className="topics"></img>

      <img src={clouds} alt="clouds" className="clouds"></img>

      <img src={astro} alt="astro" className="astro"></img>

      <button
      className="TopicsBtn"
        onClick={() => navigate("/learn/1")}
      >
        לתחילת הלמידה
      </button>
    </div>
  );
}

export default TopicsScreen;
