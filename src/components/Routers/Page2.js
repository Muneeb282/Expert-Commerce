import * as React from "react";
import "./page.css";
import Card1 from "./Cards/Card1";
import Test from "./Accordian/Test";

export default function SimpleAccordion() {
  return (
    <>
      <div className="main_accordition">
        <div id="accordian">
          <h1 style={{ marginBottom: "80px" }}>Our approach to Amazon PL</h1>
          <Test />
          <Card1 />
        </div>
      </div>
    </>
  );
}
