import React from 'react'
import './Skills.scss'

export default function Skills() {
  const tech = ["React", "AngularJs", "Hooks", "CSS/SCSS", "HTML", "Test Driven Development(TDD)", "Jest", "JavaScript", "Vue", "React Native", "API", "Git"]

  const listedTech = tech.map((tech, i) => {
    return (
      <li key={i}>{tech}</li>
    )
  })
  return (
    <div>
      <h1 className="skills">Skills and Technical abilities</h1>
      <ul>
        {listedTech}
      </ul>
    </div>
  )
}

