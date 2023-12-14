import React from 'react'
import './footer.scss'
import { Row, Col, Nav } from 'react-bootstrap'
import img from 'constants/Img'
import Facebook from 'assets/SVG/Facebook'
import Linkedin from 'assets/SVG/Linkedin'
import Twitter from 'assets/SVG/Twitter'
import Instagram from 'assets/SVG/Instagram'
import Icons from 'constants/Icons'
import cookies from 'js-cookie'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation()

  return (
    <>
      <div className="app_footer">
        <div className="app_footer_container">
          <Row>
            <Col xl={3n} lg={3n} md={6} sm={12} className='app_footer_content ' >
              <img src={img.LogoBg} alt="" className='w-50 ' />
              <p>نحن نخبة من المحامين ذو خبرة اكثر من 28 عاما في كافة افرع القانون حيث نتميز بالالتزام التام و المصداقية مع عملائنا.</p>
              <div className="app_footer_social">
                <span>تابعنا علي</span>
                <div className="icons flex flex-row gap-4 justify-content- mt-4 align-items-center">
                  <Instagram color={'#C4AB73'} />
                  <Linkedin color={'#C4AB73'} />
                  <Twitter color={'#C4AB73'} />
                  <Facebook color={'#C4AB73'} />
                  <Icons.Whatsapp />
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} className='app_footer_location px-5'>
              <div className="link ">
                <Nav className={`  flex justify-content-center gap-3 w-100`}>
                  <Nav.Link as={Link} to='/contact-us' className={`  ${location.pathname === '/contact-us' ? 'active' : 'text-light'}`}> {t('nav_connect')} </Nav.Link>
                  <Nav.Link as={Link} to='/blogs' className={`  ${location.pathname === '/blogs' ? 'active' : 'text-light'}`}>{t('nav_blogs')} </Nav.Link>
                  <Nav.Link as={Link} to='/services' className={`  ${location.pathname === '/services' ? 'active' : 'text-light'}`}>{t('nav_service')} </Nav.Link>
                  <Nav.Link as={Link} to='/about' className={`  ${location.pathname === '/about' ? 'active' : 'text-light'}`}>{t('nav_about')} </Nav.Link>
                  <Nav.Link as={Link} to='/' className={` ${location.pathname === '/' ? 'active' : 'text-light'}`}>{t('nav_home')}</Nav.Link>
                </Nav>
              </div>
              <div className="location_map mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14836.994644211562!2d39.116845!3d21.615232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db337d8cdedb%3A0x24094293cd97da6e!2z2LTYsdmD2Kkg2LfZhNi52Kog2LnYqNiv2KfZhNix2K3ZitmFINmG2KfZgtix2Ygg2YjZhdi52KrYsiDYt9mE2LnYqiDZhtin2YLYsdmIINmE2YTZhdit2KfZhdin2Kkg2YjYp9mE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YLYp9mG2YjZhtmK2Kk!5e0!3m2!1sen!2seg!4v1702369787309!5m2!1sen!2seg"
                  width="100%" height="240px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="address_footer mt-4">
                <span>العنوان</span>
                <div className="item">
                  <p>  <strong> مكة المكرمة :  </strong>  حي الحمراء و ام الجود، طريق مكة جدة السريع</p>
                  <p>  <strong> جدة : </strong>   حي الشاطئ 4 : شارع الزاهد البخاري المتفرع من طريق الملك عبد العزيز باتجاه الجنوب.</p>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} className='app_footer_call mt-8'>
              <span>بيانات التواصل</span>
              <div className="call flex flex-column g">
                <div className="item flex gap-3 align-items-center">
                  <Icons.Call />
                  <span dir='ltr'>+966 55 551 3013</span>
                </div>
                <div className="item flex gap-3 align-items-center">
                  <Icons.Email />
                  <span>talat@nagro.com.sa</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Footer