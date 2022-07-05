import React from "react";
import Theme from "../components/Themes/ThemeInfo";
import Features from "../components/Themes/Features.js";
import Reviews from "../components/Themes/Reviews.js";
import Footer from "../components/Layouts/Footer";
import NavbarTwo from "../components/Layouts/NavbarTwo";

const Themes = () => {
  return (
    <div>
      <NavbarTwo />
      <Theme />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Themes;
