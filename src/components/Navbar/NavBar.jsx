import { motion } from 'framer-motion';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import Icons from 'constants/Icons';
import img from 'constants/Img';
import { LocalizationContext } from 'context/LangChange';
import { useContext, useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import routes from './routes';
// import { SharedData } from 'context/CallApi';

const languages = [
    {
        code: 'fr',
        name: 'Français',
        dir: 'ltr',
        country_code: 'fr',
    },
    {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        country_code: 'gb',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'sa',
    },
]
const NavBar = ({ navbarColor }) => {
    // let { favourite, cart, fetchPersonalData } = useContext(SharedData)

    const menuRef = useRef(null);
    const [activeLink, setActiveLink] = useState(0);
    const location = useLocation();
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    let { isLang, setIsLang, LogOut } = useContext(LocalizationContext);
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';
    }, [currentLanguage, t])
    const handleLanguageChange = (selectedLanguageCode) => {
        setIsLang(selectedLanguageCode);
        if (selectedLanguageCode === 'en') {
            document.body.dir = 'ltr';
        } else {
            document.body.dir = 'rtl';
        }
        i18next.changeLanguage(selectedLanguageCode);
    };
    const [showMenu, setShowMenu] = useState(false);

    // const currentPath = location.pathname;
    const onAvatarClick = (event) => {
        menuRef.current.show(event);
        setShowMenu(!showMenu);
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [visibleRight, setVisibleRight] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setVisibleRight(false)
    };

    return (
        <div className='app__navbar '  >
            <Container>
                <Navbar
                    dir='ltr'
                    fixed={scrollPosition > 600 ? 'top' : 'top'}
                    collapseOnSelect
                    expand="sm"
                    className={`${navbarColor} ${scrollPosition > 600 ? 'scroll navbar-navOnthorPAge shadow-lg ' : ''} shadow`}
                >
                    <div className="flex justify-content-between    align-items-center  w-100 container-fluid  "
                        dir={cookies.get('i18next') === 'en' || cookies.get('i18next') === 'fr' ? 'rtl' : 'ltr'}
                    >
                        <div className="nav_logo_sm">
                            <div className="nav_links flex justify-content-between nav_bar_am ">
                                <div className="sidebar_sm" >
                                    <Nav>
                                        <Nav.Item className='flex justify-content-between align-items-center gap-5  '>
                                            <div className="language-select">
                                                <div className="d-flex justify-content-end gap-3 align-items-center language-select-root">
                                                    <div className={`dropdown ${isLang === "ar" ? 'dropdown_dirAr' : 'dropdown_dir'}`}>
                                                        {
                                                            isLang === "en" ?
                                                                <div className="change-lang  " onClick={(eventKey) => handleLanguageChange('ar')}>
                                                                    <span className='text ' style={{ marginBottom: '4px' }}>  عربيه</span>
                                                                    <img src={img.ArLang} alt="images"   />
                                                                </div> :
                                                                <div className="change-lang" onClick={(eventKey) => handleLanguageChange('en')}>
                                                                    <span className='text ' /* style={{ marginBottom: '2px' }} */>  English</span>
                                                                    <img src={img.EnLang} alt="images"   />
                                                                </div>
                                                        }
                                                    </div>
                                                    <div className='ml-4 app__menu-left'>
                                                        <Link to={'/contact-us'}>
                                                            <motion.div
                                                                className='app__menu-talk'
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.8 }} > 
                                                                {t('nav_contact')}
                                                                <span className="spinner-grow spinner-grow-sm" role="status"></span>
                                                            </motion.div>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </Nav.Item>
                                    </Nav>
                                    <Nav className={`${cookies.get('i18next') === "en" ? 'dropdown_en' : 'dropdown_ar'}`}>
                                        <Nav.Link as={Link} to='/contact-us' className={`  ${location.pathname === '/contact-us' ? 'active' : 'text-light'}`}> {t('nav_connect')} </Nav.Link>
                                        <Nav.Link as={Link} to='/blogs' className={`  ${location.pathname === '/blogs' ? 'active' : 'text-light'}`}>{t('nav_blogs')} </Nav.Link>
                                        <Nav.Link as={Link} to='/clients' className={`  ${location.pathname === '/clients' ? 'active' : 'text-light'}`}>{t('nav_clients')} </Nav.Link>
                                        <Nav.Link as={Link} to='/services' className={`  ${location.pathname === '/services' ? 'active' : 'text-light'}`}>{t('nav_service')} </Nav.Link>
                                        <Nav.Link as={Link} to='/about' className={`  ${location.pathname === '/about' ? 'active' : 'text-light'}`}>{t('nav_about')} </Nav.Link>
                                        <Nav.Link as={Link} to='/' className={` ${location.pathname === '/' ? 'active' : 'text-light'}`}>{t('nav_home')}</Nav.Link>
                                    </Nav>
                                    {scrollPosition > 600 ?
                                        <div className="nav_logo_lg     flex  justifyalign-content-center  align-items-center">
                                            <img src={img.LogoSm} style={{ width: '50px', height: '50px' }} alt="" className='rotateLogo' />
                                        </div> :
                                        <div className="nav_logo_lg   flex  justifyalign-content-center  align-items-center">
                                            <img src={img.Logo} alt="" srcset="" />
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="nav_logo_sidebar     flex justify-content-between  align-items-center">
                            <div className="sidebar_lg">
                                <Button icon="pi pi-bars" rounded outlined severity="secondary" onClick={() => setVisibleRight(true)} />
                            </div>
                            <img src={img.Logo} alt='logo nagro' />
                        </div>


                        <Sidebar className='bg_sidebar view_sidebar_home-page' position={cookies.get('i18next') !== "en" ? "right" : "left"} visible={visibleRight} onHide={() => setVisibleRight(false)}>
                            <div className="navbar_sm_page  ">
                                <div className="   d-flex flex-column   " >
                                    <section className={'routes  '} >
                                        {routes?.map((root, i) => {
                                            return (
                                                <div key={i}>
                                                    <Link
                                                        to={root.path}
                                                        className={`link ${activeLink === i ? 'active' : ''}  ${isLang === "en" ? 'justify-content-start' : 'justify-content-start'}`}
                                                        onClick={() => handleLinkClick(i)}
                                                    >
                                                        <div className={`icon  ${activeLink === i ? 'active' : ''}`} id={root.name} >
                                                            {root.icon}
                                                        </div>
                                                        <div className="link_text">{isLang === "en" ? root.nameEn : root.nameAr}</div>
                                                    </Link>
                                                </div>
                                            );
                                        })}

                                    </section>
                                </div>


                                <div className="change_lang-sidebar " dir='rtl '>
                                    {
                                        isLang === "en" ?
                                            <motion.div
                                                className='app__menu-talk cursor-pointer '
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => {
                                                    handleLanguageChange('ar')
                                                    i18next.changeLanguage('ar')
                                                    handleLinkClick()
                                                }}

                                            >
                                                عربيه
                                                <img src={img.ArLang} alt="images" className='rounded-circle' />
                                            </motion.div> :
                                            <motion.div
                                                className='app__menu-talk cursor-pointer '
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => {
                                                    handleLanguageChange('en')
                                                    i18next.changeLanguage('en')
                                                    handleLinkClick()

                                                }}
                                            >
                                                English
                                                <img src={img.EnLang} alt="images" />
                                            </motion.div>
                                    }
                                </div>
                            </div>
                        </Sidebar>
                    </div>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavBar
