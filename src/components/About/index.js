import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I am a graduate of the Silesian University of Technology in Gliwice
            (Poland) at the Faculty of Automation, Electronics and Computer
            Science, where I completed my technical full-time studies in the
            field of "Automation and Robotics" with the degree of Master of
            Engineering. During my career so far, I have been exposed to many
            technical issues in automation and robotics and electrical
            engineering.
          </p>
          <p>
            Two months ago I started learning frontend programming. I quickly
            mastered the most important skills related to HTML markup language
            and CSS cascading style sheets. I am currently learning JavaScript
            and the ReactJS library. For now, I'm focusing on becoming very
            familiar with the basics of the language, as well as all other
            programming skills, including a good handle on the Git version
            control system and the Visual Studio development environment. In the
            near future, I also want to expand my CSS skills into SCSS, along
            with the Tailwind CSS framework and the BEM naming convention.
            Wanting to polish my skills in this area as soon as possible, I
            would like to take up a junior position where I could face the
            problems that are posed to programmers on a daily basis, which is an
            invaluable learning experience, as well as an opportunity to gain
            the necessary experience.
          </p>
          <p>
            I am open to new challenges, I quickly establish contacts with other
            people, which makes working in a group no problem for me, moreover,
            I duly perform the tasks entrusted to me. My most important skills
            include an analytical and mathematical mind, as well as a very good
            memory.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faSquareJs} color="#efd814" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
