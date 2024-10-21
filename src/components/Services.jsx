import React from 'react'
import web_icon from '../assets/web-icon.png'
import mobile_icon from '../assets/mobile-icon.png'
import ui_icon from '../assets/ui-icon.png'
import graphics_icon from '../assets/graphics-icon.png'
import right_arrow from '../assets/right-arrow.png'

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
    <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
    

    <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={web_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Programming Languages</h3>
            <p className="text-md font-bold text-gray-600 leading-5 dark:text-white/80">C/C++, JavaScript, Python,SQL</p>
            
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={mobile_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Frameworks and Libraries</h3>
            <p className="text-md font-bold text-gray-600 leading-5 dark:text-white/80">ReactJS, Node.js, Express.js, RESTful APIs, Tailwind CSS, Bootstrap</p>
           
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={ui_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Databases</h3>
            <p className="text-md font-bold text-gray-600 leading-5 dark:text-white/80">MySql, MongoDB</p>
            
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
            <img src={graphics_icon} alt="" className="w-10"/>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">Version Control & Tools</h3>
            <p className="text-md font-bold text-gray-600 leading-5 dark:text-white/80">Git, GitHub, Postman, Netlify, Agile Development</p>
            
        </div>
    </div>
  </div>
  )
}

export default Services
