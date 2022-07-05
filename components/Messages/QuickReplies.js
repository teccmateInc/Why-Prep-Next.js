import React from "react";
import { useTranslation } from "react-i18next";

const QuickReplies = () => {
  const {t}=useTranslation("messages")
  return (
    <div className="messages-quick-replies">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-xs-12 col-md-4 px-3">
            <div className="title">{t("quickreplies.header")}</div> 
            <div className="subtitle">
              <p>{t("quickreplies.sub.line1")}</p>
              <p>{t("quickreplies.sub.line2")}</p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <img src="/images/messages-store.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReplies;
