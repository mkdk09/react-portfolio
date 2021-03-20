import React from 'react';
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import ScrollUp from './utils/ScrollUp'
import { Helmet, HelmetProvider } from "react-helmet-async";

const App: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio</title>
        </Helmet>
        <section>
          <Navbar />
        </section>
        <section>
          <MyAvatar />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='works'>
          <Works />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <ScrollUp />
      </HelmetProvider>
    </>
  );
}

export default App;
