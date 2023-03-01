import React, { useState } from "react";
import styles from "./accordionMenu.module.css";
import classname from "classname";

//icons
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Questions = () => {
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
      <section className="py-10 px-4 bg-[#f5f5f6] block">
        <h2 className="text-[19px] opacity-[0.8] my-8">
          پرسش&zwnj;های پرتکرار
        </h2>
        <div>
          <div className="bg-white my-6 rounded-[9px]">
            <div onClick={handleArrowIcon}>
              <div className="flex items-center justify-between p-4 text-[14px] font-bold cursor-pointer">
                <div className="w-full px-2 text-[12.5px] opacity-[0.9]">
                  نحوه استفاده از سرویس تاکسی اینترنتی اسنپ چگونه است؟
                </div>
                <div onClick={handleArrowIcon}>
                  {openMenu ? (
                    <MdOutlineKeyboardArrowUp
                      size={30}
                      className="align-middle"
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      size={30}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
              <div
                className={
                  openMenu ? "h-auto overflow-hidden" : "h-0 overflow-hidden"
                }
              >
                <div
                  className={classname(
                    styles["content"],
                    !openMenu && styles["close"]
                  )}
                  ref={handleHeight}
                >
                  <pre
                    className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                    style={{ borderTop: "1px solid #e5e5e5" }}
                  >
                    در ابتدا سوپراَپ اسنپ را روی گوشی همراه خود نصب کنید. سپس
                    روی آیکون اسنپ! ضربه بزنید. ابتدا آدرس مبدأ و سپس مقصد خود
                    را تعیین کنید. حالا می‌توانید نوع خودرو، مبلغ، گزینه‌های سفر
                    و غیره را مشاهده و ویرایش کنید.
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white my-6 rounded-[9px]">
            <div onClick={handleArrowIcon}>
              <div className="flex items-center justify-between p-4 text-[14px] font-bold cursor-pointer">
                <div className="w-full px-2 text-[12.5px] opacity-[0.9]">
                  نحوه استفاده از سرویس تاکسی اینترنتی اسنپ چگونه است؟
                </div>
                <div onClick={handleArrowIcon}>
                  {openMenu ? (
                    <MdOutlineKeyboardArrowUp
                      size={30}
                      className="align-middle"
                    />
                  ) : (
                    <MdOutlineKeyboardArrowDown
                      size={30}
                      className="align-middle"
                    />
                  )}
                </div>
              </div>
              <div
                className={
                  openMenu ? "h-auto overflow-hidden" : "h-0 overflow-hidden"
                }
              >
                <div
                  className={classname(
                    styles["content"],
                    !openMenu && styles["close"]
                  )}
                  ref={handleHeight}
                >
                  <pre
                    className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                    style={{ borderTop: "1px solid #e5e5e5" }}
                  >
                    در ابتدا سوپراَپ اسنپ را روی گوشی همراه خود نصب کنید. سپس
                    روی آیکون اسنپ! ضربه بزنید. ابتدا آدرس مبدأ و سپس مقصد خود
                    را تعیین کنید. حالا می‌توانید نوع خودرو، مبلغ، گزینه‌های سفر
                    و غیره را مشاهده و ویرایش کنید.
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
