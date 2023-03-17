import React, { useState } from "react";
import direct from "../../assets/downloadImage/direct-download-badge.png";
import bazar from "../../assets/downloadImage/bazaar.png";
import sibApp from "../../assets/downloadImage/sibapp-badge-white.png";
import iApps from "../../assets/downloadImage/iappsbadge.webp";
import snappPwa from "../../assets/downloadImage/snapp-pwa.png";

import { useMediaQuery } from "react-responsive";

//components
import DrawerMenu from "../drawerMenu";
import DrawerMenuContent from "./drowerMenuContent";

const Banner = () => {
  const [showDrawerMenu, setIsShowDrawer] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 841px)",
  });
  return (
    <>
      <DrawerMenu
        isShow={showDrawerMenu}
        onClose={() => setIsShowDrawer((prev) => !prev)}
      >
        <DrawerMenuContent onClose={() => setIsShowDrawer((prev) => !prev)} />
      </DrawerMenu>
      <section className="small:flex small:flex-col medium:flex medium:flex-row-reverse medium:justify-center medium:mt-[96px]">
        <div
          className="small:bannerSmallStyle medium:bannerMediumStyle large:pr-[16%] large:flex-[0_0_49.98%] large:w-[49.98%] large:max-w-[49.98%] large:flex pl-6 py-8 large:bg-[#21aa58] large:flex-col large:justify-around"
          style={{ transform: "scaleX(-1)" }}
        ></div>
        <div className="small:bannerContentSmallStyle medium:bannerContentMediumStyle">
          <h1 className="small:bannerContentSmallHeading medium:bannerContentmediumHeading large:mb-4">
            تجربه&zwnj;ی زندگی راحت&zwnj;تر، سریع&zwnj;تر و به&zwnj;صرفه&zwnj;تر
            با سوپر اپلیکیشن اسنپ!
          </h1>
          <p className="py-2 text-[16.08px] text-white text-opacity-[0.8]">
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
            مشاوره‌&zwnj;ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
            سوپراپلیکیشن اسنپ انجام دهید.
          </p>
          <div className="small:flex small:items-center small:py-2 medium:hidden">
            <button
              onClick={() => setIsShowDrawer((prev) => !prev)}
              type="button"
              className="h-12 w-full text-[14px] leading-none font-bold py-2 bg-white border-none rounded-md"
            >
              دانلود اپلیکیشن اسنپ
            </button>
          </div>
          {isDesktopOrLaptop && (
            <>
              {" "}
              <div className="relative">
                <form className="translate-Z-[0px] flex items-center h-[56px] min-h-[56px]">
                  <div className="flex-[0-0-49.98%] w-[49.98%] max-w-[49.98%] text-white h-auto overflow-hidden">
                    <div
                      className="innerInput"
                      style={{
                        borderBottom: "1px solid #e8e8e8",
                        transitionDuration: "150ms",
                        transitionProperty: "border-color",
                        transitionTimingFunction: "ease-in",
                      }}
                    >
                      <div className="flex grow self-stretch items-center flex-row ">
                        <input
                          type="text"
                          className="w-full h-full block grow px-2 bg-transparent border-none outline-none leading-[48px] "
                        />
                        <div className="placeholder">09xxxxx6789</div>
                        <div className="w-auto h-full flex px-2 items-center justify-center border-none outline-none bg-transparent">
                          <span className="w-2 h-2 bg-white rounded-[50%] inline-block "></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex-[0-0-24%] w-[24%] max-w-[24%] font-bold mr-4 text-[#00d16f] bg-white medium:h-10 medium:min-h-[10] medium:border-none medium:p-2 medium:rounded-[6px]">
                    <span>ارسال لینک</span>
                  </button>
                </form>
              </div>
              <div className=" flex justify-between mt-8 ">
                <div
                  className=" flex pointer w-2/4 text-[13px] align-baseline font-bold px-2 rounded-[6px] h-[48px] min-h-[48px] text-white items-center"
                  style={{ border: "1px solid #fff" }}
                >
                  ورود به وب اپلیکیشن اسنپ
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {isDesktopOrLaptop && (
        <section className="flex medium:flex-wrap medium:content-evenly medium:items-center medium:justify-center medium:leading-[1.7] medium:min-h-[30vh] medium:px-[85px] ">
          <a
            href="#"
            className="medium:mx-6 medium:no-underline medium:bg-transparent medium:leading-[1.7]"
          >
            <img src={direct} width="160" alt="direct" />
          </a>
          <a
            href="#"
            className="medium:mx-6 medium:no-underline medium:bg-transparent medium:leading-[1.7]"
          >
            <img src={bazar} width="160" alt="bazar" />
          </a>
          <a
            href="#"
            className="medium:mx-6 medium:no-underline medium:bg-transparent medium:leading-[1.7]"
          >
            <img src={snappPwa} width="160" alt="snapPwa" />
          </a>
          <a
            href="#"
            className="medium:mx-6 medium:no-underline medium:bg-transparent medium:leading-[1.7]"
          >
            <img src={sibApp} width="160" alt="sibApp" />
          </a>
          <a
            href="#"
            className="medium:mx-6 medium:no-underline medium:bg-transparent medium:leading-[1.7]"
          >
            <img src={iApps} width="160" alt="iApps" />
          </a>
        </section>
      )}
    </>
  );
};

export default Banner;
