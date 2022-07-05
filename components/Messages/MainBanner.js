import React from "react";
import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const {t}=useTranslation("messages")
  return (
    <div className="messages-main-banner">

      <div className="container col-xs-11 offset-xs-1 col-md-5 col-xl-5">

        <div className="messages-cloud">
          <img src="/images/messages-cloud.png" alt="" />
        </div>

        
        <div className="title">{t("mainbanner.header")}</div>
        <div className="subtitle">{t("mainbanner.sub")}</div>
   
      </div>
    </div>
  );
};

export default MainBanner;