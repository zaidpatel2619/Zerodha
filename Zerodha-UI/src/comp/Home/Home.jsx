import React from 'react';
import Hero from './Hero';
import Trust from './Trust';
import Pricing from './Price.jsx';
import OpenAccount from '../Common/OpenAccount.jsx';

function Home() {
  return (
    <>
    <div className='font-fontello'>
      <Hero />
      <Trust />
      <Pricing />
      <OpenAccount />
    </div>
    </>
  )
}

export default Home;