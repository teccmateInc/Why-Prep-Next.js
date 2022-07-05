import React, { Component } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import ReactWOW from "react-wow";
import { withTranslation } from "react-i18next";

class MainBanner extends Component {

  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
  const {t}=this.props
    return (
      <React.Fragment>
        <div
          style={{
            background: "#F8F9FE ",
            paddingBottom: 150,
          }}
        >
          <div className="container" style={{ marginTop: 10 }}>
            <div className="row ">
              <div className="col-lg-1 col-md-0 "></div>
              <div className="col-lg-5 col-md-12 text-left">
                <div
                  className="hero-content "
                  style={{ marginTop: 200, color: "#212529" }}
                >
                  <h1 style={{ fontSize: 50 }}>{t("firstbanner.main.a")}</h1>
                  <h1 style={{ fontSize: 50 }}>{t("firstbanner.main.b")}</h1>
                  <h1 style={{ fontSize: 50 }}>{t("firstbanner.main.c")}</h1>
                  <p style={{ font: "normal normal normal 15px/25px Poppins" }}>
                  {t("firstbanner.sub")}
                  </p>
                </div>
              </div>

              <div
                className="col-lg-6 col-md-12 p-0"
                style={{ marginTop: 100 }}
              >
                <div className="hero-image">
                  <div className="">
                    <img src="/images/banner-image/checkout-banner.PNG" /> 
                    {/* <ReactWOW delay="0.7s" animation="zoomIn">
                      <img
                        src="/images/banner-image/banner-image1.png"
                        alt="image"
                      />
                    </ReactWOW> */}

                    {/* <ReactWOW delay="1.3s" animation="fadeInLeft">
                      <img
                        src="/images/banner-image/banner-image2.png"
                        alt="image"
                      />
                    </ReactWOW> */}

                    {/* <ReactWOW delay="1s" animation="fadeInUp">
                      <img
                        src="/images/banner-image/banner-image3.png"
                        alt="image"
                      />
                    </ReactWOW> */}
                  </div>

                  <div className="main-mobile-image">
                    {/* <ReactWOW delay="0.7s" animation="fadeInUp">
                      <img
                        src="/images/banner-image/banner-main-pic.png"
                        alt="image"
                      />
                    </ReactWOW> */}
                  </div>

                  <div className="circle-image">
                    {/* <ReactWOW delay="1s" animation="fadeInUp">
                      <img src="/images/banner-image/circle1.png" alt="image" />
                    </ReactWOW> */}
                  </div>

                  {/* <div
                    onClick={(e) => {
                      e.preventDefault();
                      this.openModal();
                    }}
                    className="video-btn"
                  >
                    <i className="fas fa-play mr-2"></i>
                    {t("firstbanner.video")}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
        {/* <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        /> */}
      </React.Fragment>
    );
  }
}

export default withTranslation("check-out")(MainBanner);
