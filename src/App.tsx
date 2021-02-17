import React from 'react';
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MyAvatar />
      <About />
      <Skills />
    </>
  );
}

export default App;
