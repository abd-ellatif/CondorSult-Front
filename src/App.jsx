import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./templates/Home";
import Contact from "./templates/Contact";
import PointsVente from "./templates/PointsVente";
import LoginCard from "./components/LoginCard";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <LoginCard isOpen={isPopupOpen} OnClose={closePopup}></LoginCard>
      <Navbar openPopup={openPopup}></Navbar>
      <div className="mt-16">
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/Blog" element={<Home></Home>} />
          <Route path="/PointsVente" element={<PointsVente></PointsVente>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
