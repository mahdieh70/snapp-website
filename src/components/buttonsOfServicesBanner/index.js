import React from "react";

const ButtonsOfServicesBanner = ({ children }) => {
  return (
    <>
      <a href="#" className="ml-4 no-underline w-2/4">
        <button
          type="button"
          className=" w-full h-[48px] min-h[48px] text-3 text-[#3f3f3f] bg-white font-bold border-none rounded-[6px]"
        >
          {children}
        </button>
      </a>
    </>
  );
};

export default ButtonsOfServicesBanner;
