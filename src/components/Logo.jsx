import React from 'react'
import { FaPenClip } from "react-icons/fa6";

function Logo({size = 20}) {
  return (
    <div>
      <FaPenClip size={size} color='#0096ff'/>
    </div>
  )
}

export default Logo