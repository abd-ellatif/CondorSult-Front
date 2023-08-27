import React, { Component } from "react";

export default function Contact() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-white rounded-lg">
          <form className="flex flex-col">
            <div className="flex flex-col">
              <div className="mx-4 my-2">
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
              <div className="mx-4 my-2">
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
              <div className="mx-4 my-2">
                <label htmlFor="message" className="block text-gray-600">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="w-full border rounded py-2 px-3 focus:outline-none focus:ring focus:border-blue-200"
                  placeholder="Votre message..."
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-900 text-white py-2 px-8 rounded-md hover:bg-blue-600"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 bg-white rounded-lg flex flex-col justify-evenly items-center">
          <img src="src\assets\logo.png"></img>
          <h1>Adresse</h1>
          <h1>+213XXXXXXXX</h1>
          <h1>Email</h1>
        </div>
      </div>
    </div>
  );
}
