import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import {toggleMenu} from '../redux/navSlice'

function NavBar() {

  const isMenuOn = useAppSelector(state => state.nav.isMenuOn)
  const dispatch = useAppDispatch()

  return (
    <div className=' bg-transparent fixed top-0 left-0 h-screen w-28 xl:w-32 sm:bg-ui-pastel-blue'>
      {/*LARGE FORMAT MENU*/}
      <div className='hidden h-screen sm:flex flex-col font-raleway text-center text-lg xl:text-xl font-semibold xl:font-bold caret-transparent'>
        <ul className= 'mt-6 mb-16 flex flex-col justify-evenly'>
          <li className=' my-6 xl:my-6 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>HOME</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test2" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test3" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link to="test" spy={true} smooth={true} duration={500} className=' 
         py-2 xl:py-3 mt-auto mb-14 text-ui-back-space-blue
         hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>

      {/*MOBILE MENU BUTTON*/}
      <div onClick={() => dispatch(toggleMenu())} className='block absolute top-0 left-0 z-10 sm:hidden'>
        {isMenuOn ? <AiOutlineClose size={40} color={'#202231'} className='m-6'/> :
          <AiOutlineMenu size={40} color={'#b0b8e8'} className='m-6' />
        }
        
      </div>

      {/*MOBILE MENU*/}
      <div className=' bg-amber-600 h-screen w-28 top-0 left-0 justify-evenly absolute sm:hidden flex flex-col font-raleway text-center text-xl font-bold caret-transparent'>
        <ul className= ' mt-40 mb-16 flex flex-col justify-evenly'>
          <li className=' my-6 xl:my-6 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>HOME</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test2" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' my-6 xl:my-7 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="test3" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link to="test" spy={true} smooth={true} duration={500} className=' 
         py-2 mt-auto mb-14 text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>
      

    </div>
  );
}

export default NavBar;
