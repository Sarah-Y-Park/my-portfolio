import React, { useState } from 'react';
import Main from './Main';
import About from './About';
import Experience from './Experience'; 
import Skill from './Skill'; 
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  const [mainKey, setMainKey] = useState(0);

  const resetMain = () => {
    setMainKey(prev => prev + 1); 
  };

  return (
    <>
      <Header onHomeClick={resetMain} />
      <main className="space-y-0">
        <Main key={mainKey} />
      </main>
      <About />
      <Experience />
      <Skill />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default Home;
