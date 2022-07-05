import React, { Component } from "react";
import { withTranslation } from 'react-i18next'

class TargetGroups extends Component {

  render() {
    const { t } = this.props

    return (
      <React.Fragment>

        <div className="container-fluid" style={{backgroundColor: "#f7fafc"}}>
          <div className="row justify-content-md-center align-items-md-center mx-3 py-5">
            <div
              className="hero-content col-xs-12 col-md-5 my-5"
            >
              <h3 style={{ fontWeight: "bold"}}>{t('targetgroups.header')}</h3>

              <p>{t('targetgroups.sub')}</p>
            </div>

            <div
              className="hero-content col-xs-12 col-md-5 md-offset-1"
            >
              <img src="/images/marketing-target-groups.jpg" alt="" />
            </div>

          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default withTranslation('marketing')(TargetGroups);
