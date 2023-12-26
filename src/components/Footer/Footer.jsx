import React, { useContext } from 'react'
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
import { ApiContext } from 'context/FatchApi';
const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation()
  let { settings } = useContext(ApiContext)
  return (
    <>
      <div className="app_footer overflow-hidden">
        <div className="app_footer_container">
          <Row>
            <Col xl={3n} lg={3n} md={6} sm={12} className='app_footer_content ' >
              <img src={img.LogoBg} alt="" className='w-50 ' />
              <p>{settings?.description}</p>
              <div className="app_footer_social">
                <span>{t('footer_follow')}</span>
                <div className="icons flex flex-row gap-4 justify-content- mt-4 align-items-center">
                  {
                    settings?.instagram &&
                    <a href={settings?.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram color={'#C4AB73'} />
                    </a>
                  }
                  {
                    settings?.linked_in &&
                    <a href={settings?.linked_in} target="_blank" rel="noopener noreferrer">
                      <Linkedin color={'#C4AB73'} />
                    </a>
                  }
                  {
                    settings?.twitter &&
                    <a href={settings?.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter color={'#C4AB73'} />
                    </a>
                  }
                  {
                    settings?.facebook &&
                    <a href={settings?.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook color={'#C4AB73'} />
                    </a>
                  }
                  {
                    settings?.whats &&
                    <a href={`https://wa.me/${settings?.whats}`} target="_blank" rel="noopener noreferrer">
                      <Icons.Whatsapp />
                    </a>
                  }
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} className='app_footer_location px-5'>
              <div className="link ">
                <Nav className={`  flex justify-content-center gap-3 w-100 `}>
                  <Nav.Link as={Link} to='/' className={` ${location.pathname === '/' ? 'active' : 'text-light'}`}>{t('nav_home')}</Nav.Link>
                  <Nav.Link as={Link} to='/about' className={`  ${location.pathname === '/about' ? 'active' : 'text-light'}`}>{t('nav_about')} </Nav.Link>
                  <Nav.Link as={Link} to='/clients' className={`  ${location.pathname === '/clients' ? 'active' : 'text-light'}`}>{t('nav_clients')} </Nav.Link>
                  <Nav.Link as={Link} to='/services' className={`  ${location.pathname === '/services' ? 'active' : 'text-light'}`}>{t('nav_service')} </Nav.Link>
                  <Nav.Link as={Link} to='/blogs' className={`  ${location.pathname === '/blogs' ? 'active' : 'text-light'}`}>{t('nav_blogs')} </Nav.Link>
                  <Nav.Link as={Link} to='/contact-us' className={`  ${location.pathname === '/contact-us' ? 'active' : 'text-light'}`}> {t('nav_connect')} </Nav.Link>
                </Nav>
              </div>
              <div className="location_map mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14836.994644211562!2d39.116845!3d21.615232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db337d8cdedb%3A0x24094293cd97da6e!2z2LTYsdmD2Kkg2LfZhNi52Kog2LnYqNiv2KfZhNix2K3ZitmFINmG2KfZgtix2Ygg2YjZhdi52KrYsiDYt9mE2LnYqiDZhtin2YLYsdmIINmE2YTZhdit2KfZhdin2Kkg2YjYp9mE2KfYs9iq2LTYp9ix2KfYqiDYp9mE2YLYp9mG2YjZhtmK2Kk!5e0!3m2!1sen!2seg!4v1702369787309!5m2!1sen!2seg"
                  width="100%" height="240px"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="address_footer mt-4" >
                <span> {t('footer_address')} </span>
                <div className="item">
                  {
                    settings?.address?.map((item, index) => (
                      <p key={index} className='flex gap-2 align-items-center'>
                        <strong>{item?.city}: </strong>  <span >{item?.address}</span>
                      </p>
                    ))
                  }
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} className='app_footer_call mt-8'>
              <span> {t('footer_contact')} </span>
              <div className="call flex flex-column g">

                {
                  settings?.phone &&
                  <a href={`tel:${settings?.phone}`} target='_blank'>
                    <div className="item flex gap-3 align-items-center">
                      <Icons.Call />
                      <span dir='ltr'>{' + '}{settings?.phone?.replace(/\D/g, '')?.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '$1-$2-$3-$4')}</span>
                    </div>
                  </a>
                }
                <a href={`mailto:${settings?.email}`} target='_blank'>
                  <div className="item flex gap-3 align-items-center">
                    <Icons.Email />
                    <span className='text-none'>{settings?.email}</span>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Footer