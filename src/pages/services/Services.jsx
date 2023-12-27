import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import img from 'constants/Img'
import { LocalizationContext } from 'context/LangChange'
import cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { GetData } from 'utils/fetchData'
import './services.scss'

const Services = () => {
  let { isLang } = useContext(LocalizationContext);

  let { t } = useTranslation()
  const url = `${process.env.REACT_APP_API_URL}/services`;
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
        console.log(data);
        setTimeout(() => {
          setLoader(true)
        }, 1000);
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
    <div className='position-relative '>
      {
        Loader === true ?
          <div className='app_services overflow-hidden'>
            <div className="header_banner " style={{ marginTop: '90px' }}>
              <img src={img.banner_services} alt="banner" className='w-100' srcset="" />
              <div className="overlay">
                <div className="header">
                  <span>{data?.section_title}</span>
                </div>
              </div>
            </div>
            {
              data?.services?.map((item, index) => (
                <div className="app_services_items">
                  <div className="app_services_container">
                    <Row className='flex align-items-stretch'>
                      <Col xl={4} lg={4} md={6} sm={12} className='  flex justify-content-center align-items-center'>
                        <div className="app_serives_header shadow-sm">
                          <h1>{index + 1}</h1>
                          <div className="footer flex flex-column gap-3">
                            <img src={item?.image} alt="" className='w-25' />
                            <span>{item?.title}</span>
                          </div>
                        </div>
                      </Col>
                      <Col xl={8} lg={8} md={6} sm={12} className='app_serives_content '>
                        <div className='div_ul' dangerouslySetInnerHTML={{ __html: item?.description }} />
                      </Col>
                    </Row>
                  </div>
                </div>
              ))
            }

          </div>
          :
          <div className='loader flex justify-content-center align-items-center'>
            <div className="Player">
              <img src={img.Logo} width={250} alt="" srcset="" />
            </div>
          </div>
      }

    </div>

  )
}

export default Services
