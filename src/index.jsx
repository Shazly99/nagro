import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';



// Import css files bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
 
//primereact
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

// animation
import 'aos/dist/aos.css';
// slider 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   <App /> );

 