import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articleState } from "../states/Atoms";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

function ProductCard(props) {
  const [ArticleState, setArticleState] = useRecoilState(articleState);
  const handleClick = () => {
    setArticleState(props.article);
  };
  return (
    <Link to="/Article" className="" onClick={handleClick}>
      <img
        src={"https://apialbaraka.e-faciliti.dz/" + props.article.images[0]}
        alt={props.article.variantes[0]}
      />
      <h6 className="my-2 text-sm text-center">{props.article.name}</h6>
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
    <div className="z-0 my-20">
      <h1 className="font-medium text-xl my-2">
        {props.categoryName}{" "}
        <span className="text-orange-600 font-bold">{">"}</span>
      </h1>
      <Slider {...settings}>
        {props.articles.map((article) => (
          <ProductCard key={article.id} article={article} />
        ))}
      </Slider>
    </div>
  );
}

export default ProductsCarousel;
