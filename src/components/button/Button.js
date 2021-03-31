import React from 'react'
import './Button.scss'

export default function Button({id}) {
  return (
    <a className="navBtn" 
      href={`#${id}`} 
      // href="#About"
      type="button"
    >
      {id}
    </a>
  );

} 