import React from 'react';
import ContactPanel from './components/ContactPanel';
import NavBar from './components/NavBar';
import WelcomePanel from './components/WelcomePanel';

function App() {
  return (
    <div className=' flex'>
      <NavBar/>
      <div className=' flex-col bg-ui-back-space-blue sm:ml-28 xl:ml-32 w-full'>

        <WelcomePanel id='home' />

        <div id='about' className=' bg-ui-back-space-blue h-screen flex flex-row items-center justify-center'>
          <p className='text-center text-5xl text-ui-pastel-blue'>//ABOUT page under construction//</p>
        </div>
        
        <div id='projects' className= ' bg-ui-back-space-blue h-screen flex flex-row items-center justify-center'>
          <p className='text-center text-5xl text-ui-pastel-blue'>//PROJ. page under construction//</p>
        </div>
        
        <ContactPanel id='contact'/>

      </div>
    </div>
  );
}

export default App;
