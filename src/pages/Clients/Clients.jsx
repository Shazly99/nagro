import { Player } from '@lottiefiles/react-lottie-player'
import loader from 'assets/loader.json'
import img from 'constants/Img'
import { LocalizationContext } from 'context/LangChange'
import { motion } from 'framer-motion'
import cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { GetData } from 'utils/fetchData'
import './Clients.scss'
const Clients = () => {
    let { isLang } = useContext(LocalizationContext);

    let { t } = useTranslation()
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
                setData(data?.clients)
                console.log(data);
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
    }, [])
    return (
        <div className='position-relative '>
            {
                Loader === true ?
                    <div className='app_clients overflow-hidden '>
                        <div className="header_banner  overflow-hidden" style={{ marginTop: '90px' }}>
                            <img src={img.Clients} alt="banner" className='w-100'  />
                            <div className="overlay">
                                <div className="header">
                                    <span>{ data?.section_title}</span>
                                </div>
                            </div>
                        </div>

                        <div className="app_blog_container py-5">
                            <Container>
                                <Row>
                                    {
                                        data?.clients?.map((item, index) => (
                                            <Col key={index} xl={3} lg={3} md={3} sm={3} className='d-flex align-item-center justify-content-center mt-5'>
                                                <motion.img
                                                    style={{ cursor: 'pointer', objectFit: 'contain', objectPosition: '50% 50%' }}
                                                    src={item.image}
                                                    width={'50%'}
                                                    alt={'company.title'}
                                                    whileInView={{
                                                        scale: [0, 1],
                                                        transition: {
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.5,
                                                            transition: 0.5
                                                        }
                                                    }}
                                                />
                                            </Col>
                                        ))
                                    }

                                </Row>

                            </Container>
                        </div>
                    </div> :
                    <div className='loader flex justify-content-center align-items-center'>
                        <div className="Player">
                            <Player
                                className='w-100'
                                // src="https://assets3.lottiefiles.com/packages/lf20_ZJR0xnKKys.json"
                                src={loader}
                                autoplay
                                loop
                            />
                        </div>
                    </div>
            }

        </div>
    )
}

export default Clients
