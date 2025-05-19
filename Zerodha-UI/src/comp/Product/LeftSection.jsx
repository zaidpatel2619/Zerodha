import React from 'react';

const LeftSection = (props) => {
    return (
        <>
            <div className="leftSection d-flex">
                <div className='col-7 ms-5 ps-5 mt-5'>
                    <img src={props.imageUrl} alt="" />
                </div>
                <div className="col-4 footer-para me-5 pe-5 mt-5 pt-5 ">
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
                    <p className='mt-3 opacity-one'>
                        <a className='me-5' href={props.googlePlayStoreLink}><img src="/images/googlePlayBadge.svg" alt="" /></a>
                        <a href={props.appleStoreLink}><img src="/images/appstoreBadge.svg" alt="" /></a>
                    </p>
                </div>
                {/* <div className="col-1"></div> */}
            </div>
        </>
    )
}

export default LeftSection;