import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link"

const GetStarted = () => {
  const {t}=useTranslation("messages")
  return (
    // <div className="messages-get-started">
    //   <div className="container">
    //     <div className="d-flex justify-content-between align-items-center">
    //       <div>
    //         <div className="title">{t("getstarted.title")}</div> 
    //         <div className="subtitle">{t("getstarted.sub")}</div>
    //       </div>

    //       <div>
    //         <div className="get-started-button">{t("getstarted.button")}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="account-create-area">
        <div className="container account-create-content">
          <div className="row align-items-center">
            {/* <div className="col-1"></div> */}
            <div className="col-lg-7 text-left">
              <h2 style={{ fontSize: 30 }}>{t("getstarted.title")}</h2>
              <p style={{ fontSize: 15 }}>{t("getstarted.sub")}</p>
            </div>

            <div className="col-lg-5 text-center">
              <div className="create-account">
                <Link href="/contact">
                  <a
                    className="trial-btn text-center"
                    style={{
                      width: 200,
                      height: 40,
                      padding: "1vmax 3vmax",
                    //   fontSize: 11,
                    }}
                  >
                    {t("getstarted.button")}
                  </a>
                </Link>
              </div>
            </div>
            {/* <div className="col-1"></div> */}
          </div>
        </div>
      </div>
  );
};

export default GetStarted;
