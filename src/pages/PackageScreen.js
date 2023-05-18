import React from "react";
import "./packageScreen.css";
import PackageCard from "../components/Packages/PackageCard";
import Accordion from "../components/Accordind/Accordion";
import { monthlyPackage, faqPackageData, yearlyPackage } from "./packageData";
import { Footer } from "../components/Footer/Footer";
const PackageScreen = () => {
  return (
    <div className="packages">
      <div className="package_head">
        <div className="package_head_big_text">
          Save Big With Our
          <div className="package_head_big_text2">
            Amazon Online Arbitrage Deals!
          </div>
        </div>
        <div className="package_head_small_text">
          Whether you’re a New, Intermediate or an expert ,
          <div>We’ve got a plan for you</div>
        </div>
      </div>
      <PackageCard
        yearlyPackage={yearlyPackage}
        monthlyPackage={monthlyPackage}
      />

      <div className="packages_main">
        <div className="packages_main2">
          <div className="main_text1">Want to customize your plan ?</div>
          <div className="main_text2">
            we have a list of membership plans customized
            <div>to your needs</div>
          </div>
          <a href="/#contact" className="packages_btn">
            Get your preferred membership
          </a>
        </div>
      </div>

      <div className="packages_faq">
        <div className="faq_heading">Faq</div>
        <div className="faq_accordion">
          <div>
            {faqPackageData.map((faq, index) => (
              <Accordion key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PackageScreen;
