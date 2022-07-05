import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class FeaturedCard extends Component {
  render() {
    const { t } = this.props
    return (
      <div className="featured-boxes-area">
        <div className="container">
          <div className="featured-boxes-inner" style={{ borderRadius: 20 }}>
            <div className="row m-0">
              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-fb7756">
                    <i className="flaticon-piggy-bank"></i>
                  </div>

                  <h3>{t("secondbanner.a.main")}</h3>
                  <p>
                    {t("secondbanner.a.sub")}
                  </p>


                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-facd60">
                    <i className="flaticon-data-encryption"></i>
                  </div>

                  <h3>{t("secondbanner.b.main")}</h3>
                  <p>
                    {t("secondbanner.b.sub")}
                  </p>


                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon color-1ac0c6">
                    <i className="flaticon-wallet"></i>
                  </div>

                  <h3>{t("secondbanner.c.main")}</h3>
                  <p>
                    {t("secondbanner.c.sub")}
                  </p>


                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-md-6 p-0">
                <div className="single-featured-box">
                  <div className="icon">
                    <i className="flaticon-shield"></i>
                  </div>

                  <h3>{t("secondbanner.d.main")}</h3>
                  <p>
                    {t("secondbanner.d.sub")}
                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("online-store")(FeaturedCard);
