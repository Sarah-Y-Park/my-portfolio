import React, { useState } from 'react';
import Main from './Main';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Header from '../components/Header';

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
        <About />
        <Portfolio />
        <Contact />

      </main>
    </>
  );
}

export default Home;
