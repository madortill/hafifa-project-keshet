import { useParams } from "react-router-dom";
import data from "../../src/data/learningData.json";
import FlipCard from "../FlipCard/FlipCard.jsx";
import "./LearningScreen.css";
import NavigationButtons from "../NavigationButtons/NavigationButtons.jsx";
import earthGif from "../../src/assets/media/earth.gif";
import whatIsAsteroid from "../../src/assets/media/whatIsAsteroid.png";
import howToDestroy from "../../src/assets/media/howToDestroy.png";
import asteroidImgLeft from "../../src/assets/media/AsteroidFireLeft.svg";
import asteroidImgRight from "../../src/assets/media/AsteroidFireRight.svg";

function LearningScreen() {
  const { pageId } = useParams();

  const page = data.pages.find((p) => p.id === Number(pageId));

  if (!page) return <div>Page not found</div>;

  const imagesMap = {
    earthGif: earthGif,
    whatIsAsteroid: whatIsAsteroid,
    howToDestroy: howToDestroy,
  };

  return (
    <div className="learning-container">
      <div className="learning-info">
        <h1 className="learning-title">{page.title}</h1>

        <div className="learning-div">
          {page.type === "content" && (
            <>
              <p className="learning-p">{page.text}</p>

              {page.id === 1 ? (
                <div className="explosion-container">
                  <img src={earthGif} className="learning-info-img" />

                  <img src={asteroidImgLeft} className="asteroid-earth left-earth" />
                  <img src={asteroidImgRight} className="asteroid-earth right-earth " />
                </div>
              ) : (
                <img
                  src={imagesMap[page.image]}
                  alt={page.title}
                  className="learning-info-img"
                />
              )}
            </>
          )}

          {page.type === "flipcards" && (
            <>
              <p className="cards-description learning-p">
              יש 3 סוגים של אסטרואידים.
              לחצו על כל אחד מהקלפים כדי לקרוא.
              </p>

              <div className="cards-container">
                {page.cards.map((card, index) => (
                  <FlipCard key={index} card={card} />
                ))}
              </div>
            </>
          )}
        </div>

        <NavigationButtons
          currentPage={Number(pageId)}
          totalPages={data.pages.length}
        />
      </div>
    </div>
  );
}

export default LearningScreen;
