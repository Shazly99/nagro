import Component from 'constants/Component'
import React, { useContext, useEffect } from 'react'
import './home.scss'
import ServiceHome from './Service/ServiceHome'
import { ApiContext } from 'context/FatchApi'


const Home = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  let { data } = useContext(ApiContext)
  return (
    <div className=''>
      <Component.Slider />
      <Component.AboutHome />
      <ServiceHome />
      <Component.Why_us/>  
      <Component.BlogHome/>
      <Component.ClientsHome/>
      <Component.ConnectHome/>

    </div>
  )
}

export default Home
