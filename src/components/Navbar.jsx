import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const link = "text-blue-900 hover:underline underline-offset-4 font-medium";
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const toggleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  return (
    <div className="sticky top-0 bg-white p-4">
      <div className="container mt-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="src\assets\logo.png" className="w-32 h-10"></img>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <Link to="/" className={link}>
            Home
          </Link>
          <Link to="/" className={link}>
            Blog
          </Link>
          <Link to="/" className={link}>
            Points vente
          </Link>
          <Link to="/" className={link}>
            Contact
          </Link>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleHamburgerMenu}>Menu</button>
        </div>
        <Button variante={0} onClick={() => {}}>
          Se connecter
        </Button>
      </div>
      <ul
        className={`${
          hamburgerMenu
            ? "bg-white absolute top-10 left-20 right-20 flex flex-col items-center gap-4 m-4 md:hidden p-4"
            : "hidden"
        }`}
      >
        <Link to="/" className={link}>
          Home
        </Link>
        <Link to="/" className={link}>
          Blog
        </Link>
        <Link to="/" className={link}>
          Points vente
        </Link>
        <Link to="/" className={link}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
