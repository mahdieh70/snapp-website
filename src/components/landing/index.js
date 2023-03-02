import React from "react";
import Banner from "../banner";
import IntroducingSnapp from "../IntroducingSnapp";
import OrderImageSlider from "../orderImageSlider";
import RegisterOfDrivers from "../registerOfDrivers";
import Services from "../sevices";

const Landing = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Banner />
        <Services />
        <OrderImageSlider />
        <IntroducingSnapp />
        <RegisterOfDrivers />
      </main>
    </div>
  );
};

export default Landing;
