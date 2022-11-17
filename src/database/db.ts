import { Experiences, Logos, Projects, Technology } from "../commons";
import {
  castaway,
  cca,
  footfall,
  lumo,
} from "../assets/projectImages/Projects";

import {
  c,
  dart,
  docker,
  express,
  firebase,
  flutter,
  gcp,
  java,
  js,
  mongo,
  python,
  react,
  socket,
  tailwind,
  ts,
  vue,
} from "../assets/logos/Logos";
import { nodeflair, nus, vibefam } from "../assets/companies/Companies";

export const projects: Projects = [
  {
    title: "Castaway Podcast App",
    description:
      "Created a podcast streaming + livestreaming app that combines the functionality of Spotify and Houseparty. Achieved Apollo 11 Level in Orbital 2022.",
    img: castaway,
    technologies: [
      Technology.flutter,
      Technology["socket.io"],
      Technology.docker,
      Technology.GCP,
      Technology.firebase,
    ],
    url: "https://github.com/yyj-02/castaway-backend",
  },
  {
    title: "Project Lumo",
    description:
      "Developed a mobile application that predicts forest wildfires in real time and warns user about it. Won First Runner-Up in ATos IT Challenge 2022.",
    img: lumo,
    technologies: [Technology.flutter, Technology.firebase, Technology.python],
    url: "https://atos.net/en/2022/singapore-press-releases_2022_08_10/national-university-of-singapore-announced-as-first-runner-up-in-the-atos-it-challenge-2022",
  },
  {
    title: "Customer Footfall Counter",
    description:
      "Developed a machine learning model to count the number of people entering and exiting a parameter through a CCTV footage.",
    img: footfall,
    technologies: [Technology.python, Technology.tensorflow],
    url: "https://github.com/yyj-02/Customer-Footfall-Counter",
  },
  {
    title: "CCA Manager",
    description:
      "Designed a mobile friendly web app to manage and track Hall CCA Information.",
    img: cca,
    technologies: [Technology.typescript, Technology.vue, Technology.firebase],
    url: "https://github.com/yyj-02/CCA-Management-System",
  },
];

export const languages: Logos = [
  { name: "Typescript", img: ts },
  { name: "Javascript", img: js },
  { name: "Dart", img: dart },
  { name: "Python", img: python },
  { name: "Java", img: java },
  { name: "C++", img: c },
];

export const technologies: Logos = [
  { name: "Express", img: express },
  { name: "MongoDB", img: mongo },
  { name: "React", img: react },
  { name: "Vue", img: vue },
  { name: "Tailwind CSS", img: tailwind },
  { name: "Flutter", img: flutter },
  { name: "Firebase", img: firebase },
  { name: "Google Cloud Platform", img: gcp },
  { name: "Docker", img: docker },
  { name: "WebSocket", img: socket },
];

export const jobs: Experiences = [
  {
    company: "Vibefam",
    position: "Software Engineer Intern",
    duration: "May 2022 - Aug 2022",
    description:
      "Designed and implemented the authentication page and the new user onboarding process during summer internship.",
    img: vibefam,
  },
  {
    company: "NUS",
    position: "Teaching Assistant",
    duration: "Aug 2022 - Nov 2022",
    description:
      "Taught a class of 8 computer science undergraduates the module CS1101S - Programming Methodology.",
    img: nus,
  },
  {
    company: "NodeFlair",
    position: "Software Engineer Intern",
    duration: "Starting in Dec 2022",
    description:
      "Incoming software engineer intern at NodeFlair, a job portal for tech talents in Singapore.",
    img: nodeflair,
  },
];
