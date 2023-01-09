import { useState, useEffect, useRef } from "react";
import { Logos } from "../../../commons";
import style from "./skillBanner.module.css";

interface props {
  title: string;
  items: Logos;
}

const ProjectCards: React.FC<props> = (props) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5 text-2xl lg:text-4xl font-semibold text-[#2a303c]">
        {props.title}
      </div>
      <div className="flex flex-row flex-wrap justify-center align-middle">
        {props.items.map((logo) => (
          <div
            ref={domRef}
            className={`${style["fade-in-section"]} ${
              isVisible ? style["is-visible"] : ""
            } tooltip tooltip-top`}
            data-tip={logo.name}
          >
            <img
              alt={logo.name}
              src={logo.img}
              className="h-12 hover:scale-125 m-3 lg:h-20 w-auto lg:m-5 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
