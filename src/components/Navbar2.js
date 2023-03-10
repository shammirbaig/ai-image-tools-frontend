import React, { useState } from 'react'
// import Button from './Button';
import { MenuOutline ,CloseOutline} from 'react-ionicons'



const Navbar2 = () => {
    let Links =[
      {name:"Tools",link:"/"},
      {name:"Blog",link:"/"},
      {name:"About",link:"/"},
      {name:"Contact",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        </span>
        AI Image Tools
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
     {open ? (<CloseOutline
      color={'#00000'} 
      title="close"
      height="25px"
      width="25px"
    />):(<MenuOutline
      color={'#00000'} 
      title="menu"
      height="25px"
      width="25px"
    />)
    }
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl text-center md:text-left md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className="button-cta pl-4">
          Upload your Image
        </button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar2;