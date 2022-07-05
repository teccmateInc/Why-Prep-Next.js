import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/Common/PageBannerContent';
import ContactContent from '../components/Contact/ContactContent';
import AccountCreateArea from '../components/Common/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
import { withTranslation } from 'react-i18next';

class Contact extends Component {
    render() {
        const { t } = this.props
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent
                    pageTitle={t('a.main')}
                    pageCaption={t('a.sub')}
                    t={t}
                />
                <ContactContent t={t} />
                <AccountCreateArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default withTranslation('contact')(Contact);