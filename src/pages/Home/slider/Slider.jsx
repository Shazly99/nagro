import img from 'constants/Img'
import React from 'react'

const Slider = ({ data }) => {

    return (
        <div className='slider_overlay  '>
            <img src={data?.slider} className='w-100 ' alt="slider"  />
            <div className="overlay"></div>
        </div>
    )
}

export default Slider

 
