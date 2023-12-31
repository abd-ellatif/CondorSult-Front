import React, { Component } from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Login } from "../api/Authentication";
import { userState } from "../states/Atoms";

function LoginCard({ isOpen, OnClose, openSign }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [UserState, setUserState] = useRecoilState(userState);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await Login(userName, password);
    user && setUserState(user);
    user && OnClose();
  };

  const handleClick = async (e) => {
    OnClose();
    openSign();
  };
  return (
    <div
      className={`popup ${
        isOpen
          ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 z-50 bg-blue-900 rounded-xl"
          : "hidden"
      }`}
    >
      <div className="bg-white rounded-md flex flex-col items-center w-fit justify-center p-4 shadow-2xl gap-2">
        <img src="src\assets\logo.png"></img>
        <h1>Se connecter</h1>
        <form className="flex flex-col">
          <div>
            <div className="m-4">
              <label htmlFor="email" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="Username"
                name="email"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
                placeholder="Entrer votre e-mail"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            <div className="m-4">
              <label htmlFor="password" className="block text-gray-600">
                Mot de passe
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-900 text-white py-2 px-8 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Se connecter
            </button>
          </div>
        </form>
        <div>
          Vous n'avez pas d compte?{" "}
          <button className="text-blue-900" onClick={handleClick}>
            inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
