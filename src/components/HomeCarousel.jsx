import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../assets/images/image1.webp';
import image2 from '../assets/images/image2.webp';
import image3 from '../assets/images/image3.webp';
import image4 from '../assets/images/image4.webp';

const images = [image1, image2, image3, image4];

const HomeCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
