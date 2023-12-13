import cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import { GetData } from 'utils/fetchData';


export const ApiContext = createContext([])

function FatchApi({ children }) {
    const url = `${process.env.REACT_APP_API_URL}/home`;
    let header = {
        headers: {
            'Content-Type': 'application/json', 
            'Accept-Language': cookies.get('i18next'),
        }
    }

    const [data, setData] = useState(null)
    const apiHome = () => {
        GetData(url, header).then((data) => {
            if (data?.status === 200) {
                console.log(data);

                setData(data)
            }
        })
    }
    useEffect(() => {
        apiHome()
        return () => {
            apiHome()
        }
    }, [cookies.get('i18next')])



    



    return (
        <ApiContext.Provider value={{data}}>
            {children}
        </ApiContext.Provider>
    )
}

export default FatchApi