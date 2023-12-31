import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import ProjectItem from "../ProjectItem";
import Loader from "react-loaders";
import tindog from "../../assets/images/tindog.png";
import keeper from "../../assets/images/keeper.png";
import drumkit from "../../assets/images/drumkit.png";
import "../Projects/index.scss";


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover text-animate-hover-projects');
    }, 5000);
  }, []);

  return (
    <>
    <div className="project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', '  ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={11}
          />
        </h1>
        <div className="projects">
          <div className="projectList">
            <ProjectItem name="Tindog" image={tindog} link="https://tindog-pffl-astkout.vercel.app/"/>
            <ProjectItem name="Keeper" image={keeper} link="https://keeper-git-main-astkout.vercel.app/"/>
            <ProjectItem name="Drumkit" image={drumkit} link="https://drum-kit-nine-liard.vercel.app/"/>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default Projects;