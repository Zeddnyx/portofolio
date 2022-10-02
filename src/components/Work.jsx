import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Soon1 from './workPages/Soon1'
import Soon2 from './workPages/Soon2'
import Soon3 from './workPages/Soon3'

export default function Navbar(){
  return (
    <BrowserRouter>
      <div name='work' className="w-full  mx-auto bg-[282c34] z-10 font-poppins mt-[50rem]">
        <h1 className='max-w-[800px] h-20 mx-auto px-8 font-bold text-xl' data-aos='fade-right'><span className='font-mono text-blue-500 font-normal'>03. </span>Where I've Worked</h1>
        <div className="max-w-[800px] h-full mx-auto px-7 grid grid-cols-1 gap-20 md:gap-0 relative">
          <ul className='flex flex-col gap-20 border-l-2 px-2 hover:border-blue-500' data-aos='fade-right'>
            <Link className='hover:text-blue-500 hover:font-bold  px-1'to='/Soon1'>Work 1</Link>
            <Link className='hover:text-blue-500 hover:font-bold  px-1' to='/Soon2'>Work 2</Link>
            <Link className='hover:text-blue-500 hover:font-bold  px-1' to='/Soon3'>Work 3</Link>
          </ul>
        </div>
      </div>

      <div data-aos='fade-left'>
        <Routes>
          <Route path='/Soon1' element={<Soon1 />} />
          <Route path='/Soon2' element={<Soon2 />} />
          <Route path='/Soon3' element={<Soon3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
