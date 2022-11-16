import { Projects, Technology } from "../../../commons";
import ProjectCards from "../../organisms/ProjectCards";
import style from "./projectsTemplate.module.css";

interface props {
  title: string;
  projects: Projects;
}

const ProjectsTemplate: React.FC<props> = (props) => {
  return (
    <>
      <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white my-5 pl-5">
        {props.title}
      </div>
      <ProjectCards projects={props.projects} />
    </>
  );
};

ProjectsTemplate.defaultProps = {
  title: "Demo",
  projects: [
    {
      title: "Demo",
      description: "Demo",
      img: "src/assets/portrait.jpg",
      technologies: [
        Technology.docker,
        Technology.flutter,
        Technology.express,
        Technology.firebase,
      ],
      url: "test",
    },
    {
      title: "Demo",
      description: "Demo",
      img: "src/assets/portrait.jpg",
      technologies: [
        Technology.docker,
        Technology.flutter,
        Technology.express,
        Technology.firebase,
      ],
      url: "test",
    },
    {
      title: "Demo",
      description: "Demo",
      img: "src/assets/portrait.jpg",
      technologies: [
        Technology.docker,
        Technology.flutter,
        Technology.express,
        Technology.firebase,
      ],
      url: "test",
    },
  ],
};

export default ProjectsTemplate;
