import React, { Component } from "react";
import { withTranslation } from 'react-i18next'
import ReactWOW from "react-wow";

class EmailCampaigns extends Component {

  render() {
    const { t } = this.props

    return (
      <React.Fragment>
        <div
          style={{
            background: "#212529",
            paddingBottom: 150,
          }}
        >
          <div className="container" style={{ marginTop: 10 }}>
            <div className="row d-flex justify-content-center">
                <div
                  className="col-xs-10 col-lg-8 text-center px-5"
                >
                  <h1 style={{ marginTop: 200, marginBottom: 30, color: "white", fontWeight: "bold", lineHeight: 2 }}>{t('emailcampaigns.header')}</h1>
                  <p style={{ color: "#9F9F9F", fontSize: "1.2rem", fontWeight: "bold", marginBottom: 70, lineHeight: 2}}>{t('emailcampaigns.sub')}</p>
                </div>
            </div>

            <div className="row mx-3">

              <div  className="hero-image">
              <ReactWOW delay="1.3s" animation="fadeInUp">
                        <img
                          src="/images/marketing-message.jpg"
                          alt="image"
                        />
                      </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// export default MainBanner;
export default withTranslation('marketing')(EmailCampaigns);
