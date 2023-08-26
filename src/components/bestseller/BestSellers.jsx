import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import "./bestseller.css";
import { getbestsellerProduct } from "../../store/BestSellerProductSlice";
const BestSellers = () => {
  const dispatch = useDispatch();
  const { data: bestsellerProducts } = useSelector(
    (state) => state.bestsellerProducts
  );
  console.log("dta",bestsellerProducts)
  useEffect(() => {
    dispatch(getbestsellerProduct());
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
 
  const BestSellerProductcard =
    bestsellerProducts &&
    bestsellerProducts.map((product) => (
      <div className="parent-continer">
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.category} />
          <div className="product-details">
            <div className="left-details">
              <p className="product-title">{product.category}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="product-slider-container">
      <h3 className="heading">EXPLORE BESTSELLERS</h3>
      <Slider {...settings}>{BestSellerProductcard}</Slider>
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

export default BestSellers;
