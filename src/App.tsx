import React from 'react';
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MyAvatar />
      <About />
    </>
  );
}

export default App;
