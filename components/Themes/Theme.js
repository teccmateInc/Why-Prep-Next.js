import React from "react";
import Footer from "../Layouts/Footer";
import NavbarTwo from "../Layouts/NavbarTwo";
import Features from "./Features";
import Reviews from "./Reviews";
import ThemeInfo from "./ThemeInfo";

const Theme = ({ onBack }) => {
  return (
    <div>
      <NavbarTwo />
      <ThemeInfo onBack={onBack} />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Theme;
