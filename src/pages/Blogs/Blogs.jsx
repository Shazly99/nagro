import img from 'constants/Img'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './blog.scss'
import Icons from 'constants/Icons'
const Blogs = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='app_blogs'>
      <div className="header_banner " style={{ marginTop: '90px' }}>
        <img src={img.header}  alt="banner" className='w-100' srcset="" />]
        <div className="overlay">
          <div className="header">
            <span>مقالاتنا</span>
          </div>
        </div>
      </div>

      <div className="app_blog_container">
        <Row>
          <Col xl={6} lg={6} md={12} sm={12} className='blog_padding  '>
            <div className="blof_contact">
              <div className="blog_img">
                <img src={img.Blog1} alt="" srcset="" />
                <div className="blog_date">
                  <span> 5 كتوبر , 2021</span>
                </div>
              </div>
              <div className="blog_info shadow-2">
                <span className='title'>أحكام الإجازة السنوية في نظام العمل السعودي</span>
                <p>تحتوي هذه المقالة على كتابة لوريم ابسوم. وهي كتابة لاتينية تستخدم لملا الفراغات. القسم الاول بعض كل الستار وتزويده الدنمارك, الستار بمحاولة</p>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </div>
            </div>
          </Col>

          <Col xl={6} lg={6} md={12} sm={12} className='blog_padding'>
            <div className="blof_contact">
              <div className="blog_img">
                <img src={img.Blog2} alt="" srcset="" />
                <div className="blog_date">
                  <span> 5 كتوبر , 2021</span>
                </div>
              </div>
              <div className="blog_info shadow-2">
                <span className='title'>أحكام الإجازة السنوية في نظام العمل السعودي</span>
                <p>تحتوي هذه المقالة على كتابة لوريم ابسوم. وهي كتابة لاتينية تستخدم لملا الفراغات. القسم الاول بعض كل الستار وتزويده الدنمارك, الستار بمحاولة</p>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </div>
            </div>
          </Col>


          <Col xl={6} lg={6} md={12} sm={12} className='blog_padding'>
            <div className="blof_contact">
              <div className="blog_img">
                <img src={img.Blog3} alt="" srcset="" />
                <div className="blog_date">
                  <span> 5 كتوبر , 2021</span>
                </div>
              </div>
              <div className="blog_info shadow-2">
                <span className='title'>أحكام الإجازة السنوية في نظام العمل السعودي</span>
                <p>تحتوي هذه المقالة على كتابة لوريم ابسوم. وهي كتابة لاتينية تستخدم لملا الفراغات. القسم الاول بعض كل الستار وتزويده الدنمارك, الستار بمحاولة</p>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </div>
            </div>
          </Col>

          <Col xl={6} lg={6} md={12} sm={12} className='blog_padding'>
            <div className="blof_contact">
              <div className="blog_img">
                <img src={img.Blog4} alt="" srcset="" />
                <div className="blog_date">
                  <span> 5 كتوبر , 2021</span>
                </div>
              </div>
              <div className="blog_info shadow-2">
                <span className='title'>أحكام الإجازة السنوية في نظام العمل السعودي</span>
                <p>تحتوي هذه المقالة على كتابة لوريم ابسوم. وهي كتابة لاتينية تستخدم لملا الفراغات. القسم الاول بعض كل الستار وتزويده الدنمارك, الستار بمحاولة</p>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default Blogs
