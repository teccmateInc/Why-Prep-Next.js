import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'
import { withTranslation } from 'react-i18next';

class EasyPaymentBorrow extends Component {
    render() {
        const { t } = this.props
        return (
            <section className="invoicing-area ptb-70">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-content">
                                <h2>{t('fifthbanner.main')}</h2>
                                <div className="bar"></div>
                                <p>{t('fifthbanner.sub')}</p>

                                <Link href="/sign-up">
                                    <a className="btn btn-primary">{t('fifthbanner.button')}</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-image">
                                <div className="main-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src="/images/invoicing/invoicing-shape1.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1s' animation='fadeInLeft'>
                                        <img src="/images/invoicing/invoicing-shape2.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1.3s' animation='fadeInLeft'>
                                        <img src="/images/invoicing/invoicing-shape3.png" alt="image" />
                                    </ReactWOW>

                                    <ReactWOW delay='1s' animation='fadeInRight'>
                                        <img src="/images/invoicing/invoicing-shape4.png" alt="image" />
                                    </ReactWOW>
                                </div>

                                <div className="main-mobile-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src="/images/invoicing/invoicing-main-pic.png" alt="image" />
                                    </ReactWOW>
                                </div>

                                <div className="circle-image">
                                    <img src="/images/invoicing/invoicing-circle1.png" alt="image" />
                                    <img src="/images/invoicing/invoicing-circle2.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation('home')(EasyPaymentBorrow);