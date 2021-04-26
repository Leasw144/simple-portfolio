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
      "An app that consumes the Postman API on Corona-Virus cases by country. There is a dropdown search menu that retrieves the latest stats for a country, as well as the ability to save countries to a 'watch-list'",
    tech: ["React-Router", "TDD", "Jest"],
    github: "https://github.com/Leasw144/covid-tracker",
  },
  tomatoes: {
    name: "Rotten Tomatatillos",
    images: [tomatoes1, tomatoes2, tomatoes3],
    abstract:
      "This app allows for psuedo login capabilities, and retrieves movie information upon success. Users can favorite, comment, or rate movies. My worked primarily on creating the rating functionality and the css.",
    tech: ["React", "TDD", "Jest", "Stuffffff"],
    github: "https://github.com/Leasw144/rancid-tomatatillos",
  },
  crate: {
    name: "Crate",
    images: [crate1, crate2, crate3],
    abstract:
      "This was a group project involving both the front-end and back-end. Using legacy we code, we added a new feature that allowed users to take a buzzfeed type quiz and have it return the results at the end. I worked on api development and the css and the overall UX on the front end",
    tech: ["React", "TDD", "Jest", "Python", "PostGres"],
    github: "https://github.com/neeruram1/Crate",
  },
  overlook: {
    name: "Overlook Hotel",
    images: [overlook1, overlook2, overlook3],
    abstract:
      "This vanilla JavaScript application uses pseudo login credentials and allows users to pick dates on a hotel to reserve a room. There is also a manager login that allows them to delete or edit reservations. This was a solo project completed in 3 days.",
    tech: ["TDD", "HTML", "JavaScript", "API", "Chai", "Mocha"],
    github: "https://github.com/Leasw144/overlook",
  },
};

export default projectList;