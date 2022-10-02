import AOS from 'aos'
import 'aos/dist/aos.css'
import React, {useEffect} from 'react'

export default function Navbar(){

  useEffect(()=>{
    AOS.init({duration:800});
  }, [])
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div name='contact' className="w-full  bg-[282c34] py-60 font-poppins z-10" >
      <h1 className='max-w-[800px] h-20 mx-auto px-8 font-bold text-xl' data-aos='fade-right'><span className='font-mono text-blue-500'>04. </span>Get In Touch</h1>
      <div className="max-w-[800px] h-full mx-auto px-8 grid grid-cols-1  gap-5 relative">
        <div className=" text-sm w-4/5 sm:w-[500px]">I'am  currently looking for any opportunities, My inbox always open, Whatever you have a question or just want to say hi, I'll do my best to get back to you!</div>
        <form method='POST' action="https://getform.io/f/736f008f-6fd8-40b7-a986-6938015ae553" onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 py-0 text-sm"data-aos='fade-top'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input className="py-2 rounded pl-2 outline-none hover:border hover:border-blue-500 "  type="text" placeholder="Name" required />
            <input className="py-2 rounded pl-2 outline-none hover:border hover:border-blue-500 " type="email" placeholder="Email" required />
          </div>
          <textarea className="outline-none hover:border hover:border-blue-500 rounded py-2 p-2" placeholder="Messages" cols="30" rows="10"></textarea> 
          <button type="submit"className="border hover:border-blue-500 hover:text-blue-500 rounded py-1 px-4">Send </button>
        </form>
      </div>
        <div className='bottom-0 text-center pt-80 font-mono text-[10px]'>Built by Zedd with ❤️</div>
    </div>
  )
}
