import React, { useState } from "react";
import classname from "classname";

//style
import styles from "./header.module.css";

//icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

//images
import directDownload from "../../assets/directdownload-icon.png";
import cafebazar from "../../assets/cafebazaar.png";
import snapIcon from "../../assets/snapp-pwa.svg";
import sibApp from "../../assets/sibapp.png";
import iApps from "../../assets/iapps.png";

const SubMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [height, setHeight] = useState();
  const handleArrowIcon = () => {
    setOpenMenu(!openMenu);
  };

  const handleHeight = (node) => {
    setHeight(node?.getBoundingClientRect().height);
  };
  return (
    <>
      <div>
        <div className="py-2 flex justify-between items-center text-sm">
          <span className="text-green-500 pr-2 font-bold">اپلیکیشن اسنپ</span>
          <div onClick={handleArrowIcon} className="text-pale-green">
            {openMenu ? (
              <MdOutlineKeyboardArrowUp size={34} />
            ) : (
              <MdOutlineKeyboardArrowDown size={34} />
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          // height: openMenu ? "auto" : 0,
          overflow: "hidden",
          // transition: "all .3s",
        }}
      >
        <div
          className={classname(styles["content"], !openMenu && styles["close"])}
          ref={handleHeight}
        >
          <a href="#" className="flex items-center no-underline mb-4 ">
            <img
              src={snapIcon}
              alt="snapIcon"
              width="24"
              height="24"
              loading="lazy"
            />
            <span className="text-sm text-pale-black mr-4">
              وب اپلیکیشن اسنپ (iOS)
            </span>
          </a>
          <a href="#" className="flex items-center no-underline mb-4 ">
            <img src={sibApp} alt="sibApp" />
            <span className="text-sm text-pale-black mr-4">
              دانلود از سیب&zwnj;اپ
            </span>
          </a>
          <a href="#" className="flex items-center no-underline mb-4 ">
            <img src={iApps} alt="iApps" />
            <span className="text-sm text-pale-black mr-4">
              دانلود از آی&zwnj;اپس
            </span>
          </a>
          <a href="#" className="flex items-center no-underline mb-4 ">
            <img src={directDownload} alt="direct" />
            <span className="text-sm text-pale-black mr-4">دانلود مستقیم</span>
          </a>
          <a href="#" className="flex items-center no-underline mb-4 ">
            <img src={cafebazar} alt="cafebazar" />
            <span className="text-sm text-pale-black mr-4">
              دانلود از کافه&zwnj;بازار
            </span>
          </a>
        </div>
        {/* <div style={{ height: "100px", backgroundColor: "red" }}></div> */}
      </div>
    </>
  );
};

export default SubMenu;
