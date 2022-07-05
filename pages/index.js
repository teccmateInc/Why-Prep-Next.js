import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomeFour/MainBanner";
import InformationArea from "../components/HomeFour/InformationArea";
import ServiceCard from "../components/HomeFour/ServiceCard";
import OurFeaturesContent from "../components/HomeFour/FeatureContent";
import EasyPaymentBorrow from "../components/HomeFour/EasyPaymentBorrow";
import FunFacts from "../components/HomeFour/FunFacts";
// import CustomersFeedback from '../components/Common/CustomersFeedback'
// import PartnerContent from '../components/Common/PartnerContent'
// import AppDownloadContent from '../components/HomeFour/AppDownloadContent'
import AccountCreateArea from "../components/Common/AccountCreateArea";
import BlogCard from "../components/Common/BlogCard";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import FeatureContent1 from "../components/HomeFour/featureContent1";
// import Rates from '../components/Rates/Rates'

class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        <InformationArea />
        {/* <Rates /> */}
        <ServiceCard />
        <OurFeaturesContent />
        {/* <FeatureContent1 /> */}
        <EasyPaymentBorrow />
        <FunFacts />
        {/* <CustomersFeedback /> */}
        {/* <PartnerContent /> */}
        {/* <AppDownloadContent /> */}
        <AccountCreateArea />
        <BlogCard />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
