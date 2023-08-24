import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/BestSellerSlider.css";

import image1 from "../assets/images/BestSeller/earpod.webp";
import image2 from "../assets/images/BestSeller/headphone.webp";
import image3 from "../assets/images/BestSeller/neckband.webp";
import image4 from "../assets/images/BestSeller/watch.webp";
import image5 from "../assets/images/BestSeller/wirlessSpeaker.webp";

const BestSeller = () => {
  const products = [image1, image2, image3, image4, image5];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([0, 1, 2, 3]);

  const slide = (direction) => {
    if (direction === 'left') {
      let newProducts = [...visibleProducts];
      newProducts = newProducts.map(index => (index + 1) % products.length);
      setVisibleProducts(newProducts);
      setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
    } else if (direction === 'right') {
      let newProducts = [...visibleProducts];
      newProducts = newProducts.map(index => (index - 1 + products.length) % products.length);
      setVisibleProducts(newProducts);
      setCurrentSlide(currentSlide === products.length - 1 ? products.length - 1 : currentSlide + 1);
    }
  };

  return (
    <div className="best-seller-container">
      <div className="carousel">
        {visibleProducts.map((productIndex, index) => (
          <div
            className={`carousel-item ${visibleProducts.indexOf(index) !== -1 ? 'active' : ''}`}
            key={index}
          >
            <img src={products[productIndex]} alt={`Product ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>
      <button
        className="arrow left-arrow"
        onClick={() => slide('left')}
        disabled={currentSlide === 0}
      >
        &lt;
      </button>
      <button
        className="arrow right-arrow"
        onClick={() => slide('right')}
        disabled={currentSlide === products.length - 1}
      >
        &gt;
      </button>
    </div>
  );
};

export default BestSeller;
