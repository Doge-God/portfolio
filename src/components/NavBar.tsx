import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-scroll';
import {useAppSelector, useAppDispatch} from '../redux/hook';
import {toggleMenu} from '../redux/navSlice'

function NavBar() {

  const isMenuOn = useAppSelector(state => state.nav.isMenuOn)
  const dispatch = useAppDispatch()

  return (
    <div className=' bg-transparent fixed top-0 left-0 h-screen w-28 xl:w-32 sm:bg-gradient-to-br sm:from-ui-pastel-purple sm:to-ui-pastel-blue'>
      {/*LARGE FORMAT MENU*/}
      <div className='hidden h-screen sm:flex flex-col font-raleway text-center text-lg xl:text-xl font-semibold xl:font-bold caret-transparent'>
        <ul className= 'mt-[5vh] flex flex-col justify-evenly gap-[5vh]'>
          <li data-testid='fullHome' className=' text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="home" spy={true} smooth={true} duration={400} className=' py-2 xl:py-3 inline-block w-full h-full'>HOME</Link>
          </li>

          <li data-testid='fullAbout' className='  text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="about" spy={true} smooth={true} duration={400} className=' py-2 xl:py-3 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link to="projects" spy={true} smooth={true} duration={400} className=' py-2 xl:py-3 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link to="contact" spy={true} smooth={true} duration={400} className=' 
         py-2 xl:py-3 mt-auto mb-[5vh] text-ui-back-space-bluetext-ui-pastel-blue
         hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>

      {/*MOBILE MENU BUTTON*/}
      <div data-testid='menuButton' onClick={() => dispatch(toggleMenu())} className='block absolute top-0 left-0 z-10 sm:hidden'>
        {isMenuOn ? <AiOutlineClose size={40} color={'#202231'} className='m-6'/> :
          <AiOutlineMenu size={40} color={'#b0b8e8'} className='m-6' />
        }
        
      </div>

      {/*MOBILE MENU*/}
      <div className= {
          isMenuOn ? ' ease-in duration-150 shadow-2xl shadow-black bg-gradient-to-br from-ui-pastel-purple to-ui-pastel-blue h-screen w-40 top-0 left-0 justify-evenly absolute sm:hidden flex flex-col font-raleway text-center text-xl font-bold caret-transparent'
          :  'ease-in duration-150 bg-gradient-to-br from-ui-pastel-purple to-ui-pastel-blue h-screen w-40 top-0 -left-40 justify-evenly absolute sm:hidden flex flex-col font-raleway text-center text-xl font-bold caret-transparent'
        }
      >
        <ul className= ' mt-[60%] mb-16 space-y-4 flex flex-col justify-evenly gap-[5vh]'>
          <li className=' text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link data-testid='mobileHome' onClick={() => dispatch(toggleMenu())} to="home" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>HOME</Link>
          </li>

          <li className=' text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link onClick={() => dispatch(toggleMenu())} to="about" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>ABOUT</Link>
          </li>

          <li className=' text-ui-back-space-blue hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>
            <Link onClick={() => dispatch(toggleMenu())} to="projects" spy={true} smooth={true} duration={500} className=' py-2 xl:py-3 inline-block w-full h-full'>PROJ.</Link>
          </li>
        </ul>

        <Link onClick={() => dispatch(toggleMenu())} to="contact" spy={true} smooth={true} duration={500} className=' 
         py-2 mt-auto mb-[20%] text-ui-back-space-blue  hover:bg-ui-back-space-blue hover:text-ui-pastel-blue'>CONTACT</Link>
      </div>
      

    </div>
  );
}

export default NavBar;
