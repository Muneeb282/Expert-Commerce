import * as React from "react";
import "./page.css";
import Card3 from "./Cards/Card3";
import Test2 from "./Accordian/Test2";

export default function SimpleAccordion() {
  return (
    <div className="main_accordition">
      <div id="accordian">
        <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
        <Test2 />
        <Card3 />
      </div>
    </div>
  );
}
