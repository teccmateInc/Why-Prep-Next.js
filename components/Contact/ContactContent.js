import React, { Component } from 'react';
import ContactInfoContent from './ContactInfoContent';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <div className="contact-area ptb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2 className='contact-heading'>{t('b.main')}</h2>
                            <div className="bar"></div>
                            <p>.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <ContactInfoContent t={t} />
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm t={t} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default (ContactContent);