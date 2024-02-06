import img from 'constants/Img'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './blog.scss'
import loader from 'assets/loader.json'
import Icons from 'constants/Icons'
import { useTranslation } from 'react-i18next'
import { GetData } from 'utils/fetchData'
import cookies from 'js-cookie';
import { LocalizationContext } from 'context/LangChange'
import { Player } from '@lottiefiles/react-lottie-player'
import { format, parseISO } from 'date-fns'
import { Link } from 'react-router-dom'
import { ar } from 'date-fns/locale';

const Blogs = () => {
  let { isLang } = useContext(LocalizationContext);

  let { t } = useTranslation()
  const url = `${process.env.REACT_APP_API_URL}/blogs`;
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
              <img src={img.header} alt="banner" className='w-100' />]
              <div className="overlay">
                <div className="header">
                  <span>{data?.section_title}</span>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className="app_blog_container">
              <Row>
                {
                  data?.blogs?.data?.map((item, index) => (
                    <Col xl={6} lg={6} md={12} sm={12} className='blog_padding  '>
                      <div className="blof_contact">
                        <div className="blog_img">
                          <img src={item?.image} className='w-100 object-fit-cover' height={'400px'} />
                          <div className="blog_date">
                            {
                              isLang === "en" ?
                                <span>{format(parseISO(item?.date), 'd MMMM, yyyy')}</span> :
                                <span>{format(parseISO(item?.date), 'd MMMM, yyyy', { locale: ar })}</span>
                            }
                          </div>
                        </div>
                        <div className="blog_info shadow-2">
                          <span className='title'>{item?.short_title}</span>
                          <p>{item?.short_description?.split(' ')?.slice(0, 20).join(' ')}</p>
                          <Link to={`/blogs/details/${item?.id}`}>
                            <div className="btn_more  cursor-pointer user-select-none flex gap-1  align-items-center">
                              <span>{t('btn_read_more')}</span>
                              <Icons.ArrowMore className='mt-1' />
                            </div>
                          </Link>
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

export default Blogs
