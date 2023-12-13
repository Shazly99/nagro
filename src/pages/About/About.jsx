import img from 'constants/Img'
import React from 'react'
import './about.scss'
import { Col, Row } from 'react-bootstrap'
const About = () => {
  return (
    <div className='master_about'>
      <div className="header_banner " style={{ marginTop: '90px' }}>
        <img src={img.banner_about} alt="banner" className='w-100' srcset="" />]
        <div className="overlay">
          <div className="header">
            <span>من نحن</span>
          </div>
        </div>
      </div>
      <header className=''>

      <span className='span_header'>عن الشركة</span>
      </header>
      <div className="master_about_header">
        <div className="master_about_header_container"> 
          <Row>
            <Col xl={8} lg={8} md={8} sm={12}>
              <div className="content flex flex-column gap-4" >
                <span>إننا نملك - بفضل الله تعالى – الشھادات العلمیة و الخبرات العملیة في مجالات المحاماة والاستشارات القانونیة والعمالیة والتحكیم والتوثیق والأنظمة المتعلقة بذلك</span>
                <span>ویقوم عملنا على التطویر والارتقاء الدائم بمستوى منظومة العمل القانوني.</span>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={12}>
              <img src={img.About1} alt="" className='w-100' />
            </Col> 
          </Row>

        </div>
      </div>
    </div>
  )
}

export default About