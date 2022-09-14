import React from 'react';
import ProjectCard from './utilities/ProjectCard';
import SectionTitle from './utilities/SectionTitle';

type propType = {
  id:string
}


//MAIN
function AboutPanel(props:propType) {
    
  return (
    <div id={props.id} className=' my-20 pb-10 w-full flex flex-col items-center mb-5'>
        <div className=' flex flex-col w-[80%] max-w-5xl'>
            <SectionTitle text='About Me'/>
            
            <div className='w-full max-w-5xl flex flex-col lg:flex-row
                 divide-red-500 divide-y-2 lg:divide-x-2 lg:divide-y-0'>
                

                <div className=' bg-blue-400 w-full lg:w-[60%] h-80'>
                </div>

                <div className=' bg-green-400 w-full lg:w-[40%] h-80'>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default AboutPanel;