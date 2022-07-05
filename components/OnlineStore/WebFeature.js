import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class OurFeaturesContent extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="web-feature ptb-70 ">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 100 }}>
            <img className="img-fuild " src="/images/feature2.png" />
            <br></br>
            <br></br>
            <br></br>
            <h3
              style={{
                fontWeight: 1000,
                textAlign: "center",
                letterSpacing: 0,
                color: "#000000",
              }}
            >
              {t("fifthbanner.main")}
            </h3>
            <br></br>
            <p style={{ color: "#58595B", letterSpacing: 0, fontWeight: 500,font: "normal normal normal 15px/25px Poppins" }}>
              {t("fifthbanner.sub.a")}
              <br></br>
              {t("fifthbanner.sub.b")}
              <center> {t("fifthbanner.center")}</center>
            </p>
          </div>
        </div>
        <hr></hr>

        <div style={{backgroundColor:"#FAF4F4",padding:"4vmax 0"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-6 col-md-5">
              <div className="single-features-box2">
                <div className="icon">
                  <img src="/images/apps.jpeg" alt="" />
                  {/* <i className="flaticon-settings"></i> */}
                </div>

                <h3>{t("fifthbanner.a.main")}</h3>
                <p>
                  {t("fifthbanner.a.body.a")}
                  {/* <br></br> */}
                  {t("fifthbanner.a.body.b")}
                  {/* <br></br> */}
                  {t("fifthbanner.a.center")}
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-sm-6 col-md-5">
              <div className="single-features-box2">
                <div className="icon ">
                <img src="/images/announcement.jpeg" alt="" />
                </div>

                <h3>{t("fifthbanner.b.main")}</h3>
                <p>
                  {t("fifthbanner.b.body.a")}
                  {/* <br></br> */}
                  {t("fifthbanner.b.body.b")}
                  {/* <br></br> */}
                  {t("fifthbanner.b.body.c")}
                  {/* <br></br> */}
                  {t("fifthbanner.b.body.d")}
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-sm-6 col-md-5">
              <div className="single-features-box2">
                <div className="icon ">
                <img src="/images/flow1.jpeg" alt="" />
                </div>

                <h3>{t("fifthbanner.c.main")}</h3>
                <p>
                  {t("fifthbanner.c.body.a")}
                  {/* <br></br> */}
                  {t("fifthbanner.c.body.b")}
                  {/* <br></br> */}
                  {t("fifthbanner.c.body.c")}
                  {/* <br></br> */}
                  {t("fifthbanner.c.center")}
                  {/* <center>{t("fifthbanner.c.center")}</center> */}
                </p>
              </div>
            </div>

            <div className="col-lg-5 col-sm-6 col-md-5">
              <div className="single-features-box2">
                <div className="icon">
                <img src="/images/notifications.jpeg" alt="" />
                </div>

                <h3>{t("fifthbanner.d.main")}</h3>
                <p>
                  {t("fifthbanner.d.body.a")}
                  {/* <br></br> */}
                  {t("fifthbanner.d.body.b")}
                  {/* <br></br> */}
                  {t("fifthbanner.d.center")}
                  {/* <center> {t("fifthbanner.d.center")}</center> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr></hr>
      </section>
    );
  }
}

export default withTranslation("online-store")(OurFeaturesContent);
