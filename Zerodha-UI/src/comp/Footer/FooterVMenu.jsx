import React from 'react';
import Icons from './Icons';

function FooterVMenu() {
    return (
        <>
            <div className="row mt-4">
                <div className="col-3">
                    <img src="images/logo.svg" alt="logo" width={"60%"} />
                    <p className='m-0 mt-4 fs-10' style={{ fontSize: "smaller"}}>© 2010 - 2024, Zerodha Broking Ltd.</p>
                    <p className='mt-0' style={{ fontSize: "smaller"}}>All rights reserved.</p>
                    <Icons />
                </div>

                <div className="col-3">
                    <h5 className='ms-3'>Company</h5>
                    <li>
                        <a className="btn ms-1" href="">About</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Products</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Pricing</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Referral programme</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Careers</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Zerodha.tech</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Press & media</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Zerodha Cares (CSR)</a>
                    </li>
                </div>

                <div className="col-3">
                    <h5 className='ms-3'>Support</h5>
                    <li>
                        <a className="btn ms-1" href="">Contact us</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Support portal</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Z-Connect blog</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">List of charges</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Downloads & resources</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Videos</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Market overview</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Market overview?</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Status of your complaints</a>
                    </li>
                </div>

                <div className="col-3">
                    <h5 className='ms-3'>Account</h5>
                    <li>
                        <a className="btn ms-1" href="">Open an account</a>
                    </li>
                    <li>
                        <a className="btn ms-1" href="">Fund transfer</a>
                    </li>
                </div>
            </div>
        </>
    )
}

export default FooterVMenu