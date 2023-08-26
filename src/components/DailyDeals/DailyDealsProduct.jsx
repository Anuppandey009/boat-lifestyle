import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from "../../store/DailyDealsProductsSlice";
import "./dailyDealsProduct.css";

const DailyDealsProduct = () => {
  const dispatch = useDispatch();
  const { data: dailyDealsProducts } = useSelector(
    (state) => state.dailyDealsProducts
  );

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
    nextArrow: <NextArrow />,
  };

  const dailyDealsProductsCard = dailyDealsProducts.map((product) => (
    <div className="parent-continer">
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.category} />
        <p className="product-rating">
          <span className="star-icon">&#9733;</span> {product.rating.rate}
        </p>

        <div className="product-details">
          <div className="left-details">
            <p className="product-title">{product.title}</p>
            <p className="product-price">₹{product.price}</p>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="product-slider-container">
      <Slider {...settings}>{dailyDealsProductsCard}</Slider>
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
