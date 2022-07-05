import React, { Component } from "react";
import Link from "next/link";
import { withTranslation } from "react-i18next";

class PricingCard extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="pricing-area pt-70 pb-50">
        <div className="container">
          <div className="text-center pb-5">
            <h3 style={{ fontWeight: 800, fontSize: 30 }}>
              {t("seventhbanner.main1")}{" "}
              <span style={{ color: "#EE765E" }}>
                {t("seventhbanner.main2")}
              </span>
            </h3>
            <p
              style={{
                color: "#9F9F9F",
                font: "normal normal normal 15px/23px Poppins",
              }}
            >
              {t("seventhbanner.sub")}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box">
                <div style={{ paddingLeft: 50, paddingTop: 30 }}>
                  <h2 style={{ fontWeight: 800, fontSize: 30 }}>
                    {t("seventhbanner.section1.main")}
                  </h2>
                </div>

                <div
                  style={{ paddingLeft: 50, paddingBottom: 20, paddingTop: 18 }}
                >
                  <span
                    className="symbol"
                    style={{ fontSize: 34, color: "#707070" }}
                  >
                    <b>฿ 1500 </b>
                  </span>{" "}
                  <span style={{ color: "#9F9F9F", fontSize: 13 }}>
                    <b>{t("seventhbanner.section1.duration")} </b>
                  </span>
                </div>
                <hr></hr>
                <p
                  style={{
                    // textAlign: "center",
                    padding: "0px 30px",
                    height: 70,
                    color: "#212529",
                    font: "normal normal normal 11px/20px Prompt",
                  }}
                >
                  {t("seventhbanner.section1.sub")}
                </p>

                <div className="container mt-5">
                  <div className="row ">
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <img
                          src="/images/paypal.svg"
                          style={{ width: 11.94, height: 13.25 }}
                        />
                        {/* <i
                          className="fab fa-paypal "
                          style={{ color: "lightblue" }}
                        ></i> */}
                      </div>

                      <div className="col-10">
                        <span
                          style={{
                            fontWeight: 650,
                            color: "#212529",
                            fontSize: 11,
                          }}
                        >
                          {t("seventhbanner.section1.a.main")}
                        </span>
                        <h6
                          style={{
                            fontWeight: 500,
                            color: "#9F9F9F",
                            fontSize: 11,
                          }}
                        >
                          {t("seventhbanner.section1.a.sub")}
                        </h6>

                        <span
                          style={{ paddingTop: 20, fontSize: 8, fontSize: 8 }}
                        >
                          {t("seventhbanner.section1.a.body")}
                        </span>

                        <br></br>
                        <br></br>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <i
                          className="fas fa-credit-card"
                          style={{ width: 15.15, height: 7.17 }}
                        ></i>
                      </div>
                      <div className="col-10 ">
                        <h6
                          style={{
                            color: "#212529",
                            fontSize: 11,
                            lineHeight: 1,
                          }}
                        >
                          {t("seventhbanner.section1.b.main")}
                        </h6>
                        <span style={{ fontSize: 11, color: "#9F9F9F" }}>
                          {t("seventhbanner.section1.b.sub")}
                        </span>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <i
                          className="fas fa-user"
                          style={{ width: 12, height: 15 }}
                        ></i>
                      </div>

                      <div className="col-10 ">
                        <h6 style={{ color: "#212529", fontSize: 11 }}>
                          {t("seventhbanner.section1.c.main")}
                        </h6>

                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buy-btn btn-primary">
                  <Link href="/pricing#">
                    <a className="btn btn-primary">
                      {t("seventhbanner.section1.botton")}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box ">
                <div>
                  <div style={{ paddingLeft: 50, paddingTop: 30 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 30 }}>
                      {t("seventhbanner.section2.main")}
                    </h2>
                  </div>

                  <div
                    style={{
                      paddingLeft: 50,
                      paddingBottom: 20,
                      paddingTop: 18,
                    }}
                  >
                    <span
                      className="symbol"
                      style={{ fontSize: 34, color: "#707070" }}
                    >
                      <b>฿ 4000 </b>
                    </span>{" "}
                    <span style={{ color: "#9F9F9F", fontSize: 13 }}>
                      <b>{t("seventhbanner.section2.duration")} </b>
                    </span>
                  </div>
                  <hr></hr>

                  <p
                    style={{
                      // textAlign: "center",
                      padding: "0px 30px",
                      height: 70,
                      color: "#212529",
                      font: "normal normal normal 11px/20px Prompt",
                    }}
                  >
                    {t("seventhbanner.section2.sub")}
                  </p>

                  <div className="container mt-5">
                    <div className="row ">
                      <div
                        className="row"
                        style={{ padding: "0px 15px 0px 25px  !important" }}
                      >
                        <div className="col-2 text-center">
                          <img
                            src="/images/paypal.svg"
                            style={{ width: 11.94, height: 13.25 }}
                          />
                        </div>
                        <div className="col-10 ">
                          <span
                            style={{
                              fontWeight: 650,
                              color: "#212529",
                              fontSize: 11,
                            }}
                          >
                            {t("seventhbanner.section2.a.main")}
                          </span>
                          <h6
                            style={{
                              fontWeight: 500,
                              color: "#9F9F9F",
                              fontSize: 11,
                            }}
                          >
                            {t("seventhbanner.section2.a.sub")}
                          </h6>

                          <span
                            style={{ paddingTop: 20, fontSize: 8, fontSize: 8 }}
                          >
                            {t("seventhbanner.section2.a.body")}
                          </span>

                          <br></br>
                          <br></br>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ padding: "0px 15px 0px 25px  !important" }}
                      >
                        <div className="col-2 text-center">
                          <i
                            className="fas fa-credit-card"
                            style={{ width: 15.15, height: 7.17 }}
                          ></i>
                        </div>
                        <div className="col-10 ">
                          <h6
                            style={{
                              color: "#212529",
                              fontSize: 11,
                              lineHeight: 1,
                            }}
                          >
                            {t("seventhbanner.section2.b.main")}
                          </h6>
                          <span style={{ fontSize: 11, color: "#9F9F9F" }}>
                            {t("seventhbanner.section2.b.sub")}
                          </span>
                          <br></br>
                          <br></br>
                        </div>
                      </div>
                      <div
                        className="row"
                        style={{ padding: "0px 15px 0px 25px !important" }}
                      >
                        <div className="col-2 text-center">
                          <i
                            className="fas fa-user"
                            style={{ width: 12, height: 15 }}
                          ></i>
                        </div>

                        <div className="col-10 ">
                          <h6 style={{ color: "#212529", fontSize: 11 }}>
                            {t("seventhbanner.section2.c.main")}
                          </h6>

                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="buy-btn">
                    <Link href="/pricing#">
                      <a className="btn btn-primary">
                        {t("seventhbanner.section2.botton")}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-pricing-box">
                <div className="">
                  <div style={{ paddingLeft: 50, paddingTop: 30 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 30 }}>
                      {t("seventhbanner.section3.main")}
                    </h2>
                  </div>

                  <div
                    style={{
                      paddingLeft: 50,
                      paddingBottom: 20,
                      paddingTop: 18,
                    }}
                  >
                    <span
                      className="symbol"
                      style={{ fontSize: 34, color: "#707070" }}
                    >
                      <b>฿ 8000 </b>
                    </span>{" "}
                    <span style={{ color: "#9F9F9F", fontSize: 13 }}>
                      <b>{t("seventhbanner.section3.duration")}</b>
                    </span>
                  </div>
                  <hr></hr>
                </div>

                <p
                  style={{
                    // textAlign: "center",
                    padding: "0px 30px",
                    height: 70,
                    color: "#212529",
                    font: "normal normal normal 11px/20px Prompt",
                  }}
                >
                  {t("seventhbanner.section3.sub")}
                </p>

                <div className="container mt-5">
                  <div className="row ">
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <img
                          src="/images/paypal.svg"
                          style={{ width: 11.94, height: 13.25 }}
                        />
                      </div>
                      <div className="col-10 ">
                        <span
                          style={{
                            fontWeight: 650,
                            color: "#212529",
                            fontSize: 11,
                          }}
                        >
                          {t("seventhbanner.section3.a.main")}
                        </span>
                        <h6
                          style={{
                            fontWeight: 500,
                            color: "#9F9F9F",
                            fontSize: 11,
                          }}
                        >
                          {t("seventhbanner.section3.a.sub")}
                        </h6>

                        <span
                          style={{ paddingTop: 20, fontSize: 8, fontSize: 8 }}
                        >
                          {t("seventhbanner.section3.a.body")}
                        </span>

                        <br></br>
                        <br></br>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <i
                          className="fas fa-credit-card"
                          style={{ width: 15.15, height: 7.17 }}
                        ></i>
                      </div>
                      <div className="col-10">
                        <h6
                          style={{
                            color: "#212529",
                            fontSize: 11,
                            lineHeight: 1,
                          }}
                        >
                          {t("seventhbanner.section3.b.main")}
                        </h6>
                        <span style={{ fontSize: 11, color: "#9F9F9F" }}>
                          {t("seventhbanner.section3.b.sub")}
                        </span>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ padding: "0px 15px 0px 25px !important" }}
                    >
                      <div className="col-2 text-center">
                        <i
                          className="fas fa-user"
                          style={{ width: 12, height: 15 }}
                        ></i>
                      </div>

                      <div className="col-10 ">
                        <h6 style={{ color: "#212529", fontSize: 11 }}>
                          {t("seventhbanner.section3.c.main")}
                        </h6>

                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buy-btn">
                  <Link href="/pricing#">
                    <a className="btn btn-primary">
                      {t("seventhbanner.section3.botton")}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("online-store")(PricingCard);
