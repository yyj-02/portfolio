import { Logos, Projects, Technology } from "../commons";

export const projects: Projects = [
  {
    title: "Castaway Podcast App",
    description:
      "Created a podcast streaming + livestreaming app that combines the functionality of Spotify and Houseparty. Achieved Apollo 11 Level in Orbital 2022.",
    img: "src/assets/projectImages/castaway.gif",
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
    img: "src/assets/projectImages/lumo.png",
    technologies: [Technology.flutter, Technology.firebase, Technology.python],
    url: "https://atos.net/en/2022/singapore-press-releases_2022_08_10/national-university-of-singapore-announced-as-first-runner-up-in-the-atos-it-challenge-2022",
  },
  {
    title: "Customer Footfall Counter",
    description:
      "Developed a machine learning model to count the number of people entering and exiting a parameter through a CCTV footage.",
    img: "src/assets/projectImages/footfall.gif",
    technologies: [Technology.python, Technology.tensorflow],
    url: "https://github.com/yyj-02/Customer-Footfall-Counter",
  },
  {
    title: "CCA Manager",
    description:
      "Designed a mobile friendly web app to manage and track Hall CCA Information.",
    img: "src/assets/projectImages/cca.png",
    technologies: [Technology.typescript, Technology.vue, Technology.firebase],
    url: "https://github.com/yyj-02/CCA-Management-System",
  },
];

export const languages: Logos = [
  { name: "Typescript", img: "src/assets/logos/ts.png" },
  { name: "Javascript", img: "src/assets/logos/js.png" },
  { name: "Dart", img: "src/assets/logos/dart.png" },
  { name: "Python", img: "src/assets/logos/python.png" },
  { name: "Java", img: "src/assets/logos/java.png" },
  { name: "C++", img: "src/assets/logos/c.png" },
];

export const technologies: Logos = [
  { name: "Express", img: "src/assets/logos/express.png" },
  { name: "MongoDB", img: "src/assets/logos/mongo.png" },
  { name: "React", img: "src/assets/logos/react.png" },
  { name: "Vue", img: "src/assets/logos/vue.png" },
  { name: "Tailwind CSS", img: "src/assets/logos/tailwind.png" },
  { name: "Flutter", img: "src/assets/logos/flutter.png" },
  { name: "Firebase", img: "src/assets/logos/firebase.png" },
  { name: "Google Cloud Platform", img: "src/assets/logos/gcp.png" },
  { name: "Docker", img: "src/assets/logos/docker.png" },
  { name: "WebSocket", img: "src/assets/logos/socket.png" },
];
