import React, { useState } from "react";

//logo
import logo from "../../assets/snappLogo.svg";

//icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Modal from "../modal/index";
import ModalContent from "../header/modalContent/index";

const Header = () => {
  const [showModal, setIsShowModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <Modal isShow={showModal} onClose={() => setIsShowModal((prev) => !prev)}>
        <ModalContent />
      </Modal>
      <header className="z-[1200] fixed top-0 left-0 right-0 flex justify-between items-center bg-white border-b border-[#e5e5e5]  px-4 h-16 medium:flex medium:text-center medium:items-center medium:h-[96px] medium:bg-white medium:border medium:border-solid medium:border-pale-gray xl-[96px] medium:px-48">
        <div onClick={handleMenu} className="flex medium:hidden">
          {menu ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
        <img
          src={logo}
          alt="logo"
          className="w-[90px] h-[32px] cursor-pointer"
        />
        <nav className="hidden medium:flex medium:mr-6">
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
    </div>
  );
};

export default Header;
