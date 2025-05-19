import React from 'react'

function Pricing() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-4 mt-5">
            <h3>Unbeatable pricing</h3>
            <p className='mt-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <button style={{ color: "blue", marginLeft: "-1rem", opacity: 0.7, fontWeight: 600 }} className='btn btn-lg'>See pricing <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="col-6 mt-5" style={{ display: "flex" }}>
            <div style={{ display: "flex" }} className="col-4">
              <img src="images/pricing-eq.svg" alt="pricing-eq" style={{ width: "60%" }} />
              <p style={{ fontSize: '0.7rem', marginLeft: "-1.5rem", marginTop: "5rem" }}>Free account opening</p>
            </div>
            <div style={{ display: "flex" }} className="col-4">
              <img src="images/pricing-eq.svg" alt="pricing-eq" style={{ width: "60%" }} />
              <p style={{ fontSize: '0.7rem', marginLeft: "-1.5rem", marginTop: "5rem" }}>Free equity delivery and direct mutual funds</p>
            </div>
            <div style={{ display: "flex" }} className="col-4">
              <img src="images/other-trades.svg" alt="pricing-eq" style={{ width: "60%" }} />
              <p style={{ fontSize: '0.7rem', marginLeft: "", marginTop: "5rem" }}>Intraday and F&O</p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-4 mt-5">
            <img src="images/index-education.svg" alt="index-education" width={"100%"} />
          </div>
          <div className="col-1"></div>
          <div className="col-5 mt-5">
            <h3>Free and open market education</h3>
            <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <button style={{ color: "blue", marginLeft: "-1rem", opacity: 0.7, fontWeight: 600 }} className='btn btn-lg'>Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <button style={{ color: "blue", marginLeft: "-1rem", opacity: 0.7, fontWeight: 600 }} className='btn btn-lg'>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  )
}

export default Pricing;