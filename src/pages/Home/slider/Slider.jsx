import Icons from 'constants/Icons'
import img from 'constants/Img'
import React from 'react'

const Slider = ({ data }) => {

    return (
        <div className='slider_overlay vh-100 '>
            <img src={data?.slider} className='w-100 vh-100 ' alt="slider"  />
            <div className="overlay flex justify-content-center align-items-center">
                <div className="content"> 
                    <Icons.sliderCenter/>
                </div> 
            </div>
        </div>
    )
}

export default Slider

 
