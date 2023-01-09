import { useState, useEffect, useRef } from "react";
import { Project, Technology } from "../../../commons";
import { link_image } from "../../../assets/Home";
import style from "./projectCard.module.css";

import { openInNewTab } from "../../../commons";

const ProjectCard: React.FC<Project> = (props) => {
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
    <div
      ref={domRef}
      className={`${style["fade-in-section"]} ${
        isVisible ? style["is-visible"] : ""
      } card xl:card-side shadow-xl bg-stone-100 xl:aspect-video`}
    >
      <figure className="xl:w-3/4 xl:h-full h-96">
        <div className="w-full h-full flex align-middle justify-center">
          {props.img && (
            <img alt={props.title} src={props.img} className="object-contain" />
          )}
          {props.video && (
            <video className="object-contain" autoPlay muted loop>
              <source src={props.video} type="video/mp4" />
            </video>
          )}
        </div>
      </figure>
      <div className="card-body xl:max-w-xs">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div>
          {props.technologies.map((technology) => (
            <div className="mr-1 inline-block badge text-orange-600 badge-outline">
              {Technology[technology]}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
          {props.url && (
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab(props.url)}
            >
              <img
                alt={`Link to ${props.title}`}
                src={link_image}
                className="inline h-8 ml-4"
              />
            </button>
          )}
          {props.github && (
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab(props.github)}
            >
              <img
                alt={`Link to ${props.title} repository`}
                src={link_image}
                className="inline h-8 ml-4"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
