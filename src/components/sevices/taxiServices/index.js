import React from "react";
import TaxiServicesBanner from "../taxiServicesBanner/index";
import TaxiServicesAdvantages from "../taxiServicesAdvantages";
import RegistrationOfRequest from "../registrationOfRequest";
import OtherFeautersOfSnapTaxi from "../otherFeaturesOfSnappTaxi/index";
import Register from "../register";
import TaxiServicesQustions from "../taxiServicesQuestions";

const TaxiServices = () => {
  return (
    <div>
      <TaxiServicesBanner />
      <TaxiServicesAdvantages />
      <RegistrationOfRequest />
      <OtherFeautersOfSnapTaxi />
      <Register />
      <TaxiServicesQustions />
    </div>
  );
};

export default TaxiServices;
