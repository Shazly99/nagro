import img from 'constants/Img'
import { LocalizationContext } from 'context/LangChange';
import ConnectHome from 'pages/Home/Connect/ConnectHome'
import { useEffect } from 'react'

const Connect = () => {
  let { isLang } = useContext(LocalizationContext);

  useEffect(() => {
    window.scroll(0, 0)
  }, [isLang])

  return (

    <div className="app_connect">
      <div className="header_banner" style={{ marginTop: '90px' }}>
        <img src={img.header} alt="banner" className='w-100' srcset="" />
        <div className="overlay">
          <div className="header">
            <span>تواصل معنا</span>
          </div>
        </div>
      </div>

      <ConnectHome />
    </div>
  )
}

export default Connect
