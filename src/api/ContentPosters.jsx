import axios from "axios";
import { Comment } from "../ressources/Models";
axios.defaults.baseURL = "https://localhost:7292/api/";

export async function PostComment(content, userId, articleId, token) {
  try {
    console.log(userId);
    const response = await axios.post(
      "Catalogue/AjouterCommentaire",
      {
        Contenu: content,
        userID: userId,
        articleID: articleId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    if (response.status == 201) {
      alert("Commentaire ajouté");
    }
  } catch (error) {
    console.log(error);
  }
}
