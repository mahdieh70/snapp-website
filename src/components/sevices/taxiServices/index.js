import React from "react";
import TaxiServicesBanner from "../taxiServicesBanner/index";
import TaxiServicesAdvantages from "../taxiServicesAdvantages";
import RegistrationOfRequest from "../registrationOfRequest";

const TaxiServices = () => {
  return (
    <div>
      <TaxiServicesBanner />
      <TaxiServicesAdvantages />
      <RegistrationOfRequest/>
    </div>
  );
};

export default TaxiServices;
