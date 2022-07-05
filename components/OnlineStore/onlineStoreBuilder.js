import { useTranslation } from "react-i18next";

function OnlineStoreBuilder() {
  const { t } = useTranslation("online-store");
  return (
    <div
      className="online-store-builder text-center bg-dark"
      style={{
        // margin: "40px",
        textAlign: "center",
        position: "relative",
        marginTop: 500,
      }}
    >
      <img
        src="/images/banner-image/banner-image1.png"
        alt="image"
        className="img-fluid img-banner online-store-builder-banner"
        style={{
          boxShadow: "10px 10px 50px #86868666",
          border: "1px solid #A7A9AC",
          borderRadius: "20px"
        }}
      />
      <div className="container">
      <div className="row justify-content-center">
      <div className=" bg-dark col-12 col-md-6">
        <div className="text-center online-store-builder-content">
          <h1 >
            {t("forthbanner.main")}
          </h1>
          <br></br>
          <p
          >
            {t("forthbanner.sub.a")}
            {/* <br></br> */}
            {t("forthbanner.sub.b")}
            {/* <br></br> */}
            {t("forthbanner.sub.c")}
          </p>
          <br></br>
          <button
            className="btn btn-light mb-5"
            style={{
              borderRadius: 23,
              fontWeight: "800 !important",
              fontFamily:"poppins",
              border: "1px solid #707070",
              fontSize: "24px",
              width: 286,
            }}
          >
            {t("forthbanner.botton")}
          </button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default OnlineStoreBuilder;
