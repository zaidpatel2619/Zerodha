import React from 'react'

const Team = () => {
    return (
        <>
            <div id='teamSection'>
                <div className='container' style={{ display: "flex", justifyContent: "center" }}>
                    <h2 className=''>People</h2>
                </div>
                <div className='mt-4' style={{ display: "flex" }}>
                    <div className='col-5' style={{ padding: "4rem 1rem 4rem 12rem" }}>
                        <img src="/public/images/nithinKamath.jpg" alt="" style={{ borderRadius: "50%", width: "90%" }} />
                        <h5 className='mt-4' style={{ width: "50%", margin: "0 auto"}}>
                            Nithin Kamath
                        </h5>
                        <p  className='mt-3' style={{ width: "40%", margin: "0 auto"}}>
                            Founder, CEO
                        </p>
                    </div>
                    <div className='col-7 footer-para opacity-one' style={{ padding: "5rem 15rem 4rem 1rem" }}>
                        <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 1.8 }}>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 1.8 }}>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 1.8 }}>
                            Playing basketball is his zen.
                        </p>
                        <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 1.8 }}>
                            Connect on <a href="/">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary">TradingQnA </a>/ <a href="https://x.com/Nithin0dha">Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;