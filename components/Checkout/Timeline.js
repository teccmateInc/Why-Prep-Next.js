import React, { Component } from "react";
import Link from "next/link";
import { withTranslation } from "react-i18next";

class OurFeaturesStyleTwo extends Component {
  render() {
    const {t}=this.props
    return (
      <section className="features-section ptb-70 bg-f7fafd">
        <div className="container" style={{ background: "#F8F9FE " }}>
          <div className="section-title">
            <h2
              style={{
                color: "#707070",
                fontWeight: 800,
                fontFamily: "adobe-clean, sans-serif",
                letterSpacing: 0,
                textAlign: "center",
              }}
            >
              {t("thirdbanner.main")}
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center" style={{ borderRadius: 5 }}>
            <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12">
              <div className="single-features-box1">
                <div className="icon">
                  <i
                    className="flaticon-settings"
                    style={{
                      width: "100px !important",
                      margin: "0px auto",
                      color: "#F34899",
                    }}
                  ></i>
                </div>

                <div>
                  <h3>
                    <Link href="/features-two">
                      <a>
                      {t("thirdbanner.a.main1")}<br></br> {t("thirdbanner.a.main2")}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p
                  style={{
                    height: 120,
                    fontSize: 14,
                    letterSpacing: 0,
                    fontWeight: 200,
                    textAlign: "center",
                    opacity: 1,
                    fontFamily:"Poppins",
                  }}
                >
                  {t("thirdbanner.a.body")}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12">
              <div className="single-features-box1">
                <div className="icon">
                  <i
                    className="flaticon-settings"
                    style={{
                      width: "100px !important",
                      margin: "0px auto",
                      color: "#F34899",
                    }}
                  ></i>
                </div>

                <div>
                  <h3>
                    <Link href="/features-two">
                      <a>
                      {t("thirdbanner.b.main1")} <br></br> {t("thirdbanner.b.main2")}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p
                  style={{
                    height: 120,
                    letterSpacing: 0,
                    fontWeight: 200,
                    textAlign: "center",
                    opacity: 1,
                    fontFamily:"Poppins",
                  }}
                >
                  {t("thirdbanner.b.body")}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 col-md-12  col-xs-12">
              <div className="single-features-box1">
                <div className="icon">
                  <i
                    className="flaticon-settings"
                    style={{
                      width: "100px !important",
                      margin: "0px auto",
                      color: "#F34899",
                    }}
                  ></i>
                </div>

                <div>
                  <h3>
                    <Link href="/features-two">
                      <a>
                      {t("thirdbanner.c.main1")} <br></br> {t("thirdbanner.c.main2")}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p
                  style={{
                    height: 120,
                    letterSpacing: 0,
                    fontWeight: 200,
                    textAlign: "center",
                    fontFamily:"Poppins",
                    opacity: 1,
                  }}
                >
                  {t("thirdbanner.c.body")}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2 col-sm-2 col-md-2 col-xs-2"></div> */}

          <div className="row justify-content-center">
            {/* <div
              className="col-lg-2 col-sm-2. col-md-2 col-xs-2"
              style={{ marginLeft: "5%" }}
            ></div> */}
            <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12">
              <div className="single-features-box1">
                <div className="icon">
                  <i
                    className="flaticon-settings"
                    style={{
                      width: "100px !important",
                      margin: "0px auto",
                      color: "#F34899",
                    }}
                  ></i>
                </div>

                <div>
                  <h3>
                    <Link href="/features-two">
                      <a>
                      {t("thirdbanner.d.main1")} <br></br> {t("thirdbanner.d.main2")}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p
                  style={{
                    height: 120,
                    letterSpacing: 0,
                    fontWeight: 200,
                    fontFamily:"Poppins",
                    textAlign: "center",
                    opacity: 1,
                  }}
                >
                  {t("thirdbanner.d.body")}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12">
              <div className="single-features-box1">
                <div className="icon">
                  <i
                    className="flaticon-settings"
                    style={{
                      width: "100px !important",
                      margin: "0px auto",
                      color: "#F34899",
                    }}
                  ></i>
                </div>

                <div>
                  <h3>
                    <Link href="/features-two">
                      <a>
                      {t("thirdbanner.e.main1")}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p
                  style={{
                    height: 140,
                    letterSpacing: 0,
                    fontWeight: 200,
                    fontFamily:"Poppins",
                    textAlign: "center",
                    opacity: 1,
                  }}
                >
                  {t("thirdbanner.e.body")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="container-fluid"
          style={{ maxWidth: 1000, margin: "0px auto" }}
          >
          <div className="row align-items-center">
          <div className="col-lg-4 col-md-6">
          <div className="features-box">
          <div className="row ">
          <div className="row">
                    <div className="icon">
                      <i
                        className="flaticon-settings"
                        style={{
                          width: "100px !important",
                          margin: "0px auto",
                        }}
                      ></i>
                    </div>
                  </div>
                </div>

                <div className="row" style={{ width: 200 }}>
                  <h3>
                    <Link href="/features-two">
                      <a>Perfect store for every products</a>
                    </Link>
                  </h3>
                </div>

                <div className="row">
                  <p>
                    Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box">
                <div className="row">
                  <div className="row">
                    <div className="icon">
                      <i
                        className="flaticon-settings"
                        style={{
                          width: "100px !important",
                          margin: "0px auto",
                        }}
                      ></i>
                    </div>
                  </div>

                  <div className="row">
                    <h3>
                      <Link href="/features-two">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                  </div>

                  <div className="row">
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="features-box">
                <div className="row">
                  <div className="row">
                    <div className="icon">
                      <i
                        className="flaticon-settings"
                        style={{
                          width: "100px !important",
                          margin: "0px auto",
                        }}
                      ></i>
                    </div>
                  </div>

                  <div className="row">
                    <h3>
                      <Link href="/features-two">
                        <a>Incredible infrastructure</a>
                      </Link>
                    </h3>
                  </div>

                  <div className="row">
                    <p>
                      Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                      incididunt ut labore dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-2"></div>
              <div className="col-lg-4 col-md-6">
                <div className="features-box">
                  <div className="row">
                    <div className="row">
                      <div className="icon">
                        <i
                          className="flaticon-settings"
                          style={{
                            width: "100px !important",
                            margin: "0px auto",
                          }}
                        ></i>
                      </div>
                    </div>

                    <div className="row">
                      <h3>
                        <Link href="/features-two">
                          <a>Incredible infrastructure</a>
                        </Link>
                      </h3>
                    </div>

                    <div className="row">
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="features-box">
                  <div className="row">
                    <div className="row">
                      <div className="icon">
                        <i
                          className="flaticon-settings"
                          style={{
                            width: "100px !important",
                            margin: "0px auto",
                          }}
                        ></i>
                      </div>
                    </div>

                    <div className="row">
                      <h3>
                        <Link href="/features-two">
                          <a>Incredible infrastructure</a>
                        </Link>
                      </h3>
                    </div>

                    <div className="row">
                      <p>
                        Lorem ipsum dolor amet, adipiscing, sed do eiusmod
                        tempor incididunt ut labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default withTranslation("check-out")(OurFeaturesStyleTwo);
