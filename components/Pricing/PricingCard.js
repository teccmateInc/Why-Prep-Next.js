import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next';

class PricingCard extends Component {
    render() {
        const {t}=this.props
        return (
            <div className="pricing-area pt-70 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>{t("card1.main")}</h3>
                                    <p>{t("card1.sub")}</p>
                                </div>

                                <div className="price">
                                    <span className="symbol">฿</span> 0 <span>{t("card1.duration")}</span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                    {t("card1.a")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.b")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        {t("card1.c")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.d")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.e")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.f")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.g")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.h")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card1.i")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                    <li>
                                    {t("card1.j")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                    <li>
                                    {t("card1.k")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                    <li>
                                    {t("card1.l")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                    <li>
                                    {t("card1.m")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                    <li>
                                    {t("card1.n")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="/pricing#">
                                        <a className="btn btn-primary">{t("card1.botton")}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-box active">
                                <div className="pricing-header">
                                    <h3>{t("card2.main")}</h3>
                                    <p>{t("card2.sub")}</p>
                                </div>

                                <div className="price">
                                    <span className="symbol">฿</span> 1,500 <span>{t("card2.duration")}</span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                    {t("card2.a")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.b")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.c")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.d")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.e")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.f")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.g")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                        {t("card2.h")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.i")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.j")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.k")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.l")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.m")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card2.n")}
                                        <i className="fa fa-ban"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="/pricing#">
                                        <a className="btn btn-primary">{t("card2.botton")}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>{t("card3.main")}</h3>
                                    <p>{t("card3.sub")}</p>
                                </div>

                                <div className="price">
                                {t("card3.duration")}
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                    {t("card3.a")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.b")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.c")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.d")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.e")}
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.f")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.g")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.h")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.i")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.j")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.k")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.l")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.m")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                    {t("card3.n")}
                                        <i className="fa fa-check"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="/pricing#">
                                        <a className="btn btn-primary">{t("card3.botton")}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation("pricing")(PricingCard);