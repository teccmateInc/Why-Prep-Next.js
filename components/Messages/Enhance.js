import React from "react";
import { useTranslation } from "react-i18next";

const Enhance = () => {
  const { t } = useTranslation("messages");
  return (
    <div
      className="enhance-container"
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-11 col-md-9 enhance">
            <div className="enhance-title">{t("enhance.header")}</div>
            <div className="enhance-subtitle">{t("enhance.sub")}</div>
           <img src="/images/messages-shop-admin.png" alt="" />
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Enhance;
