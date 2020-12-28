import './assets/projects/covid1.jpg'
import covid from "./assets/projects/covid1.jpg";
import tomatoes from "./assets/projects/tomatoes.jpg"

const projectList = {
  covid: {
    name: "Covid-Tracker",
    images: [covid, tomatoes, tomatoes],
    abstract:
      "An app that consumes the Postman API on Corona-Virus cases by country. Users will be able to view up to date global numbers of how many cases have been confirmed, recovered, and deceased. In addition to being able to find a list of all countries with the most recent updates, users can also click on individual countries to find more detailed information about their cases, as well as add those countries to a 'watch-list'.",
    tech: ["React-Router", "TDD", "Jest"],
    github: "https://github.com/Leasw144/rancid-tomatatillos",
  },
  tomatoes: {
    name: "Rotten Tomatatillos",
    images: [covid, tomatoes, tomatoes],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    tech: ["React", "TDD", "Jest", "Stuffffff"],
    github: "https://github.com/Leasw144/rancid-tomatatillos",
  },
  crate: {
    name: "Crate",
    images: [covid, tomatoes, tomatoes],
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si",
    tech: ["React", "TDD", "Jest", "Python", "PostGres"],
    github: "https://github.com/neeruram1/Crate",
  },
};

export default projectList;