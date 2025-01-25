import React from 'react'
import "./SocialHandles.css";
import { socialHandles } from "../../source";
const SocialHandles = () => {
  return (
    <div className='flex social__handles'>
      {socialHandles.map((handle, index) => (
        <a
        href={handle.link}
        target="_blank"
        rel="noreferrer"
        className='flex__center icon__container'
        key={index}>
        {handle.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialHandles
