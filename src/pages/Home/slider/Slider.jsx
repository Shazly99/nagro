import img from 'constants/Img'
import React from 'react'

const Slider = () => {
    return (
        <div className='slider_overlay'>
            <img src={img.slider} className='w-100' alt="" srcset="" />
            <div className="overlay"></div>
        </div>
    )
}

export default Slider
