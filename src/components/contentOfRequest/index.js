import React from "react";

const ContentOfRequest = ({ children }) => {
  return (
    <>
      <pre className="whitespace-pre-wrap text-[14px] opacity-[0.8]">{children}</pre>
    </>
  );
};

export default ContentOfRequest;
