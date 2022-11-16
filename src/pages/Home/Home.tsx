import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
import styles from "./Home.module.css";
import { projects, languages, technologies } from "../../database/db";

import ProjectsTemplate from "../../components/templates/ProjectsTemplate";

import { openInNewTab } from "../../commons";
import SkillsTemplate from "../../components/templates/SkillsTemplate";

const Home = () => {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`md-flex m-5 md:m-10 lg:pl-5 ${styles.profile}`}>
          <div className="my-5 text-4xl lg:text-7xl font-bold">
            Hi! I'm Yong Jie.
          </div>
          <div className="my-5 text-2xl lg:text-4xl font-semibold md-flex flex-row">
            <div className="inline-block">I am a&nbsp;</div>
            <div className="text-orange-600 inline-block">
              <Typewriter
                options={{
                  strings: ["Software Developer", "Student", "Creator"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="my-5 lg:text-xl">
            I am a Computer Science student in the National University of
            Singapore. I like to explore new technologies and learn quality
            code. Currently, I can code in Typescript, Java and Python. Besides
            coding, I also enjoy playing squash and badminton. Let's connect if
            you are interested!
          </p>
          <HashLink smooth to="/#projects">
            <button
              className={`transition duration-200 ease-in-out active:scale-90 my-2 ${styles["btn-black"]}`}
            >
              VIEW MY PROJECTS&nbsp;&nbsp;
              <span
                className={`${styles.arrow} ${styles["arrow-black"]}`}
              ></span>
            </button>
          </HashLink>
          <div className="md-flex flex-row my-5">
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab("https://www.linkedin.com/in/yeohyongjie/")}
            >
              <img src="src/assets/linkedin.svg" className="inline h-10 mr-4" />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab("https://github.com/yyj-02/")}
            >
              <img src="src/assets/github.svg" className="inline h-10 mx-4" />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab("mailto:yeohyongjie@outlook.com")}
            >
              <img src="src/assets/mail.png" className="inline h-10 mx-4" />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab(
                "https://www.instagram.com/littlebean.yeoh/"
              )}
            >
              <img
                src="src/assets/instagram.svg"
                className="inline h-10 ml-4"
              />
            </button>
          </div>
        </div>
      </div>
      <div id="projects" className="min-h-screen py-5 md:px-5 lg:px-10">
        <ProjectsTemplate title="My Projects" projects={projects} />
      </div>
      <img
        src="src/assets/layered_wave.svg"
        className="w-full max-h-40 aspect-[5/1] object-cover"
      />
      <div className="h-screen min-h-screen py-5 md:px-5 lg:px-10 bg-[#5f6d88]">
        <SkillsTemplate
          title="My Skills"
          languages={languages}
          technologies={technologies}
        />
      </div>
    </>
  );
};

export default Home;
