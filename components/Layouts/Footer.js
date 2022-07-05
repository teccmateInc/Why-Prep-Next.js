import React, { Component } from "react";
import Link from "next/link";
import { withTranslation } from "react-i18next";
import i18n from "../../helpers/i18n";
import { withRouter } from "next/router";

class Footer extends Component {
  onClickChangeLanguage = (lang) => {
    const router = this.props.router;
    document.cookie = `lang=${lang}`;
    i18n.changeLanguage(lang);
    window.location = router.pathname;
  };

  render() {
    let currentYear = new Date().getFullYear();
    const { t } = this.props;
    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        style={{ width: "125px" }}
                        src="/images/prep/white_logo.png"
                        alt="logo"
                      />
                    </a>
                  </Link>
                  <p>{t("footer.sologan")}</p>
                </div>

                <ul className="social-links">
                  <li className="text-light"> Contact Us:</li>
                  <br></br>

                  <li style={{ marginTop: 20, marginRight: 25 }}>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li> */}
                  <li style={{ marginRight: 25 }}>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
                <br></br>
                {/* <br></br> */}
                <div>
                  <h6 className="text-light" style={{ fontWeight: 380 }}>
                    Preline Registers :
                  </h6>
                  {/* !---------------insert image-------! */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>{t("footer.product.main")}</h3>

                <ul className="list">
                  <li>
                    <Link href="/online-store">
                      <a>{t("footer.product.online-store")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/checkout">
                      <a>{t("footer.product.checkout")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/social-media">
                      <a>{t("footer.product.social-media")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{t("footer.product.template")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/domain">
                      <a>{t("footer.product.domain")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{t("footer.product.market")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{t("footer.product.loyal")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{t("footer.product.message")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>{t("footer.product.photo")}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>{t("footer.support.main")}</h3>

                <ul className="list">
                  <li>
                    <Link href="/privacy-policy">
                      <a>{t("footer.support.policy")}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-condition">
                      <a>{t("footer.support.term")}</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/refund">
                                            <a>{t('footer.support.refund')}</a>
                                        </Link>
                                    </li> */}
                  <li>
                    <Link href="/contact">
                      <a>{t("footer.support.contact")}</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span className="mr-1">{t("footer.address.main")}:</span>
                    {t("footer.address.location.body")}
                  </li>
                  <li>
                    <span className="mr-1">
                      {t("footer.address.email.main")}:
                    </span>
                    prepofficial@prepth.com
                  </li>
                  <li>
                    <span className="mr-1">
                      {t("footer.address.phone.main")}:
                    </span>
                    095-463-9422
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="footer-container-button">
              <button
                className="footer-button"
                type="button"
                onClick={this.onClickChangeLanguage.bind(this, "en")}
              >
                English
              </button>
              /
              <button
                className="footer-button"
                type="button"
                onClick={this.onClickChangeLanguage.bind(this, "th")}
              >
                {" "}
                ไทย
              </button>
            </div>
            <p className="">© {currentYear} Prep - All rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation("common")(withRouter(Footer));
