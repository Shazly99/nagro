import img from 'constants/Img'
import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import Icons from 'constants/Icons'
import { LocalizationContext } from 'context/LangChange'
import cookies from 'js-cookie'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GetData } from 'utils/fetchData'
import '../Blogs/blog.scss'
const Compositions = () => {
  let { isLang } = useContext(LocalizationContext);

  let { t } = useTranslation()
  const url = `${process.env.REACT_APP_API_URL}/books`;
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
        setData(data?.data?.blogs?.data)
        console.log(data?.data?.blogs?.data);
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

    <div className='position-relative'>
      {
        Loader === true ?
          <div className='app_blogs'>
            <div className="header_banner " style={{ marginTop: '90px' }}>
              <img src={img.header} alt="banner" className='w-100' srcset="" />]
              <div className="overlay">
                <div className="header">
                  <span>{isLang === "en" ? 'Compositions' : 'المؤلفات'}</span>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className="app_blog_container">
              <Row>
                {
                  data?.map((item, index) => (
                    <Col key={index} xl={6} lg={6} md={12} sm={12} className='blog_padding  '>
                      <div className="blof_contact">
                        <div className="blog_img">
                          <img src={item?.image} className='w-100 object-fit-cover' height={'400px'} />

                        </div>
                        <div className="blog_info shadow-2">
                          <span className='title'>{item?.title}</span>
                          <p>{item?.short_description?.split(' ')?.slice(0, 20).join(' ')}</p>
                          <div className="flex flex-row justify-content-between align-items-center">
                            <Link to={`/compositions/details/${item?.id}`}>
                              <div className="btn_more  cursor-pointer user-select-none flex gap-1  align-items-center">
                                <span>{t('btn_read_more')}</span>
                                <Icons.ArrowMore className='mt-1' />
                              </div>
                            </Link>
                            <a href={item?.file} target='_blank'>

                            <div className="btn_more  cursor-pointer user-select-none flex gap-2  align-items-center">
                              <span>{t('btn_download')}</span>
                              <i className='pi pi-download'></i>
                            </div> 
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                }

              </Row>
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

export default Compositions
