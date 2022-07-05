import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Contact =()=>  {
  const {t}=useTranslation("loyalty")
    return (
      <div className="account-create-area">
        <div className="container account-create-content">
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-lg-5 text-left">
              <h2 style={{ fontSize: 30 }}>{t("seventhbanner.main")}</h2>
              <p style={{ fontSize: 15 }}>{t("seventhbanner.sub")}</p>
            </div>

            <div className="col-lg-3 text-center">
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
                    {t("seventhbanner.botton")}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    );
  }


export default Contact;
