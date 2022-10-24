import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'
import { useEffect, useState } from 'react';

function Navbar() {
  const [show, handleShow] = useState(false);

  function navbarTransition() {
    (window.scrollY > 100) ? handleShow(true) : handleShow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () => window.removeEventListener('scroll', navbarTransition)
  }, [])

  return (
    <div className={`w-full h-20 top-0 fixed z-50 flex justify-between px-4 md:px-12 transition-all ease-in duration-300 ${show && 'bg-black'}`}>
      <img src={logo} alt="logo" className='object-contain cursor-pointer' />
      <img src={avatar} alt="avatar" className='w-[60px] h-[60px] mt-3 cursor-pointer' />
    </div>
  );
}

export default Navbar;
