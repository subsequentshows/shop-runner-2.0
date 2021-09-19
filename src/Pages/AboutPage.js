import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductMainSection from "../Components/ProductMainSection";

import "../assets/css/our-product.css";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        
        <ProductMainSection />

        <Footer />
      </>
    );
  }
}
