import AOS from 'aos'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import Component from 'constants/Component'
import { LocalizationContext } from 'context/LangChange'
import './style.scss'
import { ApiContext } from 'context/FatchApi'
import img from 'constants/Img';


const ClientsHome = () => {

  let { isLang } = useContext(LocalizationContext);
  let { data } = useContext(ApiContext);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [isLang])

  return (
    <div>
      <div className="app_achievements">
        <img src={img.achievements} className='w-100' alt="" srcset="" />
      </div>
      <div className='app__clients '>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12}>
              <div className="app__clients-left">
                <div className="app__title app__clients-left" dir={isLang === "en" ? 'ltr' : 'rtl'}>
                  <h1
                    // style={{ fontSize: '16px' }}
                    className={` mb-3 fw-bold`}
                    data-aos="flip-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                  >
                    {/* {data?.clients?.section_title} */}
                    عملائـــنا
                  </h1>

                  <p

                    data-aos="flip-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                  >
                    {/* {data?.clients?.section_content} */}
                    اخر المقالات القانونية و الاخبار


                  </p>
                </div>

              </div>
            </Col>
            <Col xl={1} lg={1} md={12} sm={12}></Col>
            <Col xl={7} lg={7} md={6} sm={12} className='my-5 py-4'>
              <div data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-out-cubic">
                <Slider {...settings} className='slider__feedback  '>
                  {/*              {
                    data?.clients?.clients?.map((item, index) => (
                      <div key={index} className='slider__item' >
                        <img width={150} height={90} className='shadow-lg' src={item?.image} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                      </div>
                    ))
                  } */}

                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>

                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>
                  <div className='slider__item' >
                    <img width={150} height={90} className='shadow-lg' src={img.LogoBg} alt="company" style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }} />
                  </div>

                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ClientsHome