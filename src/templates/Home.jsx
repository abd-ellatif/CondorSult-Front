import React, { Component } from "react";
import ProductsCarousel from "../components/ProductsCarousel";

export default function Home() {
  return (
    <div>
      <ProductsCarousel
        articles={[
          { id: "0", nom: "Article" },
          { id: "0", nom: "Article" },
          { id: "0", nom: "Article" },
          { id: "0", nom: "Article" },
          { id: "0", nom: "Article" },
        ]}
      ></ProductsCarousel>
    </div>
  );
}
