import React from "react";
import { useTranslation } from "react-i18next";

const AllDomains = () => {
  const { t } = useTranslation("domain");
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-12">
            <div className="card ">
              <div
                className="card-header bg-linear"
                style={{
                  backgroundColor:
                    "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%) !important",
                }}
              ></div>
              <div
                className="card-body p-5"
                style={{ width: "100% !important" }}
              >
                <div className="row">
                  <div className="col-md-8">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <h5 className="domain-heading">
                        somethingsomething.com is available !{" "}
                      </h5>
                      <h2 className="domain-sub">
                        <strong>58,700 B</strong>
                        <sub
                          className="domain-heading"
                          style={{ color: "lightgray" }}
                        >
                          {t("secondbanner.duration")}
                        </sub>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-4 pt-4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i
                        className="fa fa-plus"
                        style={{
                          background:
                            "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                          color: "white",
                          borderRadius: "50%",
                          padding: "0.3vmax",
                          margin: "0 1vmax",
                        }}
                      />
                      <h5 className="pt-2">{t("secondbanner.botton")}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-footer px-5"
                style={{ background: "#FEFEFE !important" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <i
                    className="fa fa-check"
                    style={{
                      backgroundColor: "#7B7474",
                      color: "white",
                      padding: "0.3vmax",
                      borderRadius: "5px",
                      marginRight: "1vmax",
                    }}
                  />
                  <p className="pt-3 domain-footer">{t("secondbanner.a")}</p>
                  <p
                    className="domain-footer"
                    style={{ paddingLeft: "10px", color: "#ee0979" }}
                  >
                    {t("secondbanner.b")}
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2vmax 0",
              }}
            >
              <p className="privacy">
                Domains include Basic Privacy Protection.{" "}
                <span
                  style={{
                    border: "1px solid #7E7878",
                    borderRadius: "50%",
                    padding: "0 0.5vmax",
                  }}
                >
                  ?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "8vmax" }}>
        <div className="container py-5">
          <div className="row justify-content-center ">
            <div className="col-12 col-md-8 my-3">
              <div className="card domain-card">
                <div
                  className="card-header "
                  style={{
                    background:
                      "linear-gradient(259deg, #ADADAD 0%, #767676 100%)",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    className="pt-2"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <h6 className="leftCard-header" style={{ color: "white" }}>
                      {t("thirdbanner.leftcard.main")}
                    </h6>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.a.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.a.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.b.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.b.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.c.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.c.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.d.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.d.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.e.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.e.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.f.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.f.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-4 px-1 p-md-5 align-items-center">
                    <div className="col-7">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <h5 className="leftCard-content">testtest2.com</h5>
                        <p className="leftCard-sub">
                          {t("thirdbanner.leftcard.g.sub")}
                        </p>
                      </div>
                    </div>
                    <div className="col-5">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <i
                          className="fa fa-plus"
                          style={{
                            background:
                              "linear-gradient(90deg, #ee0979 0%, #ff6a00 100%)",
                            color: "white",
                            borderRadius: "50%",
                            padding: "0.3vmax",
                            margin: "0 1vmax",
                          }}
                        />

                        <h5 className="pt-2 add-to-cart">
                          {t("thirdbanner.leftcard.g.botton")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 my-3">
              <div className="card domain-card">
                <div
                  className="card-header "
                  style={{
                    background:
                      "linear-gradient(259deg, #ADADAD 0%, #767676 100%)",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    className="pt-2"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <h6 className="leftCard-header" style={{ color: "white" }}>
                      {t("thirdbanner.rightcard.main")}
                    </h6>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="rightCard-heading">somethingsomething.com</h6>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 className="py-2 rightCard-content">
                      {t("thirdbanner.rightcard.body.a")}
                    </h6>
                    <div style={{width:"40%",display:"flex",justifyContent:"flex-end",position:"relative"}}>
                      <h6 className="rightCard-pricing">58700 B*  <span className="rightCard-cancel">x</span></h6>
                      <i className="fa-solid fa-xmark" />
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="py-2">
                      <h6 className="rightCard-content">
                        {t("thirdbanner.rightcard.body.b")}
                        {/* <br /> */}
                        {t("thirdbanner.rightcard.body.c")}
                      </h6>
                    </div>
                    <div style={{width:"40%",display:"flex",justifyContent:"flex-end",position:"relative"}}>
                      <h6 className="rightCard-pricing ">300 B*  <span className="rightCard-cancel">x</span></h6>
                      
                    </div>
                  </div>
                </div>
                <div className="card-footer p-3">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 className="rightCard-total">Total</h6>
                    <h6 className="rightCard-total">
                      59,000
                      <span
                        style={{
                          paddingLeft: "0.3vmax",
                          fontWeight: "normal",
                          fontSize: "16px",
                        }}
                      >
                        {t("thirdbanner.rightcard.currency")}
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-3">CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDomains;
