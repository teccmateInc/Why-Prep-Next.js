import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const StoreBanner = () => {
  const { t } = useTranslation("store-template");
  return (
    <div className="store-banner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 className="storeTemplate-heading">{t("firstbanner.main")}</h4>
              <p className="storeTemplate-sub">{t("firstbanner.sub")}</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-10 py-5">
              <div>
                <Slider {...settings}>
                  <div
                    style={{
                      display: "flex !important",
                      justifyContent: "center !important",
                    }}
                  >
                    <img
                      src="/images/Fresh.PNG"
                      style={{
                        display: "flex !important",
                        justifyContent: "center !important",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/Raft.PNG"
                      style={{
                        display: "flex !important",
                        justifyContent: "center !important",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/Cascade.PNG"
                      style={{
                        display: "flex !important",
                        justifyContent: "center !important",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/Spark.PNG"
                      style={{
                        display: "flex !important",
                        justifyContent: "center !important",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src="/images/creation.PNG"
                      style={{
                        display: "flex !important",
                        justifyContent: "center !important",
                      }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
