import React from "react";
import { useTranslation } from "react-i18next";

const FeatureContent1 = () => {
  const { t } = useTranslation("home");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "8vmax 0",
        backgroundColor: "#F7FAFD",
        width: "100vw",
        maxWidth: "100%",
      }}
    >
      <div className="container">
        <h5 style={{ textAlign: "center",padding:"2vmax 0" }}>
          <strong>Our features </strong>
        </h5>
        <div className="row justify-content-center">
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-settings bg-f78acb"></i>
              </div>
              <h3>{t("forthbanner.a.main")}</h3>
              <p>{t("forthbanner.a.body")}</p>
            </div>
          </div>
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-envelope-of-white-paper bg-f78acb"></i>
              </div>
              <h3>{t("forthbanner.b.main")}</h3>
              <p>{t("forthbanner.b.body")}</p>
            </div>
          </div>
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-menu bg-cdf1d8"></i>
              </div>
              <h3>{t("forthbanner.c.main")}</h3>
              <p>{t("forthbanner.c.body")}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-info bg-c679e3"></i>
              </div>
              <h3>{t("forthbanner.d.main")}</h3>
              <p>{t("forthbanner.d.body")}</p>
            </div>
          </div>
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-cursor bg-eb6b3d"></i>
              </div>
              <h3>{t("forthbanner.e.main")}</h3>
              <p>{t("forthbanner.e.body")}</p>
            </div>
          </div>
          <div className="col-md-3 feature-content-box">
            <div className="feature-content">
              <div className="ficon ">
                <i className="flaticon-alarm bg-f78acb"></i>
              </div>

              <h3>{t("forthbanner.f.main")}</h3>
              <p>{t("forthbanner.f.body")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureContent1;
