import React, { useEffect } from "react";

//create portal
import { createPortal } from "react-dom";

const DrawerMenu = ({ isShow, children }) => {
  const bodyElement = document.querySelector("body");

  useEffect(() => {
    if (isShow) {
      bodyElement.style.overflow = "hidden";
    } else if (!isShow) {
      bodyElement.style.overflow = "unset";
    }
  }, [isShow]);

  return (
    <>
      {isShow
        ? createPortal(
            <div className="z-[999] w-full h-full">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{ backgroundColor: "rgb(0 0 0 / 50%)" }}
              />
              <div className="fixed w-full h-full overflow-auto">
                <div>{children}</div>
              </div>
            </div>,
            bodyElement
          )
        : null}
    </>
  );
};

export default DrawerMenu;
