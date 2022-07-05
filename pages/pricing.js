import React, { Component } from "react";
// import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from "../components/Common/PageBannerContent";
// import PricingCard from '../components/Pricing/PricingCard';
import AccountCreateArea from "../components/Common/AccountCreateArea";
import Footer from "../components/Layouts/Footer";
import PricingCard from "../components/OnlineStore/Pricing";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import { withTranslation } from "react-i18next";
class Pricing extends Component {
  render() {
      const {t}=this.props
    return (
      <React.Fragment>
        <NavbarTwo />
        <PageBannerContent pageTitle={t("main")} pageCaption={t("sub")} t={t} />
        {/* <PricingCard /> */}
        <PricingCard />
        <AccountCreateArea />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withTranslation("pricing")(Pricing);
