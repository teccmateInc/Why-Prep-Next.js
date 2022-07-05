import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class HowItWorks extends Component {
  render() {
    const { t } = this.props;
    return (
      <section className="how-it-works-area ptb-70">
        <div>
          <div className="section-title">
            <h2>{t("secondbanner.main")}</h2>

            <p>
              {t("secondbanner.sub.a")}
              {t("secondbanner.sub.b")}
            </p>
          </div>

          {/* <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="single-how-it-works">
                <img src="/images/how-it-works/how-it-work1.png" alt="image" />
                <h3>1. Register for free</h3>
                <p>
                  Ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-how-it-works">
                <img src="/images/how-it-works/how-it-work2.png" alt="image" />
                <h3>2. Choose an amount to send</h3>
                <p>
                  Ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-how-it-works">
                <img src="/images/how-it-works/how-it-work3.png" alt="image" />
                <h3>3. Add recipient’s bank details</h3>
                <p>
                  Ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-how-it-works">
                <img src="/images/how-it-works/how-it-work4.png" alt="image" />
                <h3>4. Verify your identity</h3>
                <p>
                  Ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel adipiscing aliqua.
                </p>
              </div>
            </div>
          </div> */}
          <div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="media-card text-center">
                      <img
                        src="/images/social-media-1.png"
                        style={{
                          zIndex: -1,
                          width: 300,
                          imageRendering: "pixelated",
                        }}
                      />
                      <div style={{width:"90%"}}>
                        <h3 style={{ fontSize: 24,padding:"1vmax 0" }}>
                          {t("secondbanner.a.main")}
                        </h3>
                        <p style={{ fontSize: 15 }}>
                          {t("secondbanner.a.sub.a")}
                          <br></br> {t("secondbanner.a.sub.b")}
                        </p>
                      </div>
                    </div>
                    <div className="media-card text-center">
                      <img
                        src="/images/Berch.png"
                        style={{
                          zIndex: -1,
                          width: 300,
                          imageRendering: "pixelated",
                        }}
                      />
                      <div style={{width:"90%"}}>
                        <h3 style={{ fontSize: 24 ,padding:"1vmax 0" }}>
                          {t("secondbanner.b.main")}
                        </h3>
                        <p style={{ fontSize: 15 }}>
                          {t("secondbanner.b.sub.a")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="media-card2 text-center">
                      <img
                        src="/images/jewellery.png"
                        style={{
                          zIndex: -1,
                          width: 300,
                          imageRendering: "pixelated",
                        }}
                      />
                      <div style={{width:"90%"}}>
                        <h3 style={{ fontSize: 24,padding:"1vmax 0" }}>
                          {t("secondbanner.c.main")}
                        </h3>
                        <p style={{ fontSize: 15 }}>
                          {t("secondbanner.c.sub.a")}
                          {/* <br></br> {t("secondbanner.a.sub.b")} */}
                        </p>
                      </div>
                    </div>
                    <div className="media-card2 text-center">
                      <img
                        src="/images/bags.png"
                        style={{
                          zIndex: -1,
                          width: 300,
                          imageRendering: "pixelated",
                        }}
                      />
                      <div style={{width:"90%"}}>
                        <h3 style={{ fontSize: 24,padding:"1vmax 0" }}>
                          {t("secondbanner.d.main")}
                        </h3>
                        <p style={{ fontSize: 15 }}>
                          {t("secondbanner.d.sub.a")}
                          {/* <br></br> {t("secondbanner.a.sub.b")} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation("social-media")(HowItWorks);
