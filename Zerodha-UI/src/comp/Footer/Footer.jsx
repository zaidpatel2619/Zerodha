import React from 'react';
import FooterVMenu from './FooterVMenu';
import FooterPara from './FooterPara';

function Footer() {
  return (
    <>
      <div className='navbar bg-body-tertiary p-3 border-top mt-5'>

        <div className='container'>
          <FooterVMenu />
          <div className='row fs-6 mt-5'>
            <FooterPara />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;