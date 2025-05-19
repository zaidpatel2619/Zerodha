const Currency = (props) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-10 table-responsive border p-0">
          <table className="table table-borderless charges-table">
            <thead className="border-bottom">
              <tr>
                <th> </th>
                <th className='text'>Currency futures</th>
                <th className='text'>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='text'>Brokerage</td>
                <td className='text'>0.03% or Rs. 20/executed order whichever is lower</td>
                <td className='text'>20/- per executed order</td>
              </tr>
              <tr>
                <td className='text'>STT/CTT</td>
                <td className='text'>No STT</td>
                <td className='text'>No STT</td>
              </tr>
              <tr>
                <td className='text'>Transaction charges</td>
                <td className='text'>NSE: 0.00035%<br />BSE: 0.00045%</td>
                <td className='text'>NSE: 0.0311%<br />BSE: 0.001%</td>
              </tr>
              <tr>
                <td className='text'>GST</td>
                <td className='text'>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className='text'>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className='text'>SEBI charges</td>
                <td className='text'>₹10 / crore</td>
                <td className='text'>₹10 / crore</td>
              </tr>
              <tr>
                <td className='text'>Stamp charges</td>
                <td className='text'>0.0001% or ₹10 / crore on buy side</td>
                <td className='text'>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-1"></div>
      </div><div className='row mt-4' style={{ textAlign: 'center' }}>
        <h5><a style={{ textDecoration: 'none' }} href="https://zerodha.com/brokerage-calculator">Calculate your costs upfront </a> using our brokerage calculator</h5>
      </div>
    </>
  )
};

export default Currency;