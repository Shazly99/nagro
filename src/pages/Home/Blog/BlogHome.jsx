import Icons from 'constants/Icons';
import { LocalizationContext } from 'context/LangChange';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './blog.scss';

import { format, parseISO } from 'date-fns';
import { ar } from 'date-fns/locale';
const BlogHome = ({ dataHeader, data }) => {
  let { isLang } = useContext(LocalizationContext);
  let { t } = useTranslation()

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
                <span>{dataHeader?.section_title}</span>
                <p>{dataHeader?.section_content}</p>


                <Link to={'/blogs'}>
                  <div className="btn_more_header shadow-lg cursor-pointer user-select-none">
                    <span>{t('btn_more')}</span>
                    <Icons.ArrowMore className='mt-1' />
                  </div>
                </Link>

              </header>
            </Col>
            <Col xl={8} lg={8} md={6} sm={12} className='blog_slider'>
              <Row>

                <Slider {...settings} className='slider__feedback  '>
                  {
                    data?.map((item, index) => (
                      <Col key={index} xl={6} lg={6} md={6} sm={12} className='p-5 slider__item h-100'>
                        <div className="app_blog_content bg-white rounded-4 m-0 p-0 overflow-hidden h-100">
                          <div className="blog_overlay overflow-hidden h-100">
                            <img src={item?.image} className='w-100   ' />
                            <div className="overlay">
                              <div className="blog_date">
                                {
                                  isLang === "en" ?
                                    <span>{format(parseISO(item?.date), 'd MMMM, yyyy')}</span> :
                                    <span>{format(parseISO(item?.date), 'd MMMM, yyyy', { locale: ar })}</span>
                                }
                              </div>
                              <div className="blog_title">
                                {/* <span className='title'>{item?.title}</span> */}
                              </div>
                            </div>
                          </div>
                          <h4 className='text-center flex justify-content-center align-items-center py-4 h-8rem'>{item?.short_title}</h4>
                        </div>
                      </Col>
                    ))
                  }



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
