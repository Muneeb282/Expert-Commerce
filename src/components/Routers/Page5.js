import * as React from "react";
import "./page.css";
import Card4 from "./Cards/Card4";
import Test4 from "./Accordian/Test4";

export default function SimpleAccordion() {
  return (
    <div className="main_accordition">
      <div id="accordian">
        <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
        <Test4 />
        <Card4 />
      </div>
    </div>
  );
}
