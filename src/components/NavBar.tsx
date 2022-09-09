import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';

function NavBar() {
  return (
    <div className=' bg-transparent fixed top-0 left-0 h-screen w-28 xl:w-32 sm:bg-ui-pastel-blue'>
      {/*LARGE FORMAT MENU*/}
      <div className='hidden h-screen sm:flex flex-col font-roboto-mono text-center text-lg xl:text-xl font-semibold xl:font-bold caret-transparent'>
        <ul className= 'mt-6 flex flex-col justify-evenly'>
          <li className=' my-6 xl:my-6 text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>HOME</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test2" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test3" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link to="test" spy={true} smooth={true} duration={500} className=' 
         py-2 mt-auto mb-10 text-ui-back-space-blue
         hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>

      {/*MOBILE MENU BUTTON*/}
      <div className='block sm:hidden z-10'>
        <AiOutlineMenu size={40} color={'#b0b8e8'} className=' m-6' />
      </div>

      {/*MOBILE MENU*/}
      <div className='hidden h-screen flex-col text-center text-lg caret-transparent'>
        <ul className= 'mt-10 flex flex-col justify-evenly'>
          <li className=' my-6 font-roboto-mono font-semibold text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>HOME</Link>
          </li>

          <li className=' my-6 font-roboto-mono font-semibold text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test2" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' my-6 font-roboto-mono font-semibold text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test3" spy={true} smooth={true} duration={500} className=' py-2 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link to="test" spy={true} smooth={true} duration={500} className=' 
         py-2 mt-auto mb-10 font-roboto-mono font-semibold text-ui-back-space-blue
         hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>
      

    </div>
  );
}

export default NavBar;
