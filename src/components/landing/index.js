import React from "react";
import Banner from "../banner";
import Footer from "../footer";
import Header from "../header";
import Services from "../sevices";

const Landing = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Banner />
        <Services/>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
