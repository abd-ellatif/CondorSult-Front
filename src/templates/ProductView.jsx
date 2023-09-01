import React, { Component } from "react";
import Button from "../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articleState } from "../states/Atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { userState } from "../states/Atoms";
import { PostComment } from "../api/ContentPosters";
import { getUserById } from "../api/DataFetchers";
import { useEffect } from "react";

function CommentaireCard({ user, content }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        var fetchedUserName = await getUserById(user);
        setUserName(fetchedUserName);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  });

  return (
    <div className="bg-gray-200 rounded-md p-4 flex flex-col gap-4 my-6">
      <h1 className="font-semibold p-2 rounded-md  bg-gray-300 w-fit">
        {userName}
      </h1>
      <p>{content}</p>
    </div>
  );
}
function CommentairePost(articleId) {
  const [userStateValue, setUserState] = useRecoilState(userState);
  const [commentState, setCommentState] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await PostComment(
      commentState,
      userStateValue.id,
      articleId,
      userStateValue.token
    );
    response && alert("Commentaire ajouté");
    setCommentState("");
  };
  if (userStateValue) {
    return (
      <form className="flex w-full gap-8" onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="comment"
          placeholder="Ajouter un  commentaire..."
          required
          value={commentState}
          onChange={(e) => setCommentState(e.target.value)}
          className="bg-gray-200 rounded-xl p-4"
          cols="70"
        ></textarea>
        <div className="flex flex-col justify-end">
          <button type="submit" className="bg-blue-900 rounded text-white p-2">
            publier
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}

export default function ProductView() {
  const [ArticleState, setArticleState] = useRecoilState(articleState);
  const [currentVariante, setCurrentVariante] = useState(
    ArticleState.variantes[0]
  );

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
          <h1 className="font-semibold text-xl">{currentVariante.name}</h1>
          <h1>
            {" "}
            {"Couleur: "}
            <span
              className="w-1 h-1 text-transparent border-solid border-2  border-black"
              style={{ backgroundColor: currentVariante.color }}
            >
              col
            </span>
          </h1>
          <p>{ArticleState.description}</p>
          <div className="flex gap-4 flex-wrap">
            {ArticleState.variantes.map((variante) => {
              return (
                <Button
                  variante={0}
                  onClick={() => {
                    setCurrentVariante(variante);
                  }}
                  key={`${variante.name}`}
                >
                  {variante.reference}
                </Button>
              );
            })}
          </div>
          <h1 className="text-green-700">{currentVariante.price}.00 DA</h1>
        </div>
        <div className="flex flex-col gap-8">
          <Slider {...settings}>
            {ArticleState.images.slice(1).map((image) => {
              return (
                <img
                  src={"https://apialbaraka.e-faciliti.dz/" + image}
                  key={image}
                ></img>
              );
            })}
          </Slider>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold my-4">Commentaires</h1>
        {CommentairePost(ArticleState.id)}
        <div className="flex flex-col gap-4">
          {ArticleState.comments.map((comment) => {
            return (
              <CommentaireCard
                user={comment.user}
                content={comment.content}
                key={`${comment.content}`}
              ></CommentaireCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
