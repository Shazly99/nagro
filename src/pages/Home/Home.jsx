import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import Component from 'constants/Component'
import { LocalizationContext } from 'context/LangChange'
import cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { GetData } from 'utils/fetchData'
import ServiceHome from './Service/ServiceHome'
import './home.scss'
import img from 'constants/Img'


const Home = () => {
  let { isLang } = useContext(LocalizationContext); 
  
  const url = `${process.env.REACT_APP_API_URL}/home`;
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
              setData(data) 
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
          <>
            <Component.Slider data={data}/>
            <Component.AboutHome  data={data?.about_us}/>  
            <ServiceHome dataHeader={data?.services} data={data?.services?.services}  />
            <Component.Why_us dataHeader={data?.why_us}   data={data?.why_us?.why_us}/>
            <Component.BlogHome   dataHeader={data?.blogs}   data={data?.blogs?.blogs}/>
            <Component.ClientsHome data={data}/>
            <Component.ConnectHome />
          </> :

          <div className='loader flex justify-content-center align-items-center'>
            <div className="Player">
              <img src={img.Logo} width={250} alt="" srcset="" />
            </div>
          </div>
      }

    </div>
  )
}

export default Home
