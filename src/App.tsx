import React from 'react';
import NavBar from './components/NavBar';
import WelcomePanel from './components/WelcomePanel';

function App() {
  return (
    <div className=' flex'>
      <NavBar/>
      <div className=' sm:ml-28 xl:ml-32 w-full'>
        <WelcomePanel id='home' />
        <p id='test2' className=' bg-red-600 h-screen'>bru</p>
        <p id='test3' className=' bg-green-700 h-screen'>bru</p>
      </div>
    </div>
  );
}

export default App;
