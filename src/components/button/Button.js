import React from 'react'
import './Button.scss'

export default function Button({location, id}) {
  return (
    <button href={location} id={id}>{id}</button>
  )

} 