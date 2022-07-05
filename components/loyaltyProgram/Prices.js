import React from "react";
import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t } = useTranslation("loyalty");
  return (
    <div className="price">
      <div className="container">
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-md-5 text-center">
            <h5>
              <strong>{t("sixthbanner.main")}</strong>
            </h5>
            <p>{t("sixthbanner.sub")}</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-md-4 ">
            <div className="card price-card">
              <div className="card-body pb-5 text-center p-0">
                <div
                  className="py-5 mb-5"
                  style={{
                    width: "100%",
                    background: "#F8F8F8 0% 0% no-repeat padding-box",
                    boxShadow: "5px 5px 20px #9F9F9F29",
                  }}
                >
                  <h5>
                    <strong>0-500</strong>
                  </h5>
                  <h5>
                    <strong>{t("sixthbanner.card.main")}</strong>
                  </h5>
                </div>
                <div className="pb-5">
                  <h3 style={{color:"#707070"}}>
                    <strong>฿ 1,500</strong>
                    <sub>{t("sixthbanner.card.duration")}</sub>
                  </h3>
                </div>
                <button
                  style={{
                    width:"90%",
                    padding:"0.5vmax 0", 
                  background:
                    "transparent linear-gradient(251deg, #EE0979 0%, #FF6A00 100%) 0% 0% no-repeat padding-box",
                  borderRadius: "10px",
                  color:"white",
                  border :"none" 
                }}
                >
                  {t("sixthbanner.card.botton")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card price-card">
              <div className="card-body pb-5 text-center p-0">
                <div
                  className="py-5 mb-5"
                  style={{
                    width: "100%",
                    background: "#F8F8F8 0% 0% no-repeat padding-box",
                    boxShadow: "5px 5px 20px #9F9F9F29",
                  }}
                >
                  <h5>
                    <strong>500-1500</strong>
                  </h5>
                  <h5>
                    <strong>{t("sixthbanner.card.main")}</strong>
                  </h5>
                </div>
                <div className="pb-5">
                  <h3 style={{color:"#707070"}}>
                    <strong>฿ 2,500</strong>
                    <sub>{t("sixthbanner.card.duration")}</sub>
                  </h3>
                </div>
                <button
                  style={{
                    width:"90%",
                    padding:"0.5vmax 0", 
                  background:
                    "transparent linear-gradient(251deg, #EE0979 0%, #FF6A00 100%) 0% 0% no-repeat padding-box",
                  borderRadius: "10px",
                  color:"white",
                  border :"none"  
                }}
                >
                  {t("sixthbanner.card.botton")}
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card price-card ">
              <div className="card-body pb-5 text-center p-0">
                <div
                  className="py-5 mb-5"
                  style={{
                    width: "100%",
                    background: "#F8F8F8 0% 0% no-repeat padding-box",
                    boxShadow: "5px 5px 20px #9F9F9F29",
                  }}
                >
                  <h5>
                    <strong>1500-10000</strong>
                  </h5>
                  <h5>
                    <strong>{t("sixthbanner.card.main")}</strong>
                  </h5>
                </div>
                <div className="pb-5">
                  <h3 style={{color:"#707070"}}>
                    <strong>฿ 5,500</strong>
                    <sub>{t("sixthbanner.card.duration")}</sub>
                  </h3>
                </div>
                <button
                  style={{
                      width:"90%",
                      padding:"0.5vmax 0", 
                    background:
                      "transparent linear-gradient(251deg, #EE0979 0%, #FF6A00 100%) 0% 0% no-repeat padding-box",
                    borderRadius: "10px",
                    color:"white",
                    border :"none"  
                  }}
                  
                >
                  {t("sixthbanner.card.botton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
