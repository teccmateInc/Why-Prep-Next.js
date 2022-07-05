import React from "react";
import { useTranslation } from "react-i18next";

const NeverMiss = () => {
  const {t}=useTranslation("messages")
  return (
    <div className="messages-never-miss">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-xs-12 col-md-6">

            <div className="messages-phone">
              <img src="/images/messages-phone.png" alt="" />   
            </div>
            
          </div>

          <div className="col-xs-12 col-md-5 px-5">
            <div className="title">{t("nevermiss.header")}</div> 
            <div className="subtitle">{t("nevermiss.sub")}</div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeverMiss;
