import React, { Component } from "react";
import ProductsCarousel from "../components/ProductsCarousel";
import { useEffect, useState } from "react";
import { fetchCategories, fetchArticles } from "../api/DataFetchers";
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        var fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        var fetchedArticles = await fetchArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="z-0">
      {categories.map((category) => {
        const categoryArticles = articles.filter(
          (article) => article.category == category.id
        );
        if (categoryArticles.length != 0) {
          return (
            <ProductsCarousel
              categoryName={category.name}
              articles={[...categoryArticles]}
              key={category.id}
            ></ProductsCarousel>
          );
        }
      })}
    </div>
  );
}
