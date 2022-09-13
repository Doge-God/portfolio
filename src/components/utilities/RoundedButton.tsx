import React from 'react';
import { ProgressPlugin } from 'webpack';

type Props = {
    id?:string,
    text:string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function RoundedButton(prop:Props) {

  return (
    <button onClick={prop.handleClick}
    className='py-3 px-6 flex rounded-full font-raleway font-semibold text-2xl 
     bg-gradient-to-br from-ui-pastel-purple to-ui-pastel-blue text-ui-back-space-blue hover:from-[#94a4ff] hover:to-[#9b94ff] active:shadow-inner active:shadow-black'>{prop.text}</button>
  );
}

export default RoundedButton;