import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./templates/Home";
import Contact from "./templates/Contact";
import PointsVente from "./templates/PointsVente";
import LoginCard from "./components/LoginCard";
import SignupCard from "./components/SignupCard";
import { fetchArticles } from "./api/DataFetchers";
import ProductView from "./templates/ProductView";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSignPopupOpen, setIsSignPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const openSignPopup = () => {
    setIsSignPopupOpen(true);
  };
  const closeSignPopup = () => {
    setIsSignPopupOpen(false);
  };

  const fetchcats = async () => {
    const cats = await fetchArticles();
    console.log(cats);
  };
  return (
    <>
      <LoginCard
        isOpen={isPopupOpen}
        OnClose={closePopup}
        openSign={openSignPopup}
      ></LoginCard>
      <SignupCard
        isOpen={isSignPopupOpen}
        onClose={closeSignPopup}
      ></SignupCard>
      <Navbar openPopup={openPopup}></Navbar>
      <div className="mt-16">
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/Blog" element={<Home></Home>} />
          <Route path="/PointsVente" element={<PointsVente></PointsVente>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/Article" element={<ProductView></ProductView>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
