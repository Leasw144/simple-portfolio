import React from "react";
import "./Intro.scss";
import me from "../../assets/profile/me-bike.jpg";

export default function Intro() {
  return (
    <div className="profile">
      <img src={me} className="profile-pic" alt='me' />
      <h1>About</h1>
      <p> Hey there, thanks for dropping by! My name is Wattana, people also call me Shawn. I am a front-end developer that specializes in React. Recently, I just graduated Turing School of Software & Design and am looking to find a career working with talented people. About myself, I spent 4 years teaching English in China, and worked as an Administrative Assistant in Colorado. I love working in groups but also see the value in independent work. Feel free to browse my projects below! </p>
    </div>
  );
}
