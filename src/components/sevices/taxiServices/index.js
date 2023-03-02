import React from "react";
import TaxiServicesBanner from "../taxiServicesBanner/index";
import TaxiServicesAdvantages from "../taxiServicesAdvantages";
import RegistrationOfRequest from "../registrationOfRequest";
import OtherFeauters from "../otherFeatures";
import Register from "../register";
import Questions from "../questions";

const TaxiServices = () => {
  return (
    <div>
      <TaxiServicesBanner />
      <TaxiServicesAdvantages />
      <RegistrationOfRequest />
      <OtherFeauters />
      <Register />
      <Questions />
    </div>
  );
};

export default TaxiServices;
