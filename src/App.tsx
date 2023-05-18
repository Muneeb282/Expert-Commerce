import React from "react";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
} from "./components/Routers/Router";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import PackageScreen from "./pages/PackageScreen";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<AppNavigator />} />
          <Route path="/packages" element={<PackageScreen />} />

          <Route path="/Amazon_FBA_Wholesale" element={<Page1 />} />
          <Route path="/Amazon_PL" element={<Page2 />} />
          <Route path="/Dropshipping" element={<Page3 />} />
          <Route path="/Store_Management" element={<Page4 />} />
          <Route path="/Product_Research" element={<Page5 />} />
          <Route path="/Marketing" element={<Page6 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
