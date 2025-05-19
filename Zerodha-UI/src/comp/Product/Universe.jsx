import React from 'react';
import { universeData } from './data.js';

const Universe = () => {
    return (
        <>
            <div className='d-flex flex flex-wrap justify-content-center mt-5'>
                {
                    universeData.map(data => {
                        return (
                            <div className='m-5'>
                                <a href={data.redirectUrl} target='_blank' style={{ textDecoration: "none", opacity: 1}}>
                                    <img src={data.imageUrl} alt="" style={{  height: "5vh", width: "10rem", margin: "0 3rem 1rem 3rem" }} />
                                    <p className='d-flex flex flex-wrap' style={{ width: "15rem", color: "#9B9B9B", fontSize: "0.75rem", fontWeight: "500", textAlign: 'center', opacity: 1 }}>
                                        {data.textData}
                                    </p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Universe;