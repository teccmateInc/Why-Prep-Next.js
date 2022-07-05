import React from "react";
import { useTranslation } from "react-i18next";

const MoreThanTemplate = () => {
  const { t } = useTranslation("store-template");
  return (
    <div style={{ padding: "5vmax 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h5 className="morethantemplate-heading">
              {t("thirdbanner.main")}
            </h5>
            <p className="morethantemplate-content">{t("thirdbanner.body")}</p>
            <button className="btn btn-primary">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreThanTemplate;
