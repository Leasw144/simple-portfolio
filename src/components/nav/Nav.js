import React from 'react'
import './Nav.scss'

export default function Nav() {
  return (
    <div className="navbar">
      <h1>Navigation</h1>
      <a href="#home">Home</a>
      <a href="#gallery">Gallery</a>
      <a href="#projects">Projects</a>
      <a href="#experience">experience</a>
      <a href="#email">email</a>

      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/wattana-leas-9a54a0119/">LinkedIn</a>
      <a href="https://github.com/Leasw144">Github</a>
      
    </div>
  );
}