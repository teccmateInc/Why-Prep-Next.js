import React from "react";
import { useTranslation } from "react-i18next";

const StartUp = () => {
    const {t} =useTranslation("why")
  return (
    <div>
      <div className="startup-container">
      <div className="startup-img">
          <img src="/images/whyPrep.PNG" style={{width:"100%"}}/>
          </div>
          <div className="col-md-8 py-5">
        <h3 className="startup-heading">{t("thirdbanner.main")}</h3>
        <p className="startup-para">
          {t("thirdbanner.body")}
        </p>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
