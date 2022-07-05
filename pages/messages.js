import React from "react";

import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Messages/MainBanner";
import GetDirect from "../components/Messages/GetDirect";
import NeverMiss from "../components/Messages/NeverMiss";
import Enhance from "../components/Messages/Enhance";
import QuickReplies from "../components/Messages/QuickReplies";
import SpendLess from "../components/Messages/SpendLess";
import GetStarted from "../components/Messages/GetStarted";

import Footer from "../components/Layouts/Footer";


const Messages = () => {
  return (
    <React.Fragment>
      <NavbarTwo />
      
      <MainBanner />
      <GetDirect />
      <NeverMiss />
      <Enhance />
      <QuickReplies />
      <SpendLess />
      <GetStarted />

      <Footer />
    </React.Fragment>
  );
};

export default Messages

