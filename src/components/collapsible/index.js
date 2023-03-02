import React, { useState } from "react";
import styles from "./accordionMenu.module.css";
import classname from "classname";

//icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Collapsible = ({ label, children }) => {
  const [open, setOPen] = useState(false);
  const [height, setHeight] = useState();

  const toggle = () => {
    setOPen(!open);
  };

  const handleHeight = (node) => {
    setHeight(node?.getBoundingClientRect().height);
  };

  return (
    <>
      <div className="bg-white my-6 rounded-[9px]">
        <div className="flex items-center justify-between p-4 text-[14px] font-bold cursor-pointer">
          <div
            onClick={toggle}
            className="w-full px-2 text-[12.5px] opacity-[0.9]"
          >
            {label}
          </div>
          <div>
            {open ? (
              <MdOutlineKeyboardArrowUp size={30} className="align-middle" />
            ) : (
              <MdOutlineKeyboardArrowDown size={30} className="align-middle" />
            )}
          </div>
        </div>
        <div
          className={open ? "h-auto overflow-hidden" : "h-0 overflow-hidden"}
        >
          {open && (
            <div
              className={classname(styles["content"], !open && styles["close"])}
              ref={handleHeight}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Collapsible;
