import React from "react";
import Banner from "../banner";
import IntroducingSnapp from "../IntroducingSnapp";
import OrderImageSlider from "../orderImageSlider";
import RegisterOfDrivers from "../registerOfDrivers";
import Services from "../sevices";
import Header from "../header";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Services />
        <OrderImageSlider />
        <IntroducingSnapp />
        <RegisterOfDrivers />
      </main>
    </>
  );
};

export default Landing;
