import React from "react";
import { useTranslation } from "react-i18next";

const GetDirect = () => {
  const {t}=useTranslation("messages")
  return (
    <div className="messages-get-direct">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-xs-12 col-md-5 px-3">
            <div className="title">{t("getdirect.header")}</div> 
            <div className="subtitle">{t("getdirect.sub")}</div>

            <div className="messages-smiles">
              <img src="/images/messages-smiles.png" alt="" />
            </div>
            
          </div>

          <div className="col-xs-12 col-md-6">
            <img src="/images/messages-get-direct.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDirect;
