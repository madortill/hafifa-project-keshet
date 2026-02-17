import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoadAnim from "../../src/assets/media/LoaderAnimation.gif"
import "./OpenScreen.css";

function OpenScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/intro")
    }, 2500)
  }, [])

  return (
    <div className="load-container">
        <img src={LoadAnim} alt="Load Animation" className="load-gif"></img>
    </div>
  )
}

export default OpenScreen
