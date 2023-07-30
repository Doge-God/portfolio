import React from 'react';
import AboutPanel from './components/AboutPanel';
import ContactPanel from './components/ContactPanel';
import NavBar from './components/NavBar';
import ProjectsPanel from './components/ProjectsPanel';
import WelcomePanel from './components/WelcomePanel';

function App() {
  return (
    <div className=' flex'>
      <NavBar/>
      <div className=' flex-col bg-ui-back-space-blue sm:ml-28 xl:ml-32 w-full'>

        <WelcomePanel id='home' />

        <AboutPanel id='about'/>
        
        
        <ProjectsPanel id='projects'/>
        
        <ContactPanel id='contact'/>

      </div>
    </div>
  );
}

export default App;
