import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, <br />I am <span className="info-name">Ken</span>,
          <br />a Frontend Engineer, DevOps Engineer, and Innovation Officer
          focused on building production-ready applications, automating
          deployment workflows, and driving impactful technology solutions.
        </div>

        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt="Coding illustration"
          />
        </div>
      </div>

      <SocialContact />
    </div>
  );
}

export default About;
