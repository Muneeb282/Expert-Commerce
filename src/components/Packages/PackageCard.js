import React from "react";
import "./packageCard.css";
import { BiInfoCircle } from "react-icons/bi";
const PackageCard = ({ yearlyPackage, monthlyPackage }) => {
  const [selectPackageType, setSelectPackageType] = React.useState(1);
  return (
    <div>
      <div className="select_package_type">
        <div className="select_package_type_border">
          <div
            onClick={() => setSelectPackageType(1)}
            className={
              selectPackageType === 1 ? "select_package_text" : "package_text"
            }
          >
            Yearly
          </div>
          <div
            onClick={() => setSelectPackageType(2)}
            className={
              selectPackageType === 2 ? "select_package_text" : "package_text"
            }
          >
            Monthly
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {selectPackageType === 1 ? (
          <div className="package_main_container">
            {yearlyPackage.map((yerPack) => (
              <div className="package_container">
                <div className="package_name_container">
                  <span className="pack_type_text">{yerPack.packType}</span>
                  {yerPack.packRunning === "Trending" && (
                    <span className="pack_running_trending">
                      {yerPack.packRunning}
                    </span>
                  )}
                  {yerPack.packRunning === "View Offers" && (
                    <span className="pack_running_Offer">
                      <BiInfoCircle
                        fontSize={17}
                        style={{ marginRight: 3, marginBottom: 2 }}
                      />{" "}
                      {yerPack.packRunning}
                    </span>
                  )}
                  {yerPack.packRunning === "Exclusive" && (
                    <span className="pack_running_exclusive">
                      {yerPack.packRunning}
                    </span>
                  )}
                </div>
                {yerPack.packDesc && (
                  <p
                    style={{
                      display: "flex",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    {yerPack.packDesc}
                  </p>
                )}
                {yerPack.origPrice && (
                  <div className="package_price_container">
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: 600,
                        textDecoration: "line-through",
                      }}
                    >
                      ${yerPack.origPrice}
                    </span>
                    <span
                      style={{
                        backgroundColor: "rgba(0, 209, 116,0.3)",
                        padding: 5,
                        color: "#00bb67",
                        fontSize: 13,
                        fontWeight: 500,
                        borderRadius: 4,
                        marginLeft: 25,
                      }}
                    >
                      Save 20%
                    </span>
                  </div>
                )}
                {yerPack.disPrice && (
                  <div className="package_monthly_price_container">
                    <div className="package_monthly_price">
                      ${yerPack.disPrice}
                    </div>
                    {yerPack.month}
                  </div>
                )}
                {yerPack.br}
                {yerPack.customIcon && (
                  <div className="custom_icon_container">
                    {yerPack.customIcon}
                  </div>
                )}
                {yerPack.br}
                {yerPack?.features?.map((feat) => (
                  <div className="package_features_container">
                    <div style={{ marginRight: 5 }}>{feat.icon}</div>
                    <p>{feat.feaText}</p>
                  </div>
                ))}
                {yerPack.br}
                <a href="/#contact" className="package_btn">
                  {yerPack.btn}
                </a>
                <p style={{ display: "flex", textAlign: "start" }}>
                  {yerPack.list}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="package_main_container">
            {monthlyPackage.map((monPack) => (
              <div className="package_container">
                <div className="package_name_container">
                  <span className="pack_type_text">{monPack.packType}</span>
                  {monPack.packRunning === "Trending" && (
                    <span className="pack_running_trending">
                      {monPack.packRunning}
                    </span>
                  )}
                  {monPack.packRunning === "View Offers" && (
                    <span className="pack_running_Offer">
                      <BiInfoCircle
                        fontSize={17}
                        style={{ marginRight: 3, marginBottom: 2 }}
                      />{" "}
                      {monPack.packRunning}
                    </span>
                  )}
                  {monPack.packRunning === "Exclusive" && (
                    <span className="pack_running_exclusive">
                      {monPack.packRunning}
                    </span>
                  )}
                </div>
                {monPack.packDesc && (
                  <p
                    style={{
                      display: "flex",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 300,
                      fontSize: 15,
                    }}
                  >
                    {monPack.packDesc}
                  </p>
                )}

                {monPack.disPrice && (
                  <div className="package_monthly_price_container">
                    <div className="package_monthly_price">
                      ${monPack.disPrice}
                    </div>
                    {monPack.month}
                  </div>
                )}
                {monPack.br}
                {monPack.customIcon && (
                  <div className="custom_icon_container">
                    {monPack.customIcon}
                  </div>
                )}
                {monPack.br}
                {monPack?.features?.map((feat) => (
                  <div className="package_features_container">
                    <div style={{ marginRight: 5 }}>{feat.icon}</div>
                    <p>{feat.feaText}</p>
                  </div>
                ))}
                {monPack.br}
                <a href="/#contact" className="package_btn">
                  {monPack.btn}
                </a>
                <p style={{ display: "flex", textAlign: "start" }}>
                  {monPack.list}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;
