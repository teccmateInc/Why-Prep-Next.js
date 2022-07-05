import React, { Component } from "react";
// import Link from "next/link";
import { withTranslation } from 'react-i18next'
// import ReactWOW from "react-wow";

class AutomatedCampaigns extends Component {

  render() {
    const { t } = this.props

    return (
      <React.Fragment>

        {/* <div className="row" style={{height: "200px", background: "#f5fafd 0% 0% no-repeat padding-box"}}></div> */}

        <div className="marketing-automated-campaigns">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div
                  className="hero-content col-xs-7 text-center"
                  style={{ marginTop: 30, color: "#212529", maxWidth: "81%" }}
                >
                  <h2 style={{ fontWeight: "bold"}}>{t('automatedcampaigns.header')}</h2>

                  <p>{t('automatedcampaigns.sub')}</p>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation('marketing')(AutomatedCampaigns);
