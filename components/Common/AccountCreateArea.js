import React, { Component } from "react";
import Link from "next/link";
import { withTranslation } from "react-i18next";

class AccountCreateArea extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="account-create-area">
        <div className="container account-create-content">
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-lg-7 text-left">
              <h2 style={{ fontSize: 30 }}>{t("applynow.main")}</h2>
              <p style={{ fontSize: 15,fontFamily:"Poppins" }}>{t("applynow.sub")}</p>
            </div>

            <div className="col-lg-2 text-center">
              <div className="create-account">
                <Link href="/sign-up">
                  <a
                    className="btn text-center"
                    style={{
                      width: 200,
                      height: 40,
                      paddingBottom: 25,
                      fontSize: 11,
                      fontFamily:"poppins",
                      color:"white" ,
                      background: "transparent linear-gradient(270deg, #23BDB8 0%, #43E794 100%) 0% 0% no-repeat padding-box"
                    }}
                  >
                    {t("applynow.button")}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("common")(AccountCreateArea);
