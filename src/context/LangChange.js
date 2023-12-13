import cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';


export const LocalizationContext = createContext([]) 

function LangChange({ children }) {

  const [isLang, setIsLang] = useState(cookies.get('i18next')); 

  useEffect(() => {
    cookies.set('i18next', isLang)
  }, [isLang])
  
  return (
    <LocalizationContext.Provider value={{ isLang, setIsLang }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export default LangChange