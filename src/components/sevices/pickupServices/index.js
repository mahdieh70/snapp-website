import React from "react";
import PickupServicesBanner from "../pickupServicesBanner/index";
import PickupServicesAdvantages from "../pickupServicesAdvantages";
import PickupServicesRequest from "../pickupServicesRequest";
import OtherFeautersOfSnappPickup from "../otherFeautersOfSnappPickup";
import PickupServicesQuestions from "../pickupServicesQuestions";

const PickupServices = () => {
  return (
    <>
      <PickupServicesBanner />
      <PickupServicesAdvantages />
      <PickupServicesRequest />
      <OtherFeautersOfSnappPickup />
      <PickupServicesQuestions />
    </>
  );
};

export default PickupServices;
