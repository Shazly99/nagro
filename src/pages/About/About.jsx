import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import Icons from 'constants/Icons'
import img from 'constants/Img'
import { LocalizationContext } from 'context/LangChange'
import cookies from 'js-cookie'
import { Button } from 'primereact/button'
import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GetData } from 'utils/fetchData'
import './about.scss'

const About = () => {
  let { isLang } = useContext(LocalizationContext);
  let { t } = useTranslation()

  const url = `${process.env.REACT_APP_API_URL}/about-us`;
  const [Loader, setLoader] = useState(false)
  let header = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': cookies.get('i18next'),
    }
  }

  const [data, setData] = useState(null)
  const apiHome = () => {
    setLoader(false)
    GetData(url, header).then((data) => {
      if (data?.status === 200) {
        setData(data?.data)
        setTimeout(() => {
          setLoader(true)
        }, 1500);
        setLoader(false)

      }
    })
  }
  useEffect(() => {
    apiHome()
    return () => {
      apiHome()
    }
  }, [isLang])
  useEffect(() => {
    window.scroll(0, 0)
  }, [isLang])
  return (
    <div className='position-relative'>
      {
        Loader === true ?
          <div className='master_about overflow-hidden'>
            <div className="header_banner " style={{ marginTop: '90px' }}>
              <img src={img.banner_about} alt="banner" className='w-100' />]
              <div className="overlay">
                <div className="header">
                  <span>{t('nav_about')}</span>
                </div>
              </div>
            </div>
            <header className=''>
              <span className='span_header_about'>{data?.about_us[3]?.title}</span>
            </header>
            <div className="master_about_header mt-3">
              <div className="master_about_header_container">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={12} className=' b flex align-items-center'>
                    <div className="content flex flex-column gap-4" >
                      <span className='div_ul' dangerouslySetInnerHTML={{ __html: data?.about_us[3]?.description }} />
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <img src={data?.about_us[5]?.image} alt="" className='w-100 p-2' />

                  </Col>
                </Row>
              </div>
            </div>
            <div className="master_about_header_2th">
              <Row>
                <Col xl={6} lg={6} md={6} sm={12} className='mt-5'>
                  <div className="app_about_1th p-5">
                    <div className="title shadow-lg">
                      <span>{data?.about_us[2]?.title}</span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data?.about_us[2]?.description }} />

                  </div>
                </Col>

                <Col xl={6} lg={6} md={6} sm={12} className='mt-5'>
                  <div className="app_about_2th p-5">
                    <div className="title shadow-lg">
                      <span>{data?.about_us[4]?.title}</span>
                    </div>
                    <div className='our_mission' dangerouslySetInnerHTML={{ __html: data?.about_us[4]?.description }} />
                  </div>
                </Col>

              </Row>
            </div>

            <header className='mt-5'>
              <span className='span_header_about'>{data?.about_us[5]?.title}</span>
            </header>
            <div className="master_about_header mt-3">
              <div className="master_about_header_container">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={12} className=' b flex align-items-center'>

                    <div className='content flex flex-column   div_ul' dangerouslySetInnerHTML={{ __html: data?.about_us[5]?.description }} />

                  </Col>
                  <Col xl={4} lg={4} md={4} sm={12}>
                    <img src={data?.about_us[5]?.image} alt="" className='w-100 p-2' />
                  </Col>
                </Row>

              </div>
            </div>
            {
              data?.contributors &&
              <div className="owner">
                {
                  data?.contributors[0] &&
                  <>
                    <div className="owner_title">
                      <span>{t('about_owner')}</span>
                    </div>
                    <div className="owner_content ">
                      <Row className='owner_content_row'>
                        <Col xl={5} lg={5} md={5} sm={12} className='owner_content_col  '>
                          <div className="owner_desc flex align-items-center h-100 justify-content-center flex-column">
                            <img src={data?.contributors[0]?.image} alt="" className='w-75 owner_desc_img' />
                            <div className="jop_title flex flex-row align-items-center bg-light gap-3 w-27rem rounded-3 shadow-3 p-2">
                              <img src={data?.contributors[0]?.image} alt="" width={100} />
                              <div className="info">
                                <span>{data?.contributors[0]?.name}</span>
                                <p>{data?.contributors[0]?.experience}</p>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col xl={7} lg={7} md={7} sm={12} className='owner_content_col  '>
                          <div className="owner_content_body">
                            <div className="title">
                              <h2>{t('about_qualifications')}</h2>
                            </div>
                            <div className='div_ul' dangerouslySetInnerHTML={{ __html: data?.contributors[0]?.description }} />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                }

                {
                  data?.contributors[1] &&
                  <div className="owner_content mt-8">
                    <Row>
                      <Col xl={7} lg={7} md={7} sm={12} className='owner_content_col'>
                        <div className="owner_content_body">
                          <div className="title">
                            <h2>{t('about_qualifications')}</h2>
                          </div>
                          <div className='div_ul' dangerouslySetInnerHTML={{ __html: data?.contributors[1]?.description }} />
                        </div>
                      </Col>
                      <Col xl={5} lg={5} md={5} sm={12} className='owner_content_col'>
                        <div className="owner_desc flex align-items-center h-100 justify-content-center flex-column">
                          <img src={data?.contributors[1]?.image} alt="" className='w-75 owner_desc_img' />

                          <div className="jop_title flex flex-row align-items-center bg-light gap-3 w-27rem  rounded-3 shadow-3 p-2">
                            <img src={data?.contributors[1]?.image} alt="" width={100} />

                            <div className="info  ">
                              <span>{data?.contributors[1]?.name}</span>
                              <p>{data?.contributors[1]?.experience}</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                }
              </div>
            }

            <div className="owner_contact overflow-hidden">
              <div className="conatct_container">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={12} className='contact_sm'>
                    <span className='contact_title'>{t('about_contact1')}</span>


                    <div className="contact_call flex gap-4 align-items-center">
                      <Icons.Call />
                      <span>{t('about_contact2')}</span>
                    </div>
                  </Col>

                  <Col xl={4} lg={4} md={4} sm={12} className='flex justify-content-center align-items-center'>
                    <Link to={'/contact-us'}>
                      <Button label={t('nav_connect')} />

                    </Link>
                  </Col>

                </Row>
              </div>
            </div>
          </div> :

          <div className='loader flex justify-content-center align-items-center'>
            <div className="Player">
              <img src={img.Logo} width={250} alt="" srcset="" />
            </div>
          </div>
      }

    </div>

  )
}

export default About