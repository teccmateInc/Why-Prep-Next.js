import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class FeaturesContent extends Component {
    render() {
        const { t } = this.props
        return (
            <section className="features-area ptb-70 bg-f6f4f8">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('forthbanner.main')}</h2>
                        <div className="bar"></div>
                        <p>{t('forthbanner.sub')}</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-settings"></i>
                                </div>

                                <h3>{t('forthbanner.a.main')}</h3>
                                <p>{t('forthbanner.a.body')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-f78acb">
                                    <i className="flaticon-envelope-of-white-paper"></i>
                                </div>

                                <h3>{t('forthbanner.b.main')}</h3>
                                <p>{t('forthbanner.b.body')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-cdf1d8">
                                    <i className="flaticon-menu"></i>
                                </div>

                                <h3>{t('forthbanner.c.main')}</h3>
                                <p>{t('forthbanner.c.body')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-c679e3">
                                    <i className="flaticon-info"></i>
                                </div>

                                <h3>{t('forthbanner.d.main')}</h3>
                                <p>{t('forthbanner.d.body')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-eb6b3d">
                                    <i className="flaticon-cursor"></i>
                                </div>

                                <h3>{t('forthbanner.e.main')}</h3>
                                <p>{t('forthbanner.e.body')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-alarm"></i>
                                </div>

                                <h3>{t('forthbanner.f.main')}</h3>
                                <p>{t('forthbanner.f.body')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('home')(FeaturesContent);