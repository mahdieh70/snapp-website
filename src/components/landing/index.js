import React from "react";
import Banner from "../banner";
import Footer from "../footer";
import Header from "../header";

const Landing = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
