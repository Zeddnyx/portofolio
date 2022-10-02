import AOS from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'
import {Link} from 'react-scroll'

export default function Navbar(){

  useEffect(() => {
    AOS.init({duration:800});
  }, [])

  return (
   <div name='home' className="w-full h-screen bg-[282c34]">
      <div className="max-w-[800px] h-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-[10px] font-mono text-blue-500" data-aos="fade-down">Hi, my name is</p>
        <h1 className="text-4xl sm:text-4xl font-bold text-[#fff]"data-aos="fade-down">Zedd Nyx</h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#aaa]"data-aos="fade-down">i'am a Frond End Developor</h2>
        <p className="py-4 max-w-[400px] text-sm text-[#aaa]"data-aos="fade-up font-poppins">i'am a front-end developor speacializing in slicing design from UI/UX into Beautiful website</p>
        <button className="font-mono py-2 text-sm  px-2 w-[125px] border-2 rounded hover:border-blue-500 hover:text-[#fff] hover:bg-blue-500 flex justify-evenly items-center"data-aos="fade-up"><Link to='contact' smooth={true} duration={600}>Get In Touch</Link></button>
      </div>
    </div>
  )
}
