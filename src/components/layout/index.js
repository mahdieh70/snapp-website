import React from "react";
import Header from "../../components/layout/index";
import Footer from "../../components/layout/index";
import Landing from "../landing";

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
};

export default LayOut;
