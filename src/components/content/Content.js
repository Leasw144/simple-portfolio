import React from "react";
import "./Content.scss";
import Intro from '../intro/Intro'
import Gallery from '../gallery/Gallery'
import Projects from '../projects/Projects'

export default function Content() {
  return (
    <div className="content">
      <h1>This is the Content of the stuff</h1>
      <Intro />
      <Projects />
      <Gallery />


    </div>
  )
}
