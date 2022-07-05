import React from "react";
import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const {t}=useTranslation("loyalty")
  return (
    <div className="loyalty-main-banner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 align-items-center">
            <div style={{padding:"2vmax 0"}}>
            <h3 style={{color:"white"}}>{t("firstbanner.main.a")}</h3>
            <h3 style={{color:"white"}}>{t("firstbanner.main.b")}</h3>
            <h3 style={{color:"white"}}>{t("firstbanner.main.c")}</h3>
            </div>
            <button className="freetrialBtn">
              <strong>{t("firstbanner.botton")}</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
