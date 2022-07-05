import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const {t}=useTranslation("loyalty")
  return (
    <div className="pricing-section">
      <div className="container">
        <div class="row justify-content-center align-items-center">
          <div class="col offset-md-6 col-md-6 my-5">
            <h2 style={{color:"white"}}>
                <strong>
              {t("fifthbanner.main.a")} <br />
              {t("fifthbanner.main.b")}
              </strong>
            </h2>
            <div className="card pricing-table">
              <div className="card-body">
                <div class="row ">
                  <div className=" col-4 col-md-4 text-center pt-5">
                    <h6 className="py-3">
                        <strong>
                        {t("fifthbanner.table.row1.a")}
                      <br /> {t("fifthbanner.table.row1.b")}
                      </strong>
                    </h6>
                    <h6 className="py-1">
                    <strong>  {t("fifthbanner.table.row2.a")} <br /> {t("fifthbanner.table.row2.b")}</strong>
                    </h6>
                    <h6 className="py-2" style={{color:"#ee0979"}}>
                     <strong> {t("fifthbanner.table.row3.a")} <br /> {t("fifthbanner.table.row3.b")} <br /> {t("fifthbanner.table.row3.c")}</strong>
                    </h6>
                  </div>
                  <div className="col ">
                    <div
                      className="card"
                      style={{ border: "none", borderRadius: "30px" }}
                    >
                      <div
                        className="card-body"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                            
                        }}
                      >
                        <p className="table-heading"><strong>{t("fifthbanner.table.main.a")}</strong></p>
                        <p className="table-heading" style={{color:"black"}}><strong>{t("fifthbanner.table.main.b")}</strong></p>{" "}
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-5 col-md-5 text-center ">
                    <h6 className="py-3">
                    <strong> 8,800 <sub>B</sub></strong>
                    </h6>
                    <h6 className="py-3">
                     <strong>-</strong>
                    </h6>
                    <h6 className="py-3">
                    <strong>-</strong>
                    </h6>
                  </div>
                  <div className="col text-center" style={{borderLeft:"1px solid"}}>
                    <h6 className="py-3" style={{color:"#ee765e"}}>
                    <strong>9,500 <sub>B</sub></strong>
                    </h6>
                    <h6 className="py-3" style={{color:"#ee765e"}}>
                    <strong>from 1,500 <sub>B</sub></strong>
                    </h6>
                    <h6 className="py-3" style={{color:"#ee765e"}}>
                      <strong>2100 <sub>B</sub></strong>
                    </h6>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
