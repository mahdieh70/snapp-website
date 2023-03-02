import React from "react";

const OtherFeauturesHeaderContent = ({ children }) => {
  return (
    <>
      <pre className="whitespace-pre-wrap mb-auto mt-4 pb-6 px-4 text-[14px] opacity-[0.7]  leading-[2]">
        {children}
      </pre>
    </>
  );
};

export default OtherFeauturesHeaderContent;
