import React, { Component } from "react";
import Link from "next/link";
import { withTranslation } from "react-i18next";

class MainBanner extends Component {
  render() {
  const {t}=this.props
    return (
      <div className="main-banner">
        <div className="d-table ">
          <div className="d-table-cell">
            <div className="container">
              <div
                className="main-banner-content text-center"
                style={{ width: "100%", margin: "0px auto" }}
              >
                <h1>
                  {t("firstbanner.main.a")}<br></br>
                  {t("firstbanner.main.b")}

                </h1>
                <p >
                {t("firstbanner.sub")}
                </p>

                <Link href="/#">
                  <a
                    className="btn btn-primary"
                    style={{ width: 200, borderRadius: 10 }}
                  >
                    {t("firstbanner.botton")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("online-store")(MainBanner);
