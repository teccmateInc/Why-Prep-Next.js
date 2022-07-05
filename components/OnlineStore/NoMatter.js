import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class ServicesCard extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        {/* Right Image Style */}

        <div className="container text-center">
          <h2 style={{ fontWeight: 800, fontSize: 30 }}>
            {t("sixthbanner.main.a")}
            <br></br>
            {t("sixthbanner.main.b")}
          </h2>
          <br></br>
          <p style={{ color: "#707070", font: "normal normal normal 15px/25px Poppins"}}>
            {t("sixthbanner.sub")}
          </p>
          <br></br>
          <button className="btn getDomain" style={{ font: "normal normal medium 14px/39px Poppins" }}>
            {t("sixthbanner.botton")}
          </button>
          <br></br>
          <br></br>
          <br></br>
          <img src="/images/ss1.png" style={{ width: "100%" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation("online-store")(ServicesCard);
