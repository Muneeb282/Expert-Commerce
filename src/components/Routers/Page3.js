import * as React from "react";
import "./page.css";
import Card2 from "./Cards/Card2";
import Test3 from "./Accordian/Test3";

export default function SimpleAccordion() {
  return (
    <div className="main_accordition">
      <div id="accordian">
        <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
        <Test3 />
        <Card2 />
      </div>
    </div>
  );
}
