import React from 'react'
import './scervice.scss'
import { Col, Container, Row } from 'react-bootstrap'
import img from 'constants/Img';
import Icons from 'constants/Icons';
import { Link } from 'react-router-dom';
const ServiceHome = () => {
  return (
    <div className=' app__service_home  bg-dark-subtle overflow-hidden'>
      <section className='services_container'>
        <header className='app_services_header flex justify-content-center align-items-center flex-column '>
          <span>خدماتنا</span>
          <p className='mt-2'>لدينا مجموعة من الخدمات المتميزة والتي من خلالها يمككنا المساعدة</p>
        </header>
        <Row className='servicess_mt'>

          <Col xl={4} lg={4} md={6} sm={12} className='mt-2   border service_1'>
            <div className="services_content p-4 py-6">
              <div className="icons">
                <img src={img.Servies1Icon1} className='w-100' alt="" srcset="" />
              </div>
              <span >المجالات القانونیة</span>
              <p>نتولى تقدیم جمیع الخدمات القانونیة، ومنھا على سبیل المثال لا الحصر</p>
              <Link to={'/services'}>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </Link>

            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} className='mt-2  border service_2'>
            <div className="services_content p-4 py-6">
              <div className="icons">
                <img src={img.Servies1Icon2} className='w-100' alt="" srcset="" />
              </div>
              <span>التحكیم</span>
              <p>الشریك المؤسس والمدیر العام/ طلعت عبد الرحیم ناقر و ُمقید بقائمة المحكمین بوزارة العدل</p>
              <Link to={'/services'}>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </Link>

            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} className='mt-2 border service_3'>
            <div className="services_content py-6  px-2">
              <div className="icons">
                <img src={img.Servies1Icon3} className='w-100' alt="" srcset="" />
              </div>
              <span >خدمات التوثیق</span>
              <p>نقدم جمیع خدمات الأعمال التوثیقیة من خلال الشریك المؤسس والمدیر العام / معتز طلعت ناقرو – بموجب ترخیص التوثیق رقم .٤٤/۱۲٦</p>
              <Link to={'/services'}>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </Link>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} className='p-3 border service_4'>
            <div className="services_content py-6 px-4">
              <div className="icons">
                <img src={img.Servies1Icon4} className='w-100' alt="" srcset="" />
              </div>
              <span >  مجالات التطویر الإداري والعمالي</span>
              <p>نتولى من خلال ترخیص الاستشارات العمالیة القیام بكافة الأعمال التطویریة لإداراتي الموارد البشریة وشؤون الموظفین</p>
              <Link to={'/services'}>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </Link>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} className='p-3 border service_5'>
            <div className="services_content py-6 px-4">
              <div className="icons">
                <img src={img.Servies1Icon1} className='w-100' alt="" srcset="" />
              </div>
              <span >مجالات التدریب  </span>
              <p>لشریك المؤسس والمدیر العام/ طلعت عبد الرحیم ناقرو - مدرب إداري وقانوني معتمد بموجب الترخیص رقم (۱٥۲۸).</p>

              <Link to={'/services'}>
                <div className="btn_more  cursor-pointer user-select-none">
                  <span>قراءة المزيد</span>
                  <Icons.ArrowMore className='mt-1' />
                </div>
              </Link>
            </div>
          </Col>

          <Col xl={4} lg={4} md={6} sm={12} className='p-3 border service_6 cursor-pointer'>
            <Link to={'/services'}>
              <div className="services_content_other h-100 flex justify-content-center align-items-center gap-4 flex-column">
                <span>خدمات اخري</span>
                <Icons.ArrowLg />
              </div>
            </Link>

          </Col>

        </Row>
      </section>
    </div>
  )
}

export default ServiceHome
