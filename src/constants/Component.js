import { lazy } from 'react';
 
// import Home from 'pages/Home/Home';
// export const Home = lazy(()=> import('pages/Home/Home'))
import Nagro from 'layout/Nagro';
import NotFound from 'components/notfound/NotFound';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import Slider from 'pages/Home/slider/Slider';
import AboutHome from 'pages/Home/AboutHome/AboutHome';
import Why_us from 'pages/Home/why_us/Why_us';
import BlogHome from 'pages/Home/Blog/BlogHome';
import ClientsHome from 'pages/Home/clients/ClientsHome';
import ConnectHome from 'pages/Home/Connect/ConnectHome';
import Connect from 'pages/Connect/Connect';
import Services from 'pages/services/Services';
import About from 'pages/About/About';
import Blogs from 'pages/Blogs/Blogs';


const Component = { 
   // Home,
   Slider,
   AboutHome,
   Nagro,
   NotFound,
   NavBar,
   Footer,
   Why_us,
   BlogHome,
   ClientsHome,
   ConnectHome,
   Connect,
   Services,
   About,
   Blogs
}

export default Component


