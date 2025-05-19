import React from 'react'

function Trust() {
  return (
    <>
      <div id='trust' className="container mt-5">
        <div className="row mt-5">
          <div className="col-1"></div>
          <div className="col-4 mt-5">
            <h3>Trust with confidence</h3>

            <h5 className="mt-5">Customer-first always</h5>
            <p className='paragraph'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

            <h5 className="mt-5">No spam or gimmicks</h5>
            <p className='paragraph'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

            <h5 className="mt-5">The Zerodha universe</h5>
            <p className='paragraph'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <h5 className="mt-5">Do better with money</h5>
            <p className='paragraph'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>

          <div className="col-7 mt-5">
            <img src="images/ecosystem.png" alt="eco-system" width={'100%'} />
            <div className="flex text-center">
              <button style={{ color: "blue", opacity: 0.7, fontWeight: 600 }} className='btn btn-lg'>Explore our products <i className="fa-solid fa-arrow-right-long"></i>
              </button>
              <button style={{ color: "blue", opacity: 0.7, fontWeight: 600 }} className='btn btn-lg'>Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <img className='' src="images/pressLogos.png" alt="press" style={{ width: "60%" }} />
        </div>
      </div>
    </>
  )
}

export default Trust;