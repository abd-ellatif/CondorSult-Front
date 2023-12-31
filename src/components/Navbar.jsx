import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useRecoilState, atom } from "recoil";
import { userState } from "../states/Atoms";

function Navbar(props) {
  const [state, setState] = useRecoilState(userState);
  const link = "text-blue-900 hover:underline underline-offset-4 font-medium";
  const [hamburgerMenu, setHamburgerMenu] = useState(true);
  const toggleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };
  return (
    <div className="sticky top-0 bg-white p-4 z-50">
      <div className="container mt-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="src\assets\logo.png" className="w-32 h-10"></img>
        </Link>

        <ul className="hidden md:flex space-x-6">
          <Link to="/" className={link}>
            Home
          </Link>
          <Link to="/Blog" className={link}>
            Blog
          </Link>
          <Link to="/PointsVente" className={link}>
            Points vente
          </Link>
          <Link to="/Contact" className={link}>
            Contact
          </Link>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleHamburgerMenu}>Menu</button>
        </div>
        {state == null ? (
          <Button variante={0} onClick={props.openPopup}>
            Se connecter
          </Button>
        ) : (
          <Button
            variante={0}
            onClick={() => {
              setState(null);
            }}
          >
            {state.name}
          </Button>
        )}
      </div>
      <ul
        className={`${
          hamburgerMenu
            ? "bg-white absolute top-16 left-20 right-20 flex flex-col items-center gap-4 m-4 md:hidden p-4 z-10"
            : "hidden"
        }`}
      >
        <Link to="" className={link}>
          Home
        </Link>
        <Link to="/Blog" className={link}>
          Blog
        </Link>
        <Link to="/PointsVente" className={link}>
          Points vente
        </Link>
        <Link to="/Contact" className={link}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
