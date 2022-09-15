import React from 'react';
import {useAppSelector, useAppDispatch} from '../redux/hook';

const mainGraphic = require('../resources/mainGraphic.png')

type propType = {
  id:string
}

function WelcomePanel(props:propType) {

  return (
    <div id={props.id} className=' flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-6 bg-ui-back-space-blue w-full h-fit min-h-screen'>
      <img className=' mt-5 lg:mt-0 self-center object-contain h-[66vh] max-w-[80%]' src={mainGraphic} alt="Main Graphic"></img>
      <div className=' gap-y-1 mt-2 text-left w-fit self-center'>
        <p className=' text-4xl sm:text-5xl lg:text-6xl font-raleway font-semibold text-ui-pastel-blue'>I am</p>
        <p className=' text-5xl sm:text-6xl lg:text-7xl font-raleway font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-300 to-blue-300'>Futian Zhou</p>
        <p className=' text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-ui-pastel-blue decoration-2 line-through'>Software Engineer</p>
        <p className=' text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-ui-pastel-blue decoration-2 line-through'>Designer</p>
        <p className=' text-2xl sm:text-3xl lg:text-4xl font-raleway font-semibold text-ui-pastel-blue'>Bit of both</p>
      </div>
    </div>
  );
}

export default WelcomePanel;