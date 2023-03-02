import React from "react";
import BikeServicesBanner from "../bikeServicesBanner";
import BikeServicesAdvantages from "../bikeServicesAdvantages";
import BikeServicesVideo from "../../bikeServicesVideo";
import BikeServicesRequest from "../bikeServicesRequest";
import OtherFeautersOfSnappBike from "../otherFeautersOfSnappBike";
const BikeServices = () => {
  return (
    <>
      <BikeServicesBanner />
      <BikeServicesAdvantages />
      <BikeServicesVideo />
      <BikeServicesRequest />
      <OtherFeautersOfSnappBike />
    </>
  );
};

export default BikeServices;
