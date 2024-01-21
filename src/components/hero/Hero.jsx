import "./hero.css";
import Button from "../button/Button";
import video from "../../assets/video/gameArena.mp4";

const Hero = () => {
  return (
    <div className="hero-content">
      <video autoPlay muted loop id="hero-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-text">
        <div className="hero-title">
          <h2 className="hero-subtitle text-center">
            JOIN THE BIGGEST GAMING PLATFORM
          </h2>

          <div className="hero-body">
            <h4>Choose a game suits your style</h4>

            <div className="hero-buttons">
              <button className="hero-button">Find Out more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
