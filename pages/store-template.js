import React, { useState } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import StoreBanner from "../components/StoreTemplate/StoreBanner.js";
import Categories from "../components/StoreTemplate/Categories.js";
import MoreThanTemplate from "../components/StoreTemplate/MoreThanTemplate.js";
import Footer from "../components/Layouts/Footer";

const StoreTemplate = () => {
  const [theme, setTheme] = useState(null);
  return (
    <div>
      {theme ?? (
        <>
          <NavbarTwo />
          <StoreBanner />
          <Categories setTheme={setTheme} />
          <MoreThanTemplate />
          <Footer />
        </>
      )}
    </div>
  );
};

export default StoreTemplate;
