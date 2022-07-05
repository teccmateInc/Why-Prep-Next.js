import React, { Component } from 'react';

class ContactInfoContent extends Component {
    render() {
        const { t } = this.props
        return (
            <div className="contact-info">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <span>{t('c.a.main')}</span>
                        {t('c.a.sub')}
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <span>{t('c.b.main')}</span>
                        {t('c.b.sub')}
                    </li>

                    <li>
                        <div className="icon">
                            <i className="fas fa-phone-volume"></i>
                        </div>
                        <span>{t('c.c.main')}</span>
                        {t('c.c.sub')}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ContactInfoContent;