import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/Checkout/MainBanner";
import SeizeEverySale from "../components/Checkout/SeizeEverySale";
import Timeline from "../components/Checkout/Timeline";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import FAQ from "../components/Checkout/FAQ";
import Footer from "../components/Layouts/Footer";
import NavbarTwo from "../components/Layouts/NavbarTwo";

const Checkout = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      <MainBanner />
      <SeizeEverySale />
      <Timeline />
      <AccountCreateArea />
      <FAQ />
      <Footer />
    </React.Fragment>
  );
};

export default Checkout;
