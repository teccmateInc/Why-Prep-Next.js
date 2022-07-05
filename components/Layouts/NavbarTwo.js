import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import Link from "../../utils/ActiveLink";
import RouterLink from "../Common/RouterLink";

class NavbarTwo extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    const { t } = this.props;
    return (
      <React.Fragment>
        <div
          id="navbar"
          className="navbar-area navbar-style-two"
          style={{ background: "white" }}
        >
          <div className="luvion-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      style={{ width: "125px" }}
                      src="/images/prep/logo.png"
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <RouterLink t={t} />

                  <div className="others-options">
                    <Link href="/login">
                      <a className="login-btn">
                        <i className="flaticon-user"></i> {t("header.login")}
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
      //   <React.Fragment>
      //     <div id="navbar" className="navbar-area1 navbar-style-two">
      //       <div className="luvion-nav1">
      //         <div className="container">
      //           <nav className="navbar navbar-expand-md navbar-light">
      //             <Link href="/">
      //               <a className="navbar-brand">
      //                 {/* <img
      //                   style={{ width: "125px" }}
      //                   src="/images/prep/white_logo.png"
      //                   alt="logo"
      //                 /> */}
      //                 <img
      //                   style={{ width: "125px" }}
      //                   src="/images/prep/logo.png"
      //                   alt="logo"
      //                 />
      //               </a>
      //             </Link>

      //             <button
      //               onClick={this.toggleNavbar}
      //               className={classTwo}
      //               type="button"
      //               data-toggle="collapse"
      //               data-target="#navbarSupportedContent"
      //               aria-controls="navbarSupportedContent"
      //               aria-expanded="false"
      //               aria-label="Toggle navigation"
      //             >
      //               <span className="icon-bar top-bar"></span>
      //               <span className="icon-bar middle-bar"></span>
      //               <span className="icon-bar bottom-bar"></span>
      //             </button>

      //             <div className={classOne} id="navbarSupportedContent">
      //               <RouterLink t={t} />

      //               <div className="others-options">
      //                 <Link href="/login">
      //                   <a className="login-btn">
      //                     <i className="flaticon-user"></i> {t("header.login")}
      //                   </a>
      //                 </Link>
      //               </div>
      //             </div>
      //           </nav>
      //         </div>
      //       </div>
      //     </div>
      //   </React.Fragment>
    );
  }
}

export default withTranslation("common")(NavbarTwo);
