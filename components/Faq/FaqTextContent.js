import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { withTranslation } from "react-i18next";

class FaqTextContent extends Component {
  render() {
    const {t}=this.props
    return (
      <div className="faq-accordion">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
                {t("forthbanner.a.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
              {t("forthbanner.b.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
              {t("forthbanner.c.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
              {t("forthbanner.d.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
              {t("forthbanner.e.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
              {t("forthbanner.f.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton style={{fontFamily:"poppins"}}>
              {t("forthbanner.g.main")}
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p className="accordion-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default withTranslation("check-out")(FaqTextContent);
