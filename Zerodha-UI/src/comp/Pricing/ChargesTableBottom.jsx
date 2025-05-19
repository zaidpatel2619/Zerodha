import React from 'react';

const ChargesTableBottom = () => {
    return (
        <>
            <div className="row mt-4">
                <div className="col-1"></div>
                <div className="col-10">
                    <h4 className='text-muted'>Charges for account opening</h4>
                    <table className="table table-borderless charges-table table-responsive border mt-3">
                        <thead className='border-bottom'>
                            <tr>
                                <th>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text'>Online account</td>
                                <td><p>Free</p></td>
                            </tr>
                            <tr>
                                <td className='text'>Offline account</td>
                                <td><p>Free</p></td>
                            </tr>
                            <tr>
                                <td className='text'>NRI account (offline only)</td>
                                <td className='text'>&#8377; 500</td>
                            </tr>
                            <tr>
                                <td className='text'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td className='text'>&#8377; 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-1"></div>
                <div className="col-10">
                    <h4 className='text-muted'>Charges for optional value added services</h4>
                    <table className="table table-borderless charges-table table-responsive border mt-3">
                        <thead className='border-bottom'>
                            <tr>
                                <th>Service</th>
                                <th>Billing Frquency</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text'>Tickertape</td>
                                <td className='text'>Monthly / Annual</td>
                                <td className='text'>Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr>
                                <td className='text'>Smallcase</td>
                                <td className='text'>Per transaction</td>
                                <td className='text'>Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td className='text'>Kite Connect</td>
                                <td className='text'>	Monthly</td>
                                <td className='text'>Connect: 2000 | Historical: 2000</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default ChargesTableBottom;