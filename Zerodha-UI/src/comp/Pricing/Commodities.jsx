const Commodities = (props) => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-10 table-responsive border p-0">
          <table className="table table-borderless charges-table">
            <thead className="border-bottom">
              <tr>
                <th> </th>
                <th className='text'>Commodity futures</th>
                <th className='text'>Commodity options</th>
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
                <td className='text'>0.01% on sell side (Non-Agri)</td>
                <td className='text'>	0.05% on sell side</td>
              </tr>
              <tr>
                <td className='text'>Transaction charges</td>
                <td className='text'>MCX: 0.0021%<br />NSE: 0.0001%</td>
                <td className='text'>MCX: 0.0418%<br />NSE: 0.001%</td>
              </tr>
              <tr>
                <td className='text'>GST</td>
                <td className='text'>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className='text'>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td className='text'>SEBI charges</td>
                <td className='text'>	Agri:<br />₹1 / crore<br />Non-agri:<br />₹10 / crore</td>
                <td className='text'>₹10 / crore</td>
              </tr>
              <tr>
                <td className='text'>Stamp charges</td>
                <td className='text'>0.002% or ₹200 / crore on buy side</td>
                <td className='text'>0.003% or ₹300 / crore on buy side</td>
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

export default Commodities;