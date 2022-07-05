import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ThreeMedia extends Component {
    render() {
        const { t } = this.props
        return (
            < div className="services-area ptb-70 bg-f7fafd" >
                <div className="container">
                    <div className="section-title">
                        <h3>{t("thirdbanner.main")}</h3>
                        <div className="bar"></div>
                    </div>

                    <div className="row justify-content-center bd-highlight">
                        <div className="col-lg-4 col-12 text-center">
                            <img style={{ height: "70px", weight: "50px" }} src='/images/instagram.PNG' />
                            <h5>{t("thirdbanner.a.main")}</h5>
                            <p>{t("thirdbanner.a.sub")}</p>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <img style={{ height: "70px", weight: "50px" }} src='/images/facebook.PNG' />
                            <h5>{t("thirdbanner.b.main")}</h5>
                            <p>{t("thirdbanner.b.sub")}</p>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <img style={{ height: "70px", weight: "50px" }} src='/images/Google.PNG' />
                            <h5>{t("thirdbanner.c.main")}</h5>
                            <p>{t("thirdbanner.c.sub")}</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withTranslation("social-media")(ThreeMedia);