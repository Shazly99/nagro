import img from 'constants/Img'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './why.scss'
import Icons from 'constants/Icons'
const Why_us = () => {
    return (
        <div>
            <div className="why_us_app overflow-hidden">
                <div className="why_us_container">
                    <header>
                        <span>ما اللذي يميزنا؟</span>
                    </header>
                    <Row>
                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="img_overlay ">
                                <img src={img.why_us1} className='w-100  shadow-8' />
                                <div className="overlay">
                                    <div className="flex justify-content-center align-items-center  p-5 flex-column h-100">
                                        <Icons.Why_1 />
                                        <span>التخصص</span>
                                        <p>نمتلك بفضل الله فريق عمل متخصص في كافة أفرع القانون</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="img_overlay">
                                <img src={img.why_us2} className='w-100  shadow-8' />
                                <div className="overlay">
                                    <div className="flex justify-content-center align-items-center  p-5 flex-column h-100">
                                        <Icons.Why_2 />
                                        <span>الالتزام</span>
                                        <p>نتميز بالالتزام التام و المصداقية مع عملائنا</p>
                                    </div>
                                </div>
                            </div>
                        </Col>


                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="img_overlay">
                                <img src={img.why_us3} className='w-100  shadow-8' />
                                <div className="overlay">
                                    <div className="flex justify-content-center align-items-center  p-5 flex-column h-100">
                                        <Icons.Why_3 />
                                        <span>الخبرة</span>
                                        <p>تجاوزت خبراتنا أكثر من 28 عاماً في شتى مناحي القانون المختلفة</p>
                                    </div>
                                </div>
                            </div>
                        </Col>


                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Why_us
