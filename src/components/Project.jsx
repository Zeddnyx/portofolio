import {BsGithub} from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'

export default function Project(){

  useEffect(() => {
    AOS.init({duration:800});
  }, [])

  return (
    <div name='project' className="w-full h-screen mx-auto bg-[282c34] font-poppins z-10 my-80">
      <h1 className='max-w-[800px] h-20 mx-auto px-8 font-bold text-xl' data-aos='fade-right'><span className='font-mono text-blue-500'>02. </span>Project I've Make</h1>
      <div className="max-w-[800px] h-full mx-auto px-7 grid grid-cols-1 gap-40 md:gap-0 relative">

        <div className="w-[400px] h-[500px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-40 text-sm ">
          <div className='w-[200px] h-[200px] relative z-20' data-aos="fade-right">
            <p className='font-mono text-xs text-blue-500'>Fetaured Project</p>
            <p className='font-bold'>Project Name</p>
            <div className='my-5 w-[350px] h-[80px] px-3 py-3 bg-blue-500'>
              Loreyypm ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
              Loreyypm ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex gap-5 font-mono text-xs  text-blue-500 w-[500px] '>
                <li>React.JS</li>
                <li>Tailwinds</li>
                <li>Some API</li>
              </ul>
              <a href="https://github.com/"><BsGithub /></a>
            </div>
          </div>

          <div className='w-[400px] h-[250px] bg-blue-900' data-aos="fade-left">preview project</div>
        </div>


        <div className="w-[400px] h-[500px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-40 text-sm">
          <div className='w-[400px] h-[200px] md:grid-start-2 z-20' data-aos='fade-left'>
            <p className='font-mono text-xs text-blue-500'>Fetaured Project</p>
            <p className="font-bold">Project Name</p>
            <div className='my-5 w-[350px] h-[80px] px-3 py-3 bg-blue-500 relative'>
              Loreyypm ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
              Loreyypm ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div className='flex flex-col gap-2'>
              <ul className='flex gap-5 font-mono text-xs text-blue-500 w-[500px] '>
                <li>React.JS</li>
                <li>Tailwinds</li>
                <li>Some API</li>
              </ul>
              <a href="https://github.com/"><BsGithub /></a>
            </div>
          </div>

          <div className='w-[400px] h-[250px] bg-blue-900 ' data-aos='fade-right'>preview project</div>
        </div>
      </div>
    </div>
  )
}
