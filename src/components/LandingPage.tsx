
import React from 'react';
import Hero from './Hero';
import Modules from './Modules';
import Showcase from './Showcase';
import Values from './Values';
import Partners from './Partners';
import Join from './Join';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Modules />
      <Showcase />
      <Values />
      <Partners />
      <Join />
    </>
  );
};

export default LandingPage;
