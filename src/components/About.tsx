import "./styles/About.css";
import { PERSONAL_INFO } from "../data/personalData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {PERSONAL_INFO.bio}
        </p>
      </div>
    </div>
  );
};

export default About;
