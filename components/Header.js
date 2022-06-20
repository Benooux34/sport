import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

function Header() {
  return (
    <div className="sm:h-screen">
        <div className="background-video"> 
            <video autoPlay={true} loop={true} muted>
                <source src="sport1.mp4"type="video/mp4" />
            </video>
        </div>
        <div className="flex flex-col items-center justify-center text-white z-10 mt-10 sm:h-[90%] sm:mt-0">
            <span className="text-2xl sm:text-5xl">Bienvenue dans la</span>
            <h1 className="text-6xl sm:text-9xl mb-3">Musclance</h1>
            <span className="text-xl sm:text-2xl font-light">Road to The Rock le Boss</span>
            <AiOutlineArrowDown className="mt-5 animate-bounce" fontSize={50} color='white' />
        </div>
    </div>
  )
}

export default Header