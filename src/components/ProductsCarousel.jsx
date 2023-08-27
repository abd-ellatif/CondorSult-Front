import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link to="/" className="">
      <img src="src\assets\placeholder.png" alt="Product" />
      <h6 className="my-2">{props.article.nom}</h6>
    </Link>
  );
}

function ProductsCarousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="z-0">
      <h1 className="font-medium text-xl my-2">Category</h1>
      <Slider {...settings}>
        {props.articles.map((article) => (
          <ProductCard key={article.id} article={article} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
