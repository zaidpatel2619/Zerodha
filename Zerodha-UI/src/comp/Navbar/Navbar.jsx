import { Link } from 'react-router-dom';

function Navbar() {
  let menuArray = {
    "signup": "Sign Up",
    "about": "About",
    "products": "Products",
    "pricing/": "Pricing",
    "support": "Support"
  };
  return (
    <>
      <div className="navbar sticky-top bg-body-tertiary p-3 border-bottom">
        <div className="container navbar-css">
          <div className="col-6" >
            <Link className='opacity-one mx-5' to='/'>
              <img src="images/logo.svg" alt="logo" width={"22%"} />
            </Link>
          </div>
          <div className='col-6 navbar-lists' style={{ display: "flex" }}>
            {Object.entries(menuArray).map(([key, value], i) => (
              <li className='nav-item' key={i}>
                <Link className="btn" to={key}>
                  {value}
                </Link>
              </li>))
            }
            <li>
              <i className="fa-solid fa-bars btn btn-lg"></i>
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;