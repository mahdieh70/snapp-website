import React from "react";

const OtherFeautersContent = ({ children }) => {
  return (
    <div>
      <pre className="whitespace-pre-wrap text-[14.2px] leading-[2] opacity-[0.9]">
        {children}
      </pre>
    </div>
  );
};

export default OtherFeautersContent;
