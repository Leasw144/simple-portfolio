import covid1 from "./assets/projects/covid1.gif";
import covid2 from "./assets/projects/covid2.gif";
import covid3 from "./assets/projects/covid3.gif";
import tomatoes1 from "./assets/projects/tomatoes1.gif"
import tomatoes2 from "./assets/projects/tomatoes2.gif"
import tomatoes3 from "./assets/projects/tomatoes3.gif"
import crate1 from "./assets/projects/crate1.png"
import crate2 from "./assets/projects/crate2.png"
import crate3 from "./assets/projects/crate3.png"
import overlook1 from "./assets/projects/overlook1.png"
import overlook2 from "./assets/projects/overlook2.png"
import overlook3 from "./assets/projects/overlook3.png"

const projectList = {
  covid: {
    name: "Covid-Tracker",
    images: [covid1, covid2, covid3],
    abstract:
      "An app that consumes the Postman API on Corona-Virus cases by country. Users will be able to view up to date global numbers of how many cases have been confirmed, recovered, and deceased. In addition to being able to find a list of all countries with the most recent updates, users can also click on individual countries to find more detailed information about their cases, as well as add those countries to a 'watch-list'.",
    tech: ["React-Router", "TDD", "Jest"],
    github: "https://github.com/Leasw144/rancid-tomatatillos",
  },
  tomatoes: {
    name: "Rotten Tomatatillos",
    images: [tomatoes1, tomatoes2, tomatoes3],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    tech: ["React", "TDD", "Jest", "Stuffffff"],
    github: "https://github.com/Leasw144/rancid-tomatatillos",
  },
  crate: {
    name: "Crate",
    images: [crate1, crate2, crate3],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    tech: ["React", "TDD", "Jest", "Python", "PostGres"],
    github: "https://github.com/neeruram1/Crate",
  },
  overlook: {
    name: "Overlook Hotel",
    images: [overlook1, overlook2, overlook3],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    tech: ["TDD", "HTML", "JavaScript", "API", "Chai", "Mocha"],
    github: "https://github.com/neeruram1/Crate",
  },
};

export default projectList;