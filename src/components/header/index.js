import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//logo
import logo from "../../assets/snappLogo.svg";

//icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import "./header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const bodyElement = document.querySelector("body");

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      bodyElement.style.overflow = "hidden";
    } else if (!menu) {
      bodyElement.style.overflow = "unset";
    }
  }, [menu]);

  return (
    <>
      <header
        className="justify-between px-[4%] text-[#3f3f3f] bg-white h-[96px] min-h-[96px] flex items-center fixed right-0 left-0 top-0 z-[1200]"
        style={{ border: "1px solid #e5e5e5" }}
      >
        <div onClick={handleMenu} className="small:flex medium:hidden">
          {menu ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <img
          src={logo}
          alt="logo"
          className="small:w-[90px] small:h-[32px] small:cursor-pointer small:ml-4"
        />
        <nav
          className={
            !menu
              ? "small:hidden  medium:flex text-center"
              : "text-center fixed top-[64px] flex flex-col max-w-[500px] w-full items-start bg-white right-0 bottom-0 h-full overflow-auto scale-0  origin-[100%-0]"
          }
        >
          <a
            href="#"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            فرصت&zwnj;های شغلی
          </a>
          <a
            href="#"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            بلاگ
          </a>
          <a
            href="#"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            باشگاه رانندگان
          </a>
          <a
            href="#"
            title="(سواری، موتور و وانت)"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            ثبت نام راننده اسنپ
          </a>
          <a
            href="#"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            پنل سازمانی
          </a>
          <Link
            to="aboutUs"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            درباره ما
          </Link>
          <Link
            to="contactUs"
            className="small:smallLinkStyle medium:mediumLinkStyle large:text-[90%]"
          >
            تماس با ما
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
