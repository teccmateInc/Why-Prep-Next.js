import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next';

class InformationArea extends Component {
    render() {
        const { t } = this.props
        return (
            <div className="information-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>
                                <h3>{t('feature.left.main')}</h3>
                                <p>{t('feature.left.sub')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-user"></i>
                                </div>
                                <h3>{t('feature.middle.main')}</h3>
                                <p>{t('feature.middle.sub')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>
                                <h3>{t('feature.right.main')}</h3>
                                <p>{t('feature.right.sub')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="btn-box">
                                    <Link href="/index4#">
                                        <a className="app-store-btn">
                                            <i className="flaticon-apple"></i>
                                            {t('feature.app.ios.main')}
                                            <span>  {t('feature.app.ios.sub')}</span>
                                        </a>
                                    </Link>

                                    <Link href="/index4#">
                                        <a className="play-store-btn">
                                            <i className="flaticon-play-store"></i>
                                            {t('feature.app.andriod.main')}
                                            <span>{t('feature.app.andriod.sub')}</span>
                                        </a>
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

export default withTranslation('home')(InformationArea);