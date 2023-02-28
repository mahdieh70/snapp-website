import React from "react";
import TaxiServicesBanner from "../taxiServicesBanner/index";
import TaxiServicesAdvantages from "../taxiServicesAdvantages";
import RegistrationOfRequest from "../registrationOfRequest";
import TaxiServicesNews from "../taxiServicesNewsOfSnapp";
import Register from "../register";
import Questions from "../questions";

const TaxiServices = () => {
  return (
    <div>
      <TaxiServicesBanner />
      <TaxiServicesAdvantages />
      <RegistrationOfRequest />
      <TaxiServicesNews />
      <Register />
      <Questions/>
    </div>
  );
};

export default TaxiServices;
