import { Project, Technology } from "../../../commons";
import { link_image } from "../../../assets/Home";
import style from "./projectCard.module.css";

import { openInNewTab } from "../../../commons";

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <div className="card xl:card-side shadow-xl bg-stone-100 xl:aspect-video">
      <figure className="xl:w-3/4 xl:h-full h-96">
        <div className="w-full h-full flex align-middle justify-center">
          <img src={props.img} className="object-contain" />
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
              <img src={link_image} className="inline h-8 ml-4" />
            </button>
          )}
          {props.github && (
            <button
              className="transition duration-200 ease-in-out active:scale-90"
              onClick={openInNewTab(props.github)}
            >
              <img src={link_image} className="inline h-8 ml-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
