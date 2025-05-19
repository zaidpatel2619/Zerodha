import React from 'react';

function Hero() {
  return (
    <>
      <div className="container">
        <div className="row" style={{ display: "flex", justifyContent: 'center', paddingTop: "5rem"}}>
          <img className='text-center' src="images/homeHero.png" alt="home" style={{ width: "80%"}} />
          <div className="para text-center mt-5">
            <h1 className="title p-4">Invest in everything</h1>
            <p className='paragraph'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn btn-primary btn-lg m-4' style={{ width: '20%'}}>Sign up for free</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;