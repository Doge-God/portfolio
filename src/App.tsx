import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className=' bg-indigo-900'>
      <NavBar/>
      <div className=' sm:ml-28 xl:ml-32'>
        <p id='test' className=' bg-ui-back-space-blue h-screen'>bru</p>
        <p id='test2' className=' bg-red-600 h-screen'>bru</p>
        <p id='test3' className=' bg-green-700 h-screen'>bru</p>
      </div>
    </div>
  );
}

export default App;
