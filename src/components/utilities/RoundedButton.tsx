import React from 'react';
import { ProgressPlugin } from 'webpack';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

type Props = {
    id?:string,
    text:string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
    loading:boolean
}

function RoundedButton(prop:Props) {

  return (
    (!prop.loading?
    <button onClick={prop.handleClick}
    className='py-3 px-6 flex rounded-full font-raleway font-semibold text-2xl 
     bg-gradient-to-br from-ui-pastel-purple to-ui-pastel-blue text-ui-back-space-blue 
     hover:from-[#94a4ff] hover:to-[#9b94ff] active:shadow-inner active:shadow-black'>{prop.text}</button> :
     
     <button onClick={()=>{}}
    className='py-3 px-6 items-center flex rounded-full font-raleway font-semibold text-2xl 
     bg-gradient-to-br text-ui-back-space-blue from-[#94a4ff] to-[#9b94ff] shadow-inner shadow-slate-700'>
      <AiOutlineLoading3Quarters className='animate-spin h-5 w-5 mr-3'/>
      Loading</button>
    )
  );
}

export default RoundedButton;