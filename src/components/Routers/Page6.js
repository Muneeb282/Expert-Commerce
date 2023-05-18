import * as React from "react";
import "./page.css";
import Card5 from "./Cards/Cards5";
import Test5 from "./Accordian/Test5";

export default function SimpleAccordion() {
  return (
    <div className="main_accordition">
      <div id="accordian">
        <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
        <Test5 />
        <Card5 />
      </div>
    </div>
  );
}
