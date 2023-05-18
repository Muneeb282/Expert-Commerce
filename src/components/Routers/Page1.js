import * as React from "react";
import "./page.css";
import Test1 from "./Accordian/Test1";
import Card from "./Cards/Card";

export default function SimpleAccordion() {
  return (
    <div className="main_accordition">
      <div id="accordian">
        <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
        <Test1 />
        <Card />
      </div>
    </div>
  );
}
