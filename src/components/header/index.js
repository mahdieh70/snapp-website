import React, { useState } from "react";
import classname from "classname";

//style
import styles from "./header.module.css";

//logo
import logo from "../../assets/snappLogo.svg";

//icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import directDownload from "../../assets/directdownload-icon.png";
import cafebazar from "../../assets/cafebazaar.png";
import snapIcon from "../../assets/snapp-pwa.svg";
import sibApp from "../../assets/sibapp.png";
import iApps from "../../assets/iapps.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(false);
  const [height, setHeight] = useState();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleArrowIcon = () => {
    setArrowIcon(!arrowIcon);
  };

  const handleHeight = (node) => {
    setHeight(node?.getBoundingClientRect().height);
  };

  return (
    <div>
      <header className="z-[1200] fixed top-0 left-0 right-0 flex justify-between items-center bg-white border-b border-[#e5e5e5]  px-4 h-16 medium:flex medium:text-center medium:items-center medium:h-[96px] medium:bg-white medium:border medium:border-solid medium:border-pale-gray xl-[96px] medium:px-48">
        <div onClick={handleMenu} className="flex medium:hidden">
          {menu ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[32px] cursor-pointer"
        />
        <nav className={"hidden medium:flex medium:mr-6"}>
          <a href="#" className="text-pale-black text-sm no-underline text-sm">
            فرصت&zwnj;های شغلی
          </a>
          <a
            href="#"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            بلاگ
          </a>
          <a
            href="#"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            باشگاه رانندگان
          </a>
          <a
            href="#"
            title="(سواری، موتور و وانت)"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            ثبت نام راننده اسنپ
          </a>
          <a
            href="#"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            پنل سازمانی
          </a>
          <a
            href="#"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            درباره ما
          </a>
          <a
            href="#"
            className="text-pale-black text-sm no-underline mr-8 text-sm"
          >
            تماس با ما
          </a>
        </nav>
      </header>
      <nav
        className={
          menu
            ? "pt-[64px] flex flex-col max-w-[500px] min-h-screen w-full right-0 bottom-0 bg-[#fff] px-4 shadow-md overflow-auto"
            : "hidden"
        }
      >
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          فرصت&zwnj;های شغلی
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          بلاگ
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          باشگاه رانندگان
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          ثبت نام راننده اسنپ
          <span className="text-pale-green"> (سواری، موتور و وانت)</span>
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          پنل سازمانی
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          درباره ما
        </a>
        <a href="#" className="text-pale-black text-sm no-underline my-5">
          تماس با ما
        </a>
        <hr />
        <div>
          <div className="py-2 flex justify-between items-center text-sm">
            <span className="text-green-500 pr-2 font-bold">اپلیکیشن اسنپ</span>
            <div onClick={handleArrowIcon} className="text-pale-green">
              {arrowIcon ? (
                <MdOutlineKeyboardArrowUp size={34} />
              ) : (
                <MdOutlineKeyboardArrowDown size={34} />
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            // height: arrowIcon ? "auto" : 0,
            overflow: "hidden",
            // transition: "all .3s",
          }}
        >
          <div
            className={classname(
              styles["content"],
              !arrowIcon && styles["close"]
            )}
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
              <span className="text-sm text-pale-black mr-4">
                دانلود مستقیم
              </span>
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
      </nav>
    </div>
  );
};

export default Header;
