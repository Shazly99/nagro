import React from 'react'
import './blog.scss'
import { Col, Row } from 'react-bootstrap'
import Icons from 'constants/Icons'
import img from 'constants/Img';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
const BlogHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className="app_blog_home flex justify-content-center align-items-center">
        <div className="app_blog_container h-100 bg-bg-red-500">
          <Row className='h-100 flex justify-content-center align-items-center'>

            <Col xl={4} lg={4} md={6} sm={12}>
              <header className='app_blog_header'>
                <span>مقالاتنا</span>
                <p>اخر المقالات القانونية و الاخبار</p>


                <Link to={'/blogs'}>
                  <div className="btn_more_header shadow-lg cursor-pointer user-select-none">
                    <span>رؤية المزيد</span>
                    <Icons.ArrowMore className='mt-1' />
                  </div> 
                </Link>

              </header>
            </Col>
            <Col xl={8} lg={8} md={6} sm={12} className='blog_slider'>
              <Row>

                <Slider {...settings} className='slider__feedback  '>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                  <Col xl={6} lg={6} md={6} sm={12} className='p-5 slider__item'>
                    <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden ">
                      <div className="blog_overlay overflow-hidden ">
                        <img src={img.blog} className='w-100 rounded-3' />
                        <div className="overlay">
                          <div className="blog_date">
                            <span> 15 كتوبر , 2021</span>
                          </div>
                          <div className="blog_title">
                            <span>كتابة لوريم ابسوم</span>
                          </div>
                        </div>
                      </div>
                      <h1 className='text-center py-4'>المقالة الثانية</h1>
                    </div>
                  </Col>

                </Slider>


              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default BlogHome
