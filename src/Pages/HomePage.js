import React from "react";
import axios from "axios";
import { APIC } from "../API/APIC";
import { Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "../Components/Header";
// import Body from "../Components/Body.js";
import Footer from "../Components/Footer";
// import HomeSection from "../Components/HomeSection";

import "../assets/css/styles.css";
import "../assets/css/homepage.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />

        {/* <Body /> */}

        {/* <HomeSection /> */}
        {/* <SpecSection />
          <CaseSection />
          <DiscountSection />
          <ProductSection /> */}

        <Footer />

      </>
    );
  }
}
