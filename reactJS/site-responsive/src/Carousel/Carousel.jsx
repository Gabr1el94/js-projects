import './Carousel.css'

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slides from '../data/slides'

export default () => {
    return (
        <Carousel data-aos="zoom-in"
        data-aos-duration="1000"
        >
            {slides.map((slide, i) => {
                return (
                    <Carousel.Item key={slide.id} className="carousel-items" interval={1000}>        
                        <img
                        className="d-block w-100"
                        src={slide.image}
                        alt={slide.alt}
                        />
                        <Carousel.Caption>
                        <h3>{slide.caption}</h3>
                        <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}