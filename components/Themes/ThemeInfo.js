import React from "react";
import { useRouter } from "next/router";

const ThemeInfo = ({ onBack }) => {
  const router = useRouter();
  return (
    <div>
      <div style={{ marginTop: "12vh", padding: "5vmax 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 d-flex align-items-center py-4">
              <i
                className="fa fa-chevron-left back-to-browse-btn"
                onClick={onBack}
              />
              <p className="back-to-browse">Back to Browse</p>
            </div>
            <div className="col-md-11">
              <div className="card px-md-5 py-0 theme-card">
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-md-7">
                      <p className="scroll-down">
                        Scroll down to preview theme
                      </p>
                      <img src="/images/RaftImg.jpeg" alt="Raft" height="96%" />
                    </div>
                    <div className="col-md-4">
                      <div className="themeCard-left pt-5">
                        <div>
                          <h4 className="theme-heading">Raft</h4>
                          <p className="theme-content">
                            the xx roses website template is beautiful collision
                            of whimsy and editorial— giving the opportunity to
                            show off the best of you, your work, and your
                            services in a way that captivates your ideal
                            audience at first look. the design features clean
                            lines and sharp geometric cuts in a way that allows
                            you to show off your work in a clear and concise
                            manner. whether you’re a service-based business,
                            creative entrepreneur, blogger, or something in
                            between— this design will give you the ability to
                            grow and customize along the way.
                          </p>
                        </div>
                        <div className="theme-demo">
                          <p className="view-live">View Live Demo</p>

                          <div style={{ display: "flex", padding: "1vmax 0" }}>
                            <p
                              style={{
                                fontSize: "15px/25px",
                                color: "#707070",
                              }}
                            >
                              Price :{" "}
                            </p>
                            <p className="theme-price">580 Baht</p>
                          </div>
                          <button className="btn btn-primary">
                            TRY THIS THEME
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeInfo;
