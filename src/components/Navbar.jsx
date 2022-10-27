import logo from '../assets/logo.png';
import avatar from '../assets/avatar.png';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

function Navbar() {
  const [show, handleShow] = useState(false);

  function navbarTransition() {
    (window.scrollY > 0) ? handleShow(true) : handleShow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () => window.removeEventListener('scroll', navbarTransition)
  }, [])

  return (
    <header className={`fixed top-0 z-50 flex w-full h-24 items-center justify-between px-4 py-2 transition-all lg:px-10 lg:py-6 ease-in duration-500 ${show && 'bg-[#141414]'}`}>
      <div className='flex items-center space-x-2 md:space-x-5'>
        <img src={logo} alt="logo" className='object-contain cursor-pointer h-24' />
        <ul className='hidden space-x-4 md:flex '>
          <li className='navmenu--items hover:text-[#b3b3b3]'>Home</li>
          <li className='navmenu--items hover:text-[#b3b3b3]'>TV Shows</li>
          <li className='navmenu--items hover:text-[#b3b3b3]'>Movies</li>
          <li className='navmenu--items hover:text-[#b3b3b3]'>New & Popular</li>
          <li className='navmenu--items hover:text-[#b3b3b3]'>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 font-light'>
        <MagnifyingGlassIcon className='hidden h-6 w-6 sm:inline' />
        <p className="hidden text-xl lg:inline">Kids</p>
        <BellIcon className='h-6 w-6' />
        {/* <NavLink exact to="/account" > */}
        <img src={avatar} alt="avatar" className='w-[60px] h-[60px] cursor-pointer' />
        {/* </NavLink> */}
      </div>
    </header>
  );
}

export default Navbar;
