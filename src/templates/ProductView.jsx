import React, { Component } from "react";
import Button from "../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CommentaireCard() {
  return (
    <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4">
      <h1 className="font-semibold p-2 rounded-md  bg-gray-300 w-fit">
        Utilisateur
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
        blanditiis ipsum doloribus itaque corrupti, doloremque sint rerum dolor
        dolorum. Eligendi possimus enim delectus vero, quod animi in sequi
        voluptates eos!
      </p>
    </div>
  );
}

export default function ProductView() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 m-10">
        <div className="flex flex-col gap-10 my-8">
          <h1 className="font-semibold text-xl">Titre d'Article</h1>
          <p>
            lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Repellat vero necessitatibus, tenetur sint, recusandae
            voluptatem, sapiente quidem obcaecati nostrum magni officia
            praesentium doloremque incidunt voluptas sit in quam alias deleniti.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 flex-wrap">
            <Button variante={0}>variante1</Button>
            <Button variante={0}>variante1</Button>
            <Button variante={0}>variante1</Button>
          </div>
          <Slider {...settings}>
            <h1 className="bg-red-200 py-20"> HHH</h1>
            <h1 className="bg-red-200 py-20"> HHH</h1>
            <h1 className="bg-red-200 py-20"> HHH</h1>
          </Slider>
          <h1 className="text-green-700">0000.00 DA</h1>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold my-4">Commentaires</h1>
        <div className="flex flex-col gap-4">
          <div>{CommentaireCard()}</div>
          <div>{CommentaireCard()}</div>
          <div>{CommentaireCard()}</div>
        </div>
      </div>
    </>
  );
}
