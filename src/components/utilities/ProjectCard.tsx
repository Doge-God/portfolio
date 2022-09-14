import React from 'react';
import RoundedButton from './RoundedButton';



type Props = {
    id:string,
    title:string,
    imgSrc:string,
    description: string | JSX.Element,
    extLink?: string
}


function ProjectCard(prop:Props) {

  return (
    <div className=' flex flex-col bg-[#232642] w-full max-w-lg rounded-2xl border-4 border-ui-back-frost-blue'>
        <img src={prop.imgSrc} className=' w-full h-64 sm:h-96 object-cover rounded-t-2xl'></img>
        <div className=' p-6'>
            <p className=' text-3xl font-raleway font-bold text-transparent bg-clip-text bg-gradient-to-b from-ui-pastel-blue to-ui-pastel-purple'>{prop.title}</p>

            <div className=' text-sm sm:text-lg my-4 font-raleway font-normal text-ui-pastel-blue'>
                {prop.description}
            </div>

            <button className=' self-center w-fit py-2 px-4 mt-2 rounded-full font-raleway font-semibold text-xl 
            bg-gradient-to-br from-ui-pastel-purple to-ui-pastel-blue text-ui-back-space-blue hover:from-[#94a4ff] hover:to-[#9b94ff] active:shadow-inner active:shadow-black'
            onClick={()=>window.open(prop.extLink, "_blank")}>Learn More</button>

        </div>
        
    </div>
  );
}

export default ProjectCard;