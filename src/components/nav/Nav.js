import React from 'react'
import './Nav.scss'
import Button from '../button/Button'

export default function Nav() {
  return (
    <div className="navbar">
      <div className="title">

        <h1>Linus</h1>
        <p>omg Linus you're so good at this and this is really impressive - me hyping myself up</p>
      </div>
      <div className="controller">
        <Button location="#home" id="home"/>
        <Button location="#projects" id="projects"/>
        <Button location="#about" id="about"/>
        <Button location="#gallery" id="gallery"/>
      </div>


      {/* <button href="#gallery">Gallery</button>
      <button href="#projects">Projects</button>
      <button href="#experience">experience</button>
      <button href="#email">email</button> */}

      {/* <h2>Contact</h2>
      <button href="https://www.linkedin.com/in/wattana-leas-9a54a0119/">LinkedIn</button>
      <button href="https://github.com/Leasw144">Github</button>
       */}
    </div>
  );
}