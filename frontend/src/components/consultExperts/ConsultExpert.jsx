import React from 'react';
import "./consultexpert.scss";
import expertImage from "../../data/expertImage.png"

const ConsultExpert = () => {
    return (
        <div className='consultExpert'>
            <div className='imageExpert'><img src={expertImage} alt="" /></div>

            <div className='expertImageDesc'>
                <h1>Consult our Experts</h1>
                <span>Enjoy personalized advice and a free live consultation
                    with Opulent Ornaments experts for your dream ring.</span>
                <button>Book an appointment</button>
            </div>
        </div>
    )
}

export default ConsultExpert;
