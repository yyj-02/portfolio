import { Logos } from "../../../commons";
import style from "./skillBanner.module.css";
import { Tooltip } from "@chakra-ui/react";

interface props {
  title: string;
  items: Logos;
}

const ProjectCards: React.FC<props> = (props) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="my-5 text-2xl lg:text-4xl font-semibold text-[#2a303c]">
        {props.title}
      </div>
      <div className="flex flex-row flex-wrap justify-center align-middle">
        {props.items.map((logo) => (
          <Tooltip
            label={logo.name}
            hasArrow
            arrowSize={5}
            bg="#292f3a"
            color="white"
            paddingX="5"
            marginTop="10"
            rounded="5"
          >
            <img
              src={logo.img}
              className="h-12 hover:scale-125 m-3 lg:h-20 w-auto lg:m-5 transition-all duration-500"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
