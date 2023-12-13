import img from 'constants/Img'
import ConnectHome from 'pages/Home/Connect/ConnectHome'

const Connect = () => {
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
