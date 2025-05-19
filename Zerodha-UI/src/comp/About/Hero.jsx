import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='container p-5 text-center' 
            >
                <h2 className='mt-5 mb-5' style={{ lineHeight: 1.5 }}>
                    We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology.
                </h2>
            </div>
            <hr style={{ margin: "0 auto", opacity: 0.15, width: "80%" }} />
            <div className='mt-4' style={{ display: "flex" }}>
                <div className='col-6' style={{ padding: "4rem 1rem 4rem 15rem" }}>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2}}>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2}}>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2}}>
                        Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>

                <div className='col-6' style={{ padding: "4rem 15rem 4rem 1rem" }}>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2 }}>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2}}>
                        Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='fs-6 opacity-one' style={{ fontWeight: 400, lineHeight: 2}}>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero;