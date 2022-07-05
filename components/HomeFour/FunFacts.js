import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from 'react-i18next';

class FunFacts extends Component {
    render() {
        const { t } = this.props
        return (
            <section className="funfacts-area ptb-70 pt-0">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('sixthbanner.main')}</h2>
                        <div className="bar"></div>
                        <p>{t('sixthbanner.sub')}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>180</span>K</h3>
                                <p>{t('sixthbanner.a')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>20</span>K</h3>
                                <p>{t('sixthbanner.b')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>500</span>+</h3>
                                <p>{t('sixthbanner.c')}</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-3 col-md-3 col-6">
                            <div className="funfact">
                                <h3><span>70</span>+</h3>
                                <p>{t('sixthbanner.d')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta-box">
                        <h3>{t('sixthbanner.container.main')}?</h3>
                        <p>{t('sixthbanner.container.sub')}</p>

                        <Link href="/contact">
                            <a className="btn btn-primary">{t('sixthbanner.container.button')}</a>
                        </Link>
                    </div>

                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('home')(FunFacts);