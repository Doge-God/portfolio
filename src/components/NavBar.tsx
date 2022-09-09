import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';

function NavBar() {
  return (
    <div className=' bg-transparent fixed top-0 left-0 h-screen w-28 sm:bg-ui-pastel-blue'>
      {/*LARGE FORMAT MENU*/}
      <div className='hidden h-screen sm:flex flex-col text-center'>
        <ul className= 'mt-10 flex flex-col justify-evenly'>
          <li className=' py-2 my-4 font-roboto-mono font-semibold text-lg text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test" spy={true} smooth={true} duration={500}>HOME</Link>
          </li>

          <li className=' py-2 my-4 font-roboto-mono font-semibold text-lg text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test2" spy={true} smooth={true} duration={500}>ABOUT</Link>
          </li>

          <li className=' py-2 my-4 font-roboto-mono font-semibold text-lg text-ui-back-space-blue
           hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test3" spy={true} smooth={true} duration={500}>PROJ.</Link>
          </li>
        </ul>

        <Link to="test" spy={true} smooth={true} duration={500} className=' 
        py-2 mt-auto mb-10 font-roboto-mono font-semibold text-lg text-ui-back-space-blue
         hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>

      {/*MOBILE MENU BUTTON*/}
      <div className='block sm:hidden z-10'>
        <AiOutlineMenu size={30} color={'#b0b8e8'} className=' m-3' />
      </div>

      {/*MOBILE MENU*/}

    </div>
  );
}

export default NavBar;
