import React from 'react';
import AOS from "aos";

import './App.css';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Imports Components
import Header from './Header/Header'
import HomeCarousel from './Carousel/Carousel'
import Footer from './Footer/Footer'
 
// initialization
AOS.init();

export default () => (
  <div className="App">
    <Header />
    <HomeCarousel /> 
    <Footer />
  </div>
);
