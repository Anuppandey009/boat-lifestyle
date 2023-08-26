import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProducts } from "../../store/DailyDealsProductsSlice";
import "./dailyDealsProduct.css";

const DailyDealsProduct = () => {
  const dispatch = useDispatch();
  const { data: dailyDealsProducts } = useSelector(state => state.dailyDealsProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display four products at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const dailyDealsProductsCard = dailyDealsProducts.map((product) => (
    <div key={product.id} className='product-card'>
      <p>{product.category}</p>
      <img
        src={product.image}
        alt={product.category}
        style={{ width: '100px', height: '130px' }}
      />
    </div>
  ));

  return (
    <div className="product-slider-container">
      <Slider {...settings}>
        {dailyDealsProductsCard}
      </Slider>
    </div>
  );
};

const PrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev">
    &#8249;
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next">
    &#8250;
  </button>
);

export default DailyDealsProduct;
