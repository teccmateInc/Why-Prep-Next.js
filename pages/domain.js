import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBannerContent from "../components/Domain/PageBannerContent";
import Search from "../components/Domain/Search";
import AllDomains from "../components/Domain/AllDomains.js";
import EnormousSelection from "../components/Domain/EnormousSelection.js";
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";
import NavbarTwo from "../components/Layouts/NavbarTwo";

class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarTwo />
        {/* <PageBannerContent /> */}
        <Search />
        <AllDomains />
        <EnormousSelection />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Pricing;
