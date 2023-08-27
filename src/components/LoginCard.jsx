import React, { Component } from "react";
import { Link } from "react-router-dom";

function LoginCard() {
  return (
    <div className="bg-white rounded-md flex flex-col items-center w-fit justify-center p-4 shadow-2xl gap-2">
      <img src="src\assets\logo.png"></img>
      <h1>Se connecter</h1>
      <form className="flex flex-col">
        <div>
          <div className="m-4">
            <label htmlFor="email" className="block text-gray-600">
              E-mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="Entrer votre e-mail"
              required
            />
          </div>

          <div className="m-4">
            <label htmlFor="password" className="block text-gray-600">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="Mot de passe"
              required
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 px-8 rounded-md hover:bg-blue-600"
          >
            Se connecter
          </button>
        </div>
      </form>
      <div>
        Vous n'avez pas d compte?{" "}
        <Link to="/" className="text-blue-900">
          inscrire
        </Link>
      </div>
    </div>
  );
}

export default LoginCard;
