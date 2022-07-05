import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ServicesCard extends Component {
    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                {/* Right Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>{t('firstbanner.main')}</h2>
                                    <div className="bar"></div>
                                    <p>{t('firstbanner.sub')}</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.a')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.b')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.c')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.d')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.e')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('firstbanner.f')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/main/info-1.png" alt="image" />
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
                                    <img src="/images/main/info-2.png" alt="image" />
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <h2>{t('secondbanner.main')}</h2>
                                    <div className="bar"></div>
                                    <p>{t('secondbanner.sub')}</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.a')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.b')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.c')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.d')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.e')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('secondbanner.f')}
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
                                    <h2>{t('thirdbanner.main')}</h2>
                                    <div className="bar"></div>
                                    <p>{t('thirdbanner.sub')}</p>
                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.a')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.b')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.c')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.d')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.e')}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                {t('thirdbanner.f')}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src="/images/main/info-3.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTranslation('home')(ServicesCard);