import axios from "axios";
import {
  User,
  Category,
  Article,
  Variante,
  Comment,
  PointVente,
} from "../ressources/Models";
axios.defaults.baseURL = "https://localhost:7292/api/";

export async function fetchCategories() {
  try {
    const response = await axios.get("Catalogue/Categories");
    const Categories = [];
    const data = response.data;

    data.forEach((category) => {
      if (category.visible)
        Categories.push(
          new Category(
            category.categorieId,
            category.designation,
            category.description
          )
        );
    });

    return Categories;
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
  }
}

export async function fetchArticles() {
  try {
    const response = await axios.get("Catalogue/Articles");
    const Articles = [];

    const data = response.data.$values;

    data.forEach((article) => {
      const Images = [];
      const Variantes = [];
      const Comments = [];
      if (article.Visible) {
        article.Images.$values.forEach((image) => {
          Images.push(image.Url);
        });
        article.Variantes.$values.forEach((variante) => {
          if (variante.Visible)
            Variantes.push(
              new Variante(
                variante.Nom,
                variante.Couleur,
                variante.Reference,
                variante.Visible,
                variante.Prix
              )
            );
        });

        article.Commentaires.$values.forEach((comment) => {
          Comments.push(new Comment(comment.UserID, comment.Contenu));
        });

        Articles.push(
          new Article(
            article.ArticleId,
            article.Nom,
            article.Description,
            article.CategorieID,
            Images,
            Variantes,
            Comments
          )
        );
      }
    });
    return Articles;
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
  }
}

export async function fetchPointsVente() {
  try {
    const response = await axios.get("Catalogue/PointsVente");
    const PointsVente = [];
    const data = response.data;

    data.forEach((point) => {
      PointsVente.push(
        new PointVente(
          point.nom,
          point.addresse,
          point.latitude,
          point.longitude
        )
      );
    });

    return PointsVente;
  } catch (error) {
    console.error("Error fetching Categories:", error);
    throw error;
  }
}

export async function getUserById(userId) {
  try {
    const response = await axios.get(`/Catalogue/UserById/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}
