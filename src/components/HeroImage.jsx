import React from 'react'
import HeroPic from '../assets/images/HeroPic.png'

const HeroImage = () => {
  return (
    <div className="mask-gradient absolute right-0 top-0 h-[550px] w-full
    overflow-hidden rounded-bl-full rounded-br-full border-r-[10px]
    border-blue-500 bg-gray-700 md:h-[600px] md:w-[450px]">
        <img 
        src={HeroPic} 
        alt="HeroPic" 
        className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
        />
    </div>
  )
}

export default HeroImage