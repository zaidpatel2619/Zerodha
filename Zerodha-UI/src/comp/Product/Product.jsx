import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { data } from './data.js';
import Universe from './Universe.jsx';

function Product() {
  return (
    <>
      <div className="product">
        <Hero />
        <hr className='my-5' style={{ margin: "0 auto", opacity: 0.15, width: "90%" }} />
        <div className="mb-5">
          {
            data.map((m, i) => (
              <div key={i} className=''>
                {
                  m.googlePlayStoreLink ?
                    <LeftSection title={m.title} data={m.data} tryDemo={m.tryDemo} learnMore={m.learnMore} appStoreLink={m.appleStoreLink} googlePlayStoreLink={m.googlePlayStoreLink} imageUrl={m.imageUrl} /> : <RightSection title={m.title} data={m.data} learnMore={m.learnMore} imageUrl={m.imageUrl} />
                }
              </div>
            ))
          }
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <h5 className='text-muted mt-3'>
            Want to know more about our technology stack? Check out the &nbsp; <a href="https://zerodha.tech/" target='_blank' style={{ textDecoration: "none" }}>Zerodha.tech</a> &nbsp;blog
          </h5>
        </div>
        <div>
          <Universe />
        </div>
        <div className='text-center'>
          <button className='btn btn-primary btn-lg m-4' style={{ width: '20%' }}>Sign up for free</button>
        </div>
      </div>
    </>
  )
}

export default Product;