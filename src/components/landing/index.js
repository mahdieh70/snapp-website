import React from "react";
import Banner from "../banner";
import Footer from "../footer";
import Header from "../header";
import IntroducingSnapp from "../IntroducingSnapp";
import OrderImageSlider from "../orderImageSlider";
import RegisterOfDrivers from "../registerOfDrivers";
import Services from "../sevices";

const Landing = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Banner />
        <Services />
        <OrderImageSlider />
        <IntroducingSnapp />
        <RegisterOfDrivers />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
