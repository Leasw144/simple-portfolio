import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav'
import About from './components/about/About.js'
import Skills from './components/skills/Skills.js'
import Projects from './components/projects/Projects.js'
import Content from './components/content/Content.js'

import covid from "./assets/projects/covid1.jpg";
import tomatoes from "./assets/projects/tomatoes.jpg";
import projectList from "./pictures.js"



function App() {
  console.log(projectList);

  // console.log('app', projects)
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />

      <Projects
        name="covid"
        img={covid}
        abstract={projectList.covid.abstract}
        tech={projectList.covid.tech}
        allProj={projectList}
      />
      <Projects
        name="Rotten Tomatatillos"
        img={tomatoes}
        abstract={projectList.tomatoes.abstract}
        tech={projectList.tomatoes.tech}
        allProj={projectList}
      />
    </div>
  );
}

export default App;
