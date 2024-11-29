import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import "../styles/Home.css";


const Landing = () => {
  return (
    <div className="Header">
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
};

export default Landing;