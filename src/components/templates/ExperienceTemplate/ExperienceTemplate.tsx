import React, { useEffect, useRef, RefObject } from "react";
import { Experiences } from "../../../commons";
import style from "./experienceTemplate.module.css";
interface props {
  title: string;
  experiences: Experiences;
}

const ExperienceTemplate: React.FC<props> = (props) => {
  const line = useRef();
  const cards = useRef();

  const updateLine = () => {
    const first_children_height = // @ts-ignore
      cards.current.children[0].children[0].offsetHeight;
    const last_children_height = // @ts-ignore
      cards.current.lastChild.children[0].offsetHeight;
    // @ts-ignore
    line.current.style.height = `${
      // @ts-ignore
      cards.current.offsetHeight -
      first_children_height / 2 -
      last_children_height / 2
    }px`;
    // @ts-ignore
    cards.current.style.transform = `translate(0px, -${
      first_children_height / 2
    }px)`;
  };

  const updateGradient = (event) => {
    const scrolled = -(
      // @ts-ignore
      (line.current.getBoundingClientRect()["top"] - window.innerHeight / 2)
    );
    // @ts-ignore
    const full = line.current.offsetHeight;
    const percentage = (scrolled / full) * 100;
    // @ts-ignore
    line.current.style.background = `linear-gradient(180deg, rgba(54,1,103,1) 0%, rgba(251,140,171,1) ${percentage}%, rgba(255,255,255,1) ${
      percentage + 0.01
    }%, rgba(255,255,255,1) 100%)`;
    // console.log(window.scrollY - line.current.getBoundingClientRect()["top"]);
  };

  useEffect(() => {
    if (cards.current && line.current) {
      const first_children_height = // @ts-ignore
        cards.current.children[0].children[0].offsetHeight;
      const last_children_height = // @ts-ignore
        cards.current.lastChild.children[0].offsetHeight;
      // @ts-ignore
      line.current.style.height = `${
        // @ts-ignore
        cards.current.offsetHeight -
        first_children_height / 2 -
        last_children_height / 2
      }px`;
      // @ts-ignore
      cards.current.style.transform = `translate(0px, -${
        first_children_height / 2
      }px)`;
      window.addEventListener("resize", updateLine);
      window.addEventListener("scroll", updateGradient);
    }
  }, []);

  return (
    <div className="relative h-full flex flex-col items-center">
      <h2 className="absolute top-0 left-0 text-2xl sm:text-3xl md:text-5xl font-bold text-white my-5 pl-5">
        {props.title}
      </h2>
      <div className={style.spacer}></div>
      <div className="text-white relative">
        <div
          ref={line as unknown as RefObject<HTMLObjectElement>}
          className="translate-x-[18px] absolute lg:translate-x-1/2 lg:right-1/2 bg-white w-2 h-96"
        ></div>
        <div ref={cards as unknown as RefObject<HTMLObjectElement>}>
          {props.experiences.map((experience, idx, arr) => (
            <div>
              <div className="justify-start lg:justify-center flex flex-row items-center">
                <div className="hidden lg:flex opacity-0 flex-row items-center">
                  <img
                    alt={experience.company}
                    src={experience.img}
                    className="h-24 mr-3 mb-3 md:mb:0 bg-white w-24 p-2 rounded-lg"
                  />
                  <div className="group relative">
                    <div className="0">
                      <div className="text-xl font-semibold mb-3">
                        {experience.company}
                      </div>
                      <div>
                        <span>{experience.position}</span>
                        <span>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>
                        <span className="text-orange-300 text-sm italic">
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 translate-y-1/2 max-w-lg">
                      {experience.description}
                    </div>
                  </div>
                </div>
                <div className="m-3 rounded-full lg:m-5 w-5 h-5 bg-white"></div>
                <div className="flex-col items-start flex md:flex-row md:items-center">
                  <div className="h-24 mr-0 md:mr-3 mb-3 md:mb-0 bg-white w-24 p-2 rounded-lg">
                    <img
                      alt={experience.company}
                      src={experience.img}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="group relative md:max-w-auto sm:max-w-md max-w-xs">
                    <div className="md:group-hover:opacity-0 transition-all duration-500">
                      <div className="text-xl font-semibold mb-3">
                        {experience.company}
                      </div>
                      <div>
                        <span>{experience.position}</span>
                        <span className="hidden md:inline">
                          &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;
                        </span>
                        <span className="hidden md:inline text-orange-300 text-sm italic">
                          {experience.duration}
                        </span>
                      </div>
                      <div className="block md:hidden text-orange-300 text-sm italic mb-3">
                        {experience.duration}
                      </div>
                      <div className="block md:hidden text-sm italic">
                        {experience.description}
                      </div>
                    </div>
                    <div className="hidden md:block md:group-hover:opacity-100 absolute bottom-1/2 translate-y-1/2 max-w-lg opacity-0 transition-all duration-500">
                      {experience.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className={idx === arr.length - 1 ? "h-0" : "h-60"}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ExperienceTemplate.defaultProps = {
  title: "Demo",
  experiences: [
    {
      company: "Vibefam",
      position: "Software Engineer Intern",
      duration: "May 2022 - Aug 2022",
      description:
        "Designed and implemented the authentication page and the new user onboarding process during summer internship.",
      img: "na",
    },
  ],
};

export default ExperienceTemplate;
