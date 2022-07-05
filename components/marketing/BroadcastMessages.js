
import React, { Component } from "react";
import { withTranslation } from 'react-i18next'

class BroadcastMessages extends Component {

  render() {
    const { t } = this.props

    return (
      <React.Fragment>

        <div className="container-fluid" style={{backgroundColor: "white"}}>
          <div className="row justify-content-md-center mx-3 py-5">
            
            <div
              className="col-xs-5 col-md-8 my-5 text-center"
            >

              <div className="mb-5">
                <img src="/images/marketing-broadcast.jpg" alt="" />
              </div>

              <div className="mt-5">
                <h3 style={{ fontWeight: "bold"}}>{t('broadcastmessages.header')}</h3>
                <p>{t('broadcastmessages.sub')}</p>
              </div>
            </div>


          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default withTranslation('marketing')(BroadcastMessages);
