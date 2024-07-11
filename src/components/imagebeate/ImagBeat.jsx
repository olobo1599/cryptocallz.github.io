import React from 'react'
import bun from "../../assets/images/itachi.jpeg"
import "./ImageBeat.css"

const ImagBeat = () => {
  return (
    <div className='home_img'>
      <img src={bun} className='image' alt="#home" />
    </div>
  )
}

export default ImagBeat;