import React from "react";
import { useTranslation } from "react-i18next";

const SpendLess = () => {
  const {t}=useTranslation("messages")
  return (
    <div className="messages-spend-less">
      <div className="container col-xs-8 offset-xs-2 offset-md-2 col-md-6 offset-lg-1 col-xl-5">

        <div className="darkblock">

          <div className="title">{t("spendless.header")}</div> 
          <div className="subtitle">{t("spendless.sub")}</div>
          <ul>
            <li>{t("spendless.bullets.b1")}</li>
            <li>{t("spendless.bullets.b2")}</li>
            <li>{t("spendless.bullets.b3")}</li>
            <li>{t("spendless.bullets.b4")}</li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default SpendLess;
