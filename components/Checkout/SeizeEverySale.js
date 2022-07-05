import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class ServicesCard extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        {/* Right Image Style */}
        <div className="services-area ptb-70">
          <div className="container-fluid p-0">
            <div className="overview-box row">
              <div className="overview-image col-5">
                <div className="image">
                   <img src="/images/Sale.PNG" alt="image" />
                  {/* <div className="circle-img">
                    <img src="/images/circle.png" alt="image" />
                  </div> */}
                </div>
              </div>
              <div className="overview-content col-7">
                <div className="content left-content">
                  <h2
                    style={{ color: "#EE765E", fontSize: 47, fontWeight: 800 }}
                  >
                    {t("secondbanner.main")}
                  </h2>

                  <br></br>
                  <p
                    style={{
                      font: "normal normal normal 15px/25px Poppins",
                      color: "#707070",
                      letterSpacing: 0,
                      textAlign: "left",
                    }}
                  >
                    {t("secondbanner.sub.a")} 
                    {/* <br></br> */}
                    {t("secondbanner.sub.b")}
                  </p>

                  <ul className="services-list" style={{ borderRadius: 5 }}>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.a")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.b")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.c")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.d")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.e")}
                      </span>
                    </li>
                    <li>
                      <span>
                        <i
                          className="flaticon-check-mark"
                          style={{ color: "#EE765E" }}
                        ></i>
                        {t("secondbanner.f")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation("check-out")(ServicesCard);
