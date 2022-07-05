import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import FaqTextContent from "../Faq/FaqTextContent";

class FaqContentArea extends Component {
  render() {
    const {t}=this.props
    return (
      <div className="faq-area ptb-70">
        <div className="container ">
          <div className="row">
            <div className="col-lg-5 col-md-12 ">
              <div className="faq-content">
                <h2>{t("forthbanner.main")}</h2>
                <br></br>
                <p style={{ fontSize: 15, lineHeight: 1.35,fontFamily:"Poppins", color: "#707070" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-lg-6 col-md-12 p-0 m-0">
              <FaqTextContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("check-out")(FaqContentArea);
