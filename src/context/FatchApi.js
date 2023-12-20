import cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import { GetData } from 'utils/fetchData';
import { LocalizationContext } from './LangChange';


export const ApiContext = createContext([])

function FatchApi({ children }) {
    let { isLang } = useContext(LocalizationContext)
    const url = `${process.env.REACT_APP_API_URL}/home/settings`;
    let header = {
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': cookies.get('i18next'),
        }
    }

    const [settings, setSettings] = useState(null)
    const apiHome = () => {
        GetData(url, header).then((data) => {
            if (data?.status === 200) {
                console.log(data?.data?.address);
                setSettings(data?.data)
            }
        })
    }
    useEffect(() => {
        apiHome()
        return () => {
            apiHome()
        }
    }, [isLang])


    return (
        <ApiContext.Provider value={{ settings }}>
            {children}
        </ApiContext.Provider>
    )
}

export default FatchApi