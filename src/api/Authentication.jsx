import axios from "axios";
import { User, UserForSign } from "../ressources/Models";
axios.defaults.baseURL = "https://localhost:7292/api/";

export async function Login(userName, Password) {
  try {
    const response = await axios.post("Authentication/login", {
      userName,
      Password,
    });
    console.log(response);
    if (response.status == 200) {
      return new User(
        response.data.userId,
        response.data.userName,
        response.data.token,
        response.data.roles[0]
      );
    }
  } catch (error) {
    console.log(error);
    alert("Credentials are wrong or server down");
  }
}

export async function Signup(
  name,
  password,
  email,
  phone,
  address,
  date,
  role
) {
  try {
    const year = parseInt(date.split("-")[0]);
    const userForSign = new UserForSign(
      name,
      password,
      email,
      phone,
      address,
      year,
      role
    );
    const response = await axios.post("Authentication/Signup", userForSign);
    if (response.status == 201) {
      console.log("Signup response " + response);
      return true;
    }
  } catch (error) {
    console.log(error);
    alert("Error in signup");
  }
}
