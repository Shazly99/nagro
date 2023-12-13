import Icons from 'constants/Icons'
import img from 'constants/Img'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const AboutHome = () => {
  return (
    <div className='app_about mt-8 mb-8'>

      <Container className='mt-5'>
        <Row className='logo_bg_1th'>
          <Col xl={6} lg={6} md={12} sm={12} className='flex justify-content-center align-item-center '>
            <div className="logo_bg flex justify-content-center align-item-center border-right">
              <img src={img.LogoBg} alt="" srcset="" />
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="">
            <div className="content">
              <span className='span_header'>مرحبا بكم في شركتنا </span>
              <p>بدایة نتقدم إلى عملائنا الكرام بأسمى آیات التقدیر والامتنان على ثقتھم الغالیة ونود أن نشیر إلى أن ً شركتنا تُعد من الشركات الرائدة بما حققناه - بفضل الله تعالى – من نجاحات كبیرة في مجالات عملنا المتنوعة ً سواء مجال المحاماة والاستشارات القانونیة والاستشارات العمالیة والتحكیم وإعادة تنظیم وھیكلة إدارات الموارد البشریة وشئون الموظفین والأقسام التابعة لھا.</p>
              <div className="btn_more  cursor-pointer user-select-none">
                <span>رؤية المزيد</span>
                <Icons.ArrowMore className='mt-1' />
              </div>
            </div>
          </Col>
        </Row>

        <div className="about_app_2th">
          <Row>
            <Col xl={6} lg={6} md={12} sm={12}>
              <div className="content_th2">
                <span className='span_header'>من نحن</span>
                <p className='mt-3'>إننا نملك - بفضل الله تعالى – الشھادات العلمیة و الخبرات العملیة في مجالات المحاماة والاستشارات القانونیة والعمالیة والتحكیم والتوثیق والأنظمة المتعلقة بذلك. ویقوم عملنا على التطویر والارتقاء الدائم بمستوى منظومة العمل القانوني</p>
              </div>

              <div className="content_th2 mt-50">
                <span className='span_header'>رؤیتنا</span>
                <p className='mt-3'>صناعة نموذج للتمیز والمصداقیة في قطاعات المحاماة والاستشارات القانونیة والعمالیة والتحكیم والتوثیق، من خلال كسب ثقة العملاء وتلبیة احتیاجاتھم وتجاوز تطلعاتھم وطموحاتھم.</p>
              </div>
              <div className="btn_more  cursor-pointer user-select-none mt-5 ">
                <span>رؤية المزيد</span>
                <Icons.ArrowMore className='mt-1' />
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} className='flex justify-content-center align-item-center '>
              <div className="logo_bg_2th flex justify-content-center align-item-center position-relative ">
                <img src={img.AboutImg2} alt="" className='w-75 z-1 object-fit-contain logo_bg_1th_img' />
                <img src={img.AboutImg1} alt="" className='  z-0 me-auto position-absolute logo_bg_2th_img' />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default AboutHome