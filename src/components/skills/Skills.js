import React from 'react'
import './Skills.scss'
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

export default function Skills() {
  const tech = ["React", "AngularJs", "Hooks", "CSS/SCSS", "HTML", "(TDD)", "Jest", "JavaScript", "Vue", "React Native", "API", "Git"]

  const listedTech = tech.map((tech, i) => {
    let color = "blue"
    if(i % 2 === 0) color = "yellow"
    if(i % 3 === 0) color = "purple"
    if(i % 3 === 0 && i % 6 === 0) color = "red"
    console.log("your color", color)
    return (
      <Card key={tech} className={`skill-card ${color}`}>

          <h3>{tech}</h3>

      </Card>
    );
  })
  return (
    <div className="skill-container">
      <h1>Skills and Technical abilities</h1>
      <div className="skill-list">{listedTech}</div>
    </div>
  );
}

