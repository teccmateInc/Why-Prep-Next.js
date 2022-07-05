import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ServicesCard extends Component {
    render() {
        const {t}=this.props
        return (
            <React.Fragment>
                {/* Right Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>{t("forthbanner.section1.main")}</h2>
                                    <div className="bar"></div>
                                    <p>{t("forthbanner.section1.sub")}</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.a")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.b")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.c")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.d")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.e")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section1.f")}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/feature1.png" alt="image" />
                                    <div className="circle-img">
                                        <img src="/images/circle.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Image Style */}
                <div className="services-area ptb-70 bg-f7fafd">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/feature2.png" alt="image" />
                                    <div className="circle-img">
                                        <img src="/images/circle.png" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <h2>{t("forthbanner.section2.main")}</h2>
                                    <div className="bar"></div>
                                    <p>{t("forthbanner.section2.sub")}</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.a")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.b")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.c")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.d")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.e")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section2.f")}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>{t("forthbanner.section3.main")}</h2>
                                    <div className="bar"></div>
                                    <p>{t("forthbanner.section3.sub")}</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.a")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.b")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.c")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.d")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.e")}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t("forthbanner.section3.f")}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/feature3.png" alt="image" />
                                    <div className="circle-img">
                                        <img src="/images/circle.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation("social-media")(ServicesCard);