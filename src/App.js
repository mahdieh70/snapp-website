import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/landing/index";
import TaxiServices from "./components/sevices/taxiServices/";
import BikeServices from "./components/sevices/bikeServices";
import Footer from "./components/footer";
import PickupServices from "./components/sevices/pickupServices";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";

const App = () => {
  return (
    <div className="h-full">
      <div className="h-full">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/taxiServices" element={<TaxiServices />} />
            <Route path="/bikeServices" element={<BikeServices />} />
            <Route path="/pickupServices" element={<PickupServices />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
                        
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
};

export default App;
