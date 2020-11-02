import React from 'react';
import AOS from "aos";

import './App.css';
import "aos/dist/aos.css";

//Imports Components
import Header from './Header/Header'
import SlideShow from './Carousel/Carousel'
import Footer from './Footer/Footer'
import Container from 'react-bootstrap/Container'
 

// initialization
AOS.init();

export default () => (
  <Container fluid>
    <Header />
    <SlideShow />
  </Container>
);
