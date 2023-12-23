import Icons from 'constants/Icons'
import img from 'constants/Img'
import { ApiContext } from 'context/FatchApi'
import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const AboutHome = ({ data }) => {
  let { t } = useTranslation()
  let BtnMore = () => (
    <Link to={'/about'}>
      <div className="btn_more  cursor-pointer user-select-none">
        <span>{t('btn_more')}</span>
        <Icons.ArrowMore className='mt-1' />
      </div>
    </Link>
  )

  return (
    <div className='app_about mt-8 mb-8'>

      <Container className='mt-5'>
        <Row className='logo_bg_1th'>
          <Col xl={6} lg={6} md={12} sm={12} className='flex justify-content-center align-item-center '>
            <div className="logo_bg flex justify-content-center align-item-center border-right">
              <img src={data[0]?.image} alt="" srcset="" />
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="">
            <div className="content">
              <span className='span_header'>{data[0]?.title}</span>
              <p>{data[0]?.description}</p>
              <BtnMore />
            </div>
          </Col>
        </Row>

        <div className="about_app_2th">
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="content_th2">
                <span className='span_header'>{data[1]?.title}</span>
                <div className='mt-3' dangerouslySetInnerHTML={{ __html: data[1]?.description }} />
              </div>

              <div className="content_th2 mt-50">
                <span className='span_header'>{data[2]?.title}</span> 
                <div className='mt-3 mb-4' dangerouslySetInnerHTML={{ __html: data[2]?.description }} />

              </div>
              <BtnMore />

            </Col>
            <Col xl={6} lg={6} md={12} sm={12} className='flex justify-content-center align-item-center '>
              <div className="logo_bg_2th flex justify-content-center align-item-center position-relative ">
                <img src={data[2]?.image} alt="" className='border-round w-75 z-1 object-fit-contain logo_bg_1th_img' />
                <img src={data[3]?.image} alt="" className='border-round  z-0 me-auto position-absolute logo_bg_2th_img' />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default AboutHome