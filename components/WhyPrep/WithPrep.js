import React from "react";
import { useTranslation } from "react-i18next";

const WithPrep = () => {

    const {t}=useTranslation("why")
  return (
    <div >
      <div className="withPrep-container">
        <div className="col-md-9">
          <h4 className="withPrep-heading">{t("secondbanner.main")}</h4>
          <p className="withPrep-para">
            {t("secondbanner.body")}
          </p>
        </div>
      </div>
      
        {/* <img
          src="/images/whyPrep-1.jpeg"
          style={{ width: "338px", height: "226px" }} 
        />
        <img src="/images/whyPrep-2.jpeg" style={{ width: "338px", height: "226px" }} />
        <img src="/images/whyPrep-3.jpeg" style={{ width: "338px", height: "226px" }}  />
        <img src="/images/whyPrep-4.jpeg" style={{ width: "328px", height: "226px" }}  /> */}
      {/* </div> */}
    </div>
  );
};

export default WithPrep;
