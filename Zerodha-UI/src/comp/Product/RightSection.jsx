import React from 'react';

const RightSection = (props) => {
  return (
    <>
                <div className="rightSection container d-flex">
                <div className="col-4 footer-para ms-5 ps-5 mt-5 d-flex flex-column row align-items-center justify-content-center">
                    <h2>
                        {props.title}
                    </h2>
                    <p className='fs-6 opacity-one mt-3' style={{ fontWeight: 400, lineHeight: 2 }}>
                        {props.data}
                    </p>
                    <p className='fs-6 opacity-one mt-3'>
                        {props.tryDemo && <a href={props.tryDemo} className='me-5'>Try demo →</a>}
                        {props.learnMore && <a href={props.learnMore} >Learn more →</a>}
                    </p>
                </div>
                <div className='col-7 ms-5 ps-5'>
                    <img src={props.imageUrl} alt="" />
                </div>
            </div>
    </>
  )
}

export default RightSection;