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
  const projects = projectList.map(project => {
    return (
      <Projects name={project.name} img={project.images} projObj={project.abstract} tech={project.tech} />
    )
  })~
  console.log('app', covid)
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      {projects}
      {/* <Projects name="covid" img={covid} projObj={covidObj} />
      <Projects name="Rotten Tomatatillos" img={tomatoes} projObj={covidObj} /> */}
    </div>
  );
}

export default App;
