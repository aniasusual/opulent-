import React from 'react'
import "./speciality.scss"

import { GiBigDiamondRing,GiAirplaneDeparture } from 'react-icons/gi';
import { TbTruckReturn } from 'react-icons/tb';
import { PiCertificateLight,PiPackageThin } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';

const Speciality = () => {
  return (
    <div className='speciality'>
        <h1>Our Promise</h1>
        <div className="specialityIcons">
            <div className="promiseItem">
                <GiBigDiamondRing size={40}/>
                <div>Free Resizing</div>
            </div>
            <div className="promiseItem">
                <GiAirplaneDeparture size={40}/>
                <div>Overnight Shipping</div>
            </div>
            <div className="promiseItem">
                <TbTruckReturn size={40}/>
                <div>30 Days Free Return</div>
            </div>
            <div className="promiseItem">
                <PiCertificateLight size={40}/>
                <div>Certificate and appraisal</div>
            </div>
            <div className="promiseItem">
                <SlBadge size={40}/>
                <div>Conflict free Diamonds</div>
            </div>
            <div className="promiseItem">
                <PiPackageThin size={40}/>
                <div>Elegant and Safe Packaging</div>
            </div>
            

        </div>

    </div>
  )
}

export default Speciality
