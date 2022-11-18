import { Logos, Projects, Technology } from "../../../commons";
import ProjectCards from "../../organisms/ProjectCards";
import SkillBanner from "../../organisms/Skillbanner";
import style from "./projectsTemplate.module.css";

interface props {
  title: string;
  languages: Logos;
  technologies: Logos;
}

const ProjectsTemplate: React.FC<props> = (props) => {
  return (
    <div className="h-full relative">
      <h2 className="absolute top-0 left-0 text-2xl sm:text-3xl md:text-5xl font-bold text-white my-5 pl-5">
        {props.title}
      </h2>
      <div className="h-full flex flex-col align-middle px-5 justify-center grow">
        <SkillBanner title="Languages I code in 💻" items={props.languages} />
        <br />
        <SkillBanner
          title="Technologies I used 🔨"
          items={props.technologies}
        />
      </div>
    </div>
  );
};

ProjectsTemplate.defaultProps = {
  title: "Demo",
};

export default ProjectsTemplate;
