import Icons from 'constants/Icons';
import img from 'constants/Img';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './scervice.scss';
const ServiceHome = ({ dataHeader, data }) => {

  let { t } = useTranslation()

  return (
    <div className=' app__service_home  bg-dark-subtle overflow-hidden'>
      <section className='services_container'>
        <header className='app_services_header flex justify-content-center align-items-center flex-column '>
          <span>{dataHeader?.section_title}</span>
          <p className='mt-3'>{dataHeader?.section_content} </p>
        </header>
        <Row className='servicess_mt'>
          {
            data?.slice(0,5)?.map((item, index) => (
              <Col key={index} xl={4} lg={4} md={6} sm={12} className={`${index + 1 > 3 ? 'p-2' : 'mt-2 '}  border service_${index + 1}`}>
                <div className="services_content p-4 py-6">
                  <div className="icons">
                    <img src={item.image} className='w-100' alt="" srcset="" />
                  </div>
                  <span>{item?.short_title}</span>
                  <p>{item?.short_description}</p>
                  <Link to={'/services'}>
                    <div className="btn_more  cursor-pointer user-select-none">
                      <span>{t('btn_read_more')}</span>
                      <Icons.ArrowMore className='mt-1' />
                    </div>
                  </Link>
                </div>
              </Col>
            ))
          } 
          <Col xl={4} lg={4} md={6} sm={12} className='  border service_6 cursor-pointer'>
            <Link to={'/services'}>
              <div className="services_content_other h-100 flex justify-content-center align-items-center gap-4 flex-column">
                <span>{t('more_services')}</span>
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
