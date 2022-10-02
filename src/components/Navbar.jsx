import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { MdClose, MdEmail } from 'react-icons/md'
import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from './logo.png'


export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[60px] font-poppins top-0 left-0 px-4 bg-[#282c34] text-[#eee] flex justify-between cursor-pointer items-center z-40">
      <div>
        <img className='w-10 h-10' src={Logo} alt="Zedd Nyx" />
      </div>

      <ul className="hidden md:flex justify-between gap-10 font-semibold text-sm">
        <li className='hover:text-blue-500 hover:border-b hover:border-blue-500 duration-700'><Link to='about' smooth={true} duration={600}><span className='font-mono text-blue-500'>01. </span>About</Link></li>
        <li className='hover:text-blue-500 hover:border-b hover:border-blue-500 duration-700'><Link to='project' smooth={true} duration={600}><span className='font-mono text-blue-500'>02. </span>Project</Link></li>
        <li className='hover:text-blue-500 hover:border-b hover:border-blue-500 duration-700'><Link to='work' smooth={true} duration={600}><span className='font-mono text-blue-500'>03. </span>Work</Link></li>
        <li className='hover:text-blue-500 hover:border-b hover:border-blue-500 duration-700'><Link to='contact' smooth={true} duration={600}><span className='font-mono text-blue-500'>04. </span>Contact</Link></li>
        <button className="border-2 hover:border-blue-500 hover:text-blue-500 w-[70px] rounded"><Link to='home' smooth={true} duration={600}>Return</Link></button>
      </ul>

      <div onClick={handleNav} className='md:hidden z-20'>
        {!nav ? <GoThreeBars size='20' color="white" /> : <MdClose size='20' color="white" />}
      </div>

      <ul className={!nav ? `hidden` : `absolute  bg-[#282c34] font-semibold text-sm top-0 left-0 flex flex-col justify-center gap-12 items-center md:hidden w-full h-screen`}>
        <li className=' hover:border-b hover:border-blue-500 hover:text-blue-500 duration-700'><Link onClick={handleNav} to='about' smooth={true} duration={600}>About</Link></li>
        <li className=' hover:border-b hover:border-blue-500 hover:text-blue-500 duration-700'><Link onClick={handleNav} to='project' smooth={true} duration={600}>Project</Link></li>
        <li className=' hover:border-b hover:border-blue-500 hover:text-blue-500 duration-700'><Link onClick={handleNav} to='work' smooth={true} duration={600}>Work</Link></li>
        <li className=' hover:border-b hover:border-blue-500 hover:text-blue-500 duration-700'><Link onClick={handleNav} to='contact' smooth={true} duration={600}>Contact</Link></li>
        <button className="border border-[#eee] hover:text-blue-500 hover:border-blue-500 w-[70px] h-[30px] rounded duration-700"><Link onClick={handleNav} to='home' smooth={true} duration={600}>Return</Link></button>
        <ul className='flex justify-center gap-10 py-5'>
          <a href="https://"><BsGithub size='20' /></a>
          <a href="https://"><BsFacebook size='20' /></a>
          <a href="https://"><BsLinkedin size='20' /></a>
          <a href="https://"><MdEmail size='20' /></a>
        </ul>
      </ul>

      <ul className=' hidden md:flex flex-col fixed top-[35%] right-5 gap-10'>
        <a href="https://"><BsGithub size='20' /></a>
        <a href="https://"><BsFacebook size='20' /></a>
        <a href="https://"><BsLinkedin size='20' /></a>
        <a href="https://"><MdEmail size='20' /></a>
      </ul>
    </div>



  )
}
