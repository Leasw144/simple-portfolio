import React from "react";
import "./Projects.scss";
import "../../assets/projects/covid1.jpg"


export default function Projects({name, img, projObj}) {
  console.log('derpi', projObj)
  return (
    <div className="">
      <h1>{name}</h1>
      <img className="projImg" src={img} alt="main" />
    </div>
  );
}
