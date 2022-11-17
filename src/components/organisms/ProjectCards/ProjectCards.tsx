import { Projects } from "../../../commons";
import ProjectCard from "../../molecules/ProjectCard";
import style from "./projectCards.module.css";

interface props {
  projects: Projects;
}

const ProjectCards: React.FC<props> = (props) => {
  return (
    <div className={`${style.parent} grid grid-cols-1 md:grid-cols-2`}>
      {props.projects.map((project) => (
        <div className="m-5 flex md:hover:scale-105 transition-all duration-500">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
