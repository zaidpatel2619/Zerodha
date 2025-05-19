import React from 'react';

const Hero = (props) => {
    return (
        <div>
            <div className='row' style={{ textAlign: "center", margin: "6rem 0" }}>
                <h1 style={{ fontSize: "xxx-large" }}>Charges</h1>
                <p style={{ fontSize: "1.5rem", fontWeight: "400" }}>List of all charges and taxes</p>
            </div>
            <div className="row" style={{ margin: "10rem 5rem" }}>
                <div style={{ textAlign: "center" }} className="col-4">
                    <img src="/images/pricing-eq.svg" alt="pricing-eq" style={{ width: "75%" }} />
                    <h3>Free equity delivery</h3>
                    <p style={{ fontSize: "1rem", fontWeight: "500", lineHeight: 1.8, margin: "1rem" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div style={{ textAlign: "center" }} className="col-4">
                    <img src="/images/other-trades.svg" alt="pricing-eq" style={{ width: "75%" }} />
                    <h3>Intraday and F&O trades</h3>
                    <p style={{ fontSize: "1rem", fontWeight: "500", lineHeight: 1.8, margin: "1rem" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div style={{ textAlign: "center" }} className="col-4">
                    <img src="/images/pricing-eq.svg" alt="pricing-eq" style={{ width: "75%" }} />
                    <h3>Free direct MF</h3>
                    <p style={{ fontSize: "1rem", fontWeight: "500", lineHeight: 1.8, margin: "1rem" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;