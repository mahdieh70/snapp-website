import React from "react";

const ServicesHeaderOfBanner = ({ children }) => {
  return (
    <>
      <h1 className="text-white text-[26px] leading-[48px] font-bold">
        {children}
      </h1>
    </>
  );
};

export default ServicesHeaderOfBanner;
