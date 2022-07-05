import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/OnlineStore/MainBanner";
import Feature from "../components/OnlineStore/Feature";
import BackendSample from "../components/OnlineStore/BackendSample";
import WebFeature from "../components/OnlineStore/WebFeature";
import NoMatter from "../components/OnlineStore/NoMatter";
import Pricing from "../components/OnlineStore/Pricing";
import Footer from "../components/Layouts/Footer";
import OnlineStoreBuilder from "../components/OnlineStore/onlineStoreBuilder";
import NavbarTwo from "../components/Layouts/NavbarTwo";

class Online_Store extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        <MainBanner />
        <Feature />
        <BackendSample />
        <OnlineStoreBuilder />
        <WebFeature />
        <NoMatter />
        <Pricing />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Online_Store;
