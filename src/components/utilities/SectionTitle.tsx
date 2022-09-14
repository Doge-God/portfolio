import React from 'react';

type Prop = {
    text:string
}

function SectionTitle(prop:Prop) {

  return (
    <p className=' text-5xl font-raleway font-semibold  
                lg:col-span-2 justify-self-start py-1
                text-transparent bg-clip-text bg-gradient-to-br from-ui-pastel-pink to-ui-pastel-blue'>{prop.text}</p>
  )
}

export default SectionTitle;