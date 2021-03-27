import "./Contact.scss";
import React from 'react'
import resume from '../../assets/resume.pdf' 

export default function Contact() {
  return (
    <div>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </div>
  );
}