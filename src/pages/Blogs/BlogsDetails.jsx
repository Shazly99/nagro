import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import img from 'constants/Img'
import { LocalizationContext } from 'context/LangChange'
import { format, parseISO } from 'date-fns'
import { ar } from 'date-fns/locale'
import cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { GetData } from 'utils/fetchData'
import './blog.scss'


const BlogsDetails = () => {
  let { isLang } = useContext(LocalizationContext);
  let { id } = useParams();
  let { t } = useTranslation()
  const url = `${process.env.REACT_APP_API_URL}/blogs/${id}`;
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
          <div className='app_blogs  mb-7'>
            <div className="header_banner " style={{ marginTop: '0px' }}>
              <img src={img.header} alt="banner" className='w-100' />
              <div className="overlay">
                <div className="header">
                  <span>{data?.short_title}</span>
                </div>
              </div>
            </div>
            <div>

            </div>
            <div className="app_blog_container mt-5">
              <Row className='app_blogs_details'>
                <h3>{data?.title}</h3>
                <div className="blog_date mb-5">
                  {
                    isLang === "en" ?
                      <span>{format(parseISO(data?.date), 'd MMMM, yyyy')}</span> :
                      <span>{format(parseISO(data?.date), 'd MMMM, yyyy', { locale: ar })}</span>
                  }
                </div>
                <div className='blog_details_data' dangerouslySetInnerHTML={{ __html: data?.description }} />

              </Row>
            </div>
          </div> :
          <div className='loader flex justify-content-center align-items-center'>
            <div className="Player">
              <img src={img.Logo} width={250} alt="" srcset="" />
            </div>
          </div>
      }
      {/* <div className="card mt-8 p-8">
        <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        <Button onClick={() => console.log(text)}>aaa</Button>
      </div> */}
    </div>
  )
}



export default BlogsDetails