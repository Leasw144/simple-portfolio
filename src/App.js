import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav'
import About from './components/about/About.js'
import Skills from './components/skills/Skills.js'
import Content from './components/content/Content.js'

function App() {
  return (
    <div className="App">
        <Nav />
        <About />
        <Skills />
    </div>
  );
}

export default App;
