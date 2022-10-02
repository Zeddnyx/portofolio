import AOS from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'

export default function Navbar(){

  useEffect(() => {
    AOS.init({duration:800});
  }, [])

  return (
    <div name='about' className="w-full h-screen bg-[282c34] z-10">
        <h1 className='max-w-[800px] h-20 mx-auto px-8 font-bold text-xl' data-aos='fade-right'><span className='font-mono text-blue-500'>01. </span>About</h1>
      <div className="font-poppins max-w-[800px] h-full mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-5 relative">

        <div className="border border-blue-500 w-[300px] h-[300px] rounded" data-aos="fade-right">
          <div className="bg-blue-500 w-[300px] h-[300px] rounded mx-3 my-3"></div> 
        </div>

        <div className=" w-[300px] h-[300px] mt-5 md:mt-0 text-sm" data-aos="fade-left">
          <p>
            Hello! My name is <span className="font-bold text-blue-500">Jaenudin</span> but lot of my friends call me <span className="font-bold text-blue-500">Zedd</span>, and i enjoy creating things that live on internet,<br />
            My interest in front end depelopment started back in 2022 when i decided try make a simple card with HTML & CSS
          </p>
          <br />
          <p>
            Fast forward to today, and i have enough knowlege as front end developor.
          </p>
          <br />
          <p>Here are a few technologies i've been working recently</p>
          <ul className="grid grid-cols-2 font-mono text-[12px] my-2 text-blue-500 list-disc px-3">
            <li>JavaScript</li>
            <li>React.JS</li>
            <li>Next.Js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
