import React from "react";

const ServicesDetailsHeaderContent = ({ children }) => {
  return (
    <>
      <pre className="text-[12px] whitespace-pre-wrap my-2 opacity-[0.8]">
        {children}
      </pre>
    </>
  );
};

export default ServicesDetailsHeaderContent;
