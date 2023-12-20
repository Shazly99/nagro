import img from 'constants/Img'
import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import './why.scss'
import Icons from 'constants/Icons'
import { ApiContext } from 'context/FatchApi'
const Why_us = ({ dataHeader, data }) => {

    return (
        <div>
            <div className="why_us_app overflow-hidden">
                <div className="why_us_container">
                    <header>
                        {/* <span>ما اللذي يميزنا؟</span> */}
                        <span>{dataHeader?.section_title}</span>
                    </header>
                    <Row>
                        {
                            data?.map((item, index) => (
                                <Col key={index} xl={4} lg={4} md={6} sm={12}>
                                    <div className="img_overlay ">
                                        <img src={item?.image} className='w-100  shadow-8' />
                                        <div className="overlay">
                                            <div className="flex justify-content-center align-items-center  p-5 flex-column h-100">
                                                <img src={item?.icon} className='w-2 shadow-8' />
                                                <span>{item?.title}</span>
                                                <p className='m-0 p-0'>{item?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))
                        }


                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Why_us
