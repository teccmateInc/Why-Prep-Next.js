import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Theme from "../Themes/Theme";

const Categories = ({ setTheme }) => {
  const { t } = useTranslation("store-template");
  return (
    <div style={{ margin: "5vmax 0", backgroundColor: "#F7FAFD" }}>
      <div className="col-12 py-4 text-center bg-dark">
        <h5 className="category-heading"> {t("secondbanner.main")}</h5>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2vmax 0",
                flexWrap: "wrap",
              }}
            >
              <button className="btn categories">{t("secondbanner.a")}</button>
              <button className="btn categories">{t("secondbanner.b")}</button>
              <button className="btn categories">{t("secondbanner.c")}</button>
              <button className="btn categories">{t("secondbanner.d")}</button>
              <button className="btn categories">{t("secondbanner.e")}</button>
            </div>
            <p className="total-themes">1-24 of 81 themes</p>
          </div>
          <div className="col-md-10">
            <div className="row justify-content-between">
              <div className="col-12 col-md-5 m-md-4">
                <div style={{cursor:"pointer"}}>
                  <img
                    src="/images/Raft.PNG"
                    style={{ width: "100%", height: "250px" }}
                    onClick={() =>
                      setTheme(<Theme onBack={() => setTheme(null)} />)
                    }
                  />
                  <div style={{ display: "flex" }}>
                    <p className="theme-name">Raft</p>
                    <p>580 B</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 m-md-4">
                <div style={{cursor:"pointer"}}>
                  <img
                    src="/images/Cascade.PNG"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        textDecoration: "underline",
                        marginRight: "2vmax",
                      }}
                    >
                      Cascade
                    </p>
                    <p>580 B</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 m-md-4">
                <div style={{cursor:"pointer"}}>
                  <img
                    src="/images/Fresh.PNG"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        textDecoration: "underline",
                        marginRight: "2vmax",
                      }}
                    >
                      Fresh
                    </p>
                    <p>580 B</p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-md-5 m-md-4">
                <div style={{cursor:"pointer"}}>
                  <img
                    src="/images/Spark.PNG"
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        textDecoration: "underline",
                        marginRight: "2vmax",
                      }}
                    >
                      Spark
                    </p>
                    <p>580 B</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <p className="px-2">1</p>
                <p className="px-2">2</p>
                <p className="px-2">3</p>
                <p className="px-2">4</p>
                <p className="px-2">{t("secondbanner.botton")}</p>
                <i class="fa fa-arrow-right pt-1"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
