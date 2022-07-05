import React from "react";
import Navbar from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/SocialMedia/MainBanner";
import AllMedia from "../components/SocialMedia/AllMedia";
import ThreeMedia from "../components/SocialMedia/ThreeMedia";
import Integration from "../components/SocialMedia/Integration";
import Connect from "../components/SocialMedia/Connect.js";
import Social from "../components/SocialMedia/Social.js";
import Features from "../components/SocialMedia/Features.js";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Banner from "../components/SocialMedia/Banner";

const SocialMedia = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <MainBanner /> */}
      <Banner />
      <AllMedia />
      <ThreeMedia />
      {/* <Integration /> */}
      <Connect />
      <Social />
      <Features />
      {/* <AccountCreateArea /> */}
      <Footer />
    </React.Fragment>
  );
};

export default SocialMedia;
