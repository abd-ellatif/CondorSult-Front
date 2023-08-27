import React, { Component } from "react";
import Button from "./Button";

function SignupCard() {
  return (
    <div className="bg-white rounded-md flex flex-col items-center w-fit justify-center p-4 shadow-2xl">
      <img src="src\assets\logo.png"></img>
      <h1>Creer un compte</h1>
      <form className="flex flex-col">
        <div className="grid md:grid-cols-2 ">
          <div className="m-4">
            <label htmlFor="username" className="block text-gray-600">
              Nom complet
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="Entrer votre nom"
              required
            />
          </div>
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
            <label htmlFor="address" className="block text-gray-600">
              Addresse
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="Entrer votre addresse"
              required
            />
          </div>
          <div className="m-4">
            <label htmlFor="tlephone" className="block text-gray-600">
              Numero de telephone
            </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="Entrer votre numero"
              required
            />
          </div>
          <div className="m-4">
            <label htmlFor="Date" className="block text-gray-600">
              Date de naissance
            </label>
            <input
              type="text"
              id="date"
              name="date"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
              placeholder="DD-MM-YYYY"
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
          <label htmlFor="agree" className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="mr-2"
              required
            />
            J'accepte que mes données soient collectées
          </label>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 px-8 rounded-md hover:bg-blue-600"
          >
            Inscrire
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupCard;
