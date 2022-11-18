import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Typewriter from "typewriter-effect";
import styles from "./Home.module.css";
import { projects, languages, technologies, jobs } from "../../database/db";
import {
  github,
  instagram,
  layered_wave,
  linkedin,
  mail,
  wave,
} from "../../assets/Home";
import resume from "../../assets/YeohYongJie_resume.pdf";

import ProjectsTemplate from "../../components/templates/ProjectsTemplate";

import { openInNewTab } from "../../commons";
import SkillsTemplate from "../../components/templates/SkillsTemplate";
import ExperienceTemplate from "../../components/templates/ExperienceTemplate";

const Home = () => {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`md-flex m-5 md:m-10 lg:pl-5 ${styles.profile}`}>
          <h1 className="my-5 text-4xl lg:text-7xl font-bold">
            Hi! I'm Yong Jie.
          </h1>
          <div className="my-5 text-2xl lg:text-4xl font-semibold md-flex flex-row">
            <h2 className="inline-block">I am a&nbsp;</h2>
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
              <img
                alt="Yong Jie's LinkedIn"
                src={linkedin}
                className="inline h-10 mr-4"
              />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab("https://github.com/yyj-02/")}
            >
              <img
                alt="Yong Jie's GitHub"
                src={github}
                className="inline h-10 mx-4"
              />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab("mailto:yeohyongjie@outlook.com")}
            >
              <img
                alt="Yong Jie's Email"
                src={mail}
                className="inline h-10 mx-4"
              />
            </button>
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab(
                "https://www.instagram.com/littlebean.yeoh/"
              )}
            >
              <img
                alt="Yong Jie's Instagram"
                src={instagram}
                className="inline h-10 ml-4"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="min-h-screen py-5 md:px-5 lg:px-10 bg-[#2a303c]"
      >
        <ProjectsTemplate title="My Projects" projects={projects} />
      </div>
      <img
        src={layered_wave}
        className="w-full max-h-40 aspect-[5/1] object-cover"
      />
      <div className="h-screen min-h-screen py-5 md:px-5 lg:px-10 bg-[#5f6d88]">
        <SkillsTemplate
          title="My Skills"
          languages={languages}
          technologies={technologies}
        />
      </div>
      <img src={wave} className="w-full max-h-40 aspect-[5/1] object-cover" />
      <div className="min-h-screen py-5 md:px-5 lg:px-10 bg-[#2a303c]">
        <ExperienceTemplate title="My Experience" experiences={jobs} />
      </div>
      <div className="md:px-5 lg:px-10 bg-[#2a303c]">
        <div className="flex flex-col items-center text-white translate-y-1/2">
          <div className="my-5 text-2xl lg:text-4xl font-semibold">
            Want to know more?
          </div>
          <div
            className={`${styles["resume-btn"]} btn btn-wide btn-outline font-normal border-orange-300 hover:border-none hover:bg-orange-300 text-orange-300 hover:text-[#2a303c]`}
            onClick={openInNewTab(resume)}
          >
            <span
              className={`${styles.arrow} ${styles["arrow-spacer"]}`}
            ></span>
            View my resume&nbsp;&nbsp;&nbsp;
            <span
              className={`${styles.arrow} ${styles["arrow-orange"]}`}
            ></span>
          </div>
        </div>
        <div className="h-[50vh]"></div>
      </div>
    </>
  );
};

export default Home;
