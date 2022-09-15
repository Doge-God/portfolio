
import { ReactElement, ReactSVGElement } from 'react';



type Props = {
    id?:string,
    text:string,
    icon: string | JSX.Element
}


function SkillBadge(prop:Props) {

  return (
    <div className=' flex w-fit h-fit shrink-0 m-1 px-3 py-1 rounded-md font-raleway font-normal text-lg
     text-ui-back-space-blue bg-gradient-to-br from-[#94a4ff] to-[#a188fd] items-center gap-1'>
      {prop.icon}
      {prop.text}
    </div>
  );
}

export default SkillBadge;