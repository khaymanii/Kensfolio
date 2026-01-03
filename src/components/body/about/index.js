import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋, <br />I am <span className="info-name">Ken</span>,
          <br />A Frontend & DevOps Engineer with experience building
          production-ready applications and automating deployment workflows.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
