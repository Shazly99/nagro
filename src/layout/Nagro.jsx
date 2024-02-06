import Footer from 'components/Footer/Footer'
import NavBar from 'components/Navbar/NavBar'
import Icons from 'constants/Icons'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion';
import { LocalizationContext } from 'context/LangChange'
import { Button } from 'primereact/button'
import { ApiContext } from 'context/FatchApi'

const Nagro = () => {
  let {isLang} =useContext(LocalizationContext)
  let { settings } = useContext(ApiContext)

  return (
    <div className='relative '>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
      <div className={`${isLang === "en" ? 'chatEn' : 'chatAr'} chat`}>
      
        {/* <ChatPopup togglePopup={togglePopup} isOpen={isOpen} />
         */}
        <a href={`https://wa.me/${settings?.whats}`}target='_blank' rel="noreferrer">
          <motion.div
            className="phoneIcons round d-flex justify-content-center align-items-center "
            whileHover={{ rotate: 360, y: -5, scale: 1.2 }}
            transition={{ duration: 0.4 }}
          >
            <Button 
              id="chatButton"
              icon={<Icons.Whatsapp />}
              rounded
              text
              raised
              severity="success" 
              aria-label="Search"
            />
          </motion.div>
        </a>

      </div>
    </div>
  )
}

export default Nagro
