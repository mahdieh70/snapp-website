import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import TaxiServices from "./components/sevices/taxiServices/index";
import BikeServices from "./components/sevices/bikeServices";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/taxiServices" element={<TaxiServices />} />
          <Route path="/bikeServices" element={<BikeServices />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
