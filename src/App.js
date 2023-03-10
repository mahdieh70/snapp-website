import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/index";
import TaxiServices from "./components/sevices/taxiServices/";
import BikeServices from "./components/sevices/bikeServices";
import Header from "./components/header";
import Footer from "./components/footer";
import PickupServices from "./components/sevices/pickupServices";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/taxiServices" element={<TaxiServices />} />
          <Route path="/bikeServices" element={<BikeServices />} />
          <Route path="/pickupServices" element={<PickupServices />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
