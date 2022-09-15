import React from 'react';
import ProjectCard from './utilities/ProjectCard';
import SectionTitle from './utilities/SectionTitle';
import SkillBadge from './utilities/SkillBadge';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaPython, FaReact, FaFigma, FaJava} from 'react-icons/fa'
import {SiTailwindcss, SiTypescript,SiDotnet,SiCsharp} from 'react-icons/si'
import { icons, IconType } from 'react-icons';
import { text } from 'stream/consumers';

type propType = {
  id:string
}

const skillBadges: { icon:JSX.Element, text:string }[] = [
  {
    icon:<FaPython/>,
    text: 'Python'
  }, {
    icon:<SiTailwindcss/>,
    text:'Tailwind'
  }, {
    icon:<FaReact/>,
    text:'React'
  }, {
    icon:<SiTypescript/>,
    text:'Typescript'
  }, {
    icon:<SiDotnet/>,
    text:'.NET Core'
  }, {
    icon:<FaFigma/>,
    text:'Figma'
  }, {
    icon:<SiCsharp/>,
    text:'C#'
  }, {
    icon:<FaJava/>,
    text:'Java'
  }

]


//MAIN
function AboutPanel(props:propType) {
    
  return (
    <div id={props.id} className=' py-[20vh] w-full flex flex-col items-center mb-5'>
        <div className=' flex flex-col w-[80%] max-w-5xl'>
            <SectionTitle text='About Me'/>
            
            <div className='mt-3 w-full max-w-5xl justify-self-center flex flex-col lg:flex-row
                   font-raleway
                 divide-ui-back-frost-blue divide-y-2 divide-dotted lg:divide-x-2 lg:divide-y-0'>
                
                {/*INTRO CONTAINER*/}
                <div className='w-full lg:w-[60%]'>
                    <p className=' text-ui-pastel-blue text-xl pr-3'> I am Futian Zhou. Currently studying a Bachelor of Engineering 
                    and Design conjoint degree majoring in software engineering. </p>
                    <br/>
                    <p className='text-ui-pastel-blue text-xl pr-3'>I am passionate about industrial design. However I firmly believe 
                    that in the future the success of a product will largely depends on how it's integrated into the ever growing 
                    cloud. Hence my chosen direction of study.</p>
                </div>

                {/*SKILL CONTAINER*/}
                <div className=' w-full pt-3 mt-3 lg:mt-0 lg:w-[40%] pl-4'>
                  <p className='text-2xl px-2 font-bold 
                    text-transparent bg-clip-text bg-gradient-to-b from-ui-pastel-blue to-ui-pastel-purple mb-2'>I know a thing or two about: </p>
                  {/*CARD CONTAINER*/}
                  <div className=' w-full h-full flex flex-wrap content-start'>
                    {skillBadges.map( (badgeElement) => {
                    return (<SkillBadge icon={badgeElement.icon} text={badgeElement.text}/>);})}
                  </div>
                  
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default AboutPanel;