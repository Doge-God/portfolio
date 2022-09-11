import React from 'react';
import { ProgressPlugin } from 'webpack';

type Props = {
    id:string,
    text:string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function RoundedButton(prop:Props) {

  return (
    <button onClick={prop.handleClick}
    className={'py-3 px-6 flex rounded-full text-3xl bg-slate-700 text-slate-500'}
    >{prop.text}</button>
  );
}

export default RoundedButton;