import React from "react";

const SnappAppDownloadButton = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="h-[48px] min-h-[48px] w-2/4 bg-transparent py-2 leading-none font-bold text-white border border-solid border-white rounded-[6px]"
      >
        {children}
      </button>
    </>
  );
};

export default SnappAppDownloadButton;
