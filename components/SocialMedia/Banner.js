import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Banner = () => {
  const { t } = useTranslation("social-media");
  return (
    <div className="social-main-banner">
      <div className="container">
        <div className="row justify-content-md-end justify-content-xs-center align-items-center">
          <div className="col-md-5">
            <div style={{ padding: "2vmax 0" }}>
              <h2 className="social-main-heading">
                <strong>{t("firstbanner.main.a")}</strong>
              </h2>
              <h2 className="social-main-heading">
                <strong>{t("firstbanner.main.b")}</strong>
              </h2>
              <div className="offset-md-4 col-md-8 d-flex justify-content-md-end">
              <p className="social-main-content">{t("firstbanner.body.a")}</p>
            </div>
            </div>
            <Link href="/#">
              <a
                className="btn btn-primary"
                style={{ width: 200, borderRadius: 10 }}
              >
                {t("firstbanner.link")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
