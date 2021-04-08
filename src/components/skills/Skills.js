import React from 'react'
import './Skills.scss'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Skills() {
  const tech = ["React", "AngularJs", "Hooks", "CSS/SCSS", "HTML", "(TDD)", "Jest", "JavaScript", "Vue", "React Native", "API", "Git"]

  const listedTech = tech.map((tech, i) => {
    return (
      <Card className="skill-card">

          <h3>{tech}</h3>

      </Card>
    );
  })
  return (
    <div>
      <h1>Skills and Technical abilities</h1>
      <div className="skill-list">{listedTech}</div>
    </div>
  );
}

