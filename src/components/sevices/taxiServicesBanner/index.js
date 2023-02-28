import React, { useState } from "react";

//component
import DrawerMenu from "../../drawerMenu/index";
import DrawerMenuContent from "../../banner/drowerMenuContent/index";

const TaxiServicesBanner = () => {
  const [showMenu, setIsShowMenu] = useState(false);
  return (
    <>
      <DrawerMenu
        isShow={showMenu}
        onClose={() => setIsShowMenu((prev) => !prev)}
      >
        <DrawerMenuContent onClose={() => setIsShowMenu((prev) => !prev)} />
      </DrawerMenu>
      <section>
        <div className="w-full min-h-[50vh] bg-cover bg-taxiServicesBanner"></div>
        <div className="flex flex-col py-4 px-6 leading-[1.7] bg-[#06D170]">
          <h1 className="text-white text-[26px] leading-[48px] font-bold">
            تاکسی اینترنتی اسنپ، در رکاب شماست!
          </h1>
          <p className="text-[14.8px] py-2 text-white opacity-[0.9]">
            اسنپ! اولین و بزرگترین تاکسی اینترنتی ایران است که برای جابه‌جایی در
            شهرهای بزرگ و کوچک ایران آماده خدمت‌رسانی به شماست.
          </p>
          <div className="flex items-center py-2">
            <a href="#" className="ml-4 no-underline w-2/4">
              <button
                type="button"
                className=" w-full h-[48px] min-h[48px] text-3 text-[#3f3f3f] bg-white font-bold border-none rounded-[6px]"
              >
                درخواست تاکسی
              </button>
            </a>
            <button
              onClick={() => setIsShowMenu((prev) => !prev)}
              className="h-[48px] min-h-[48px] w-2/4 bg-transparent py-2 leading-none font-bold text-white border border-solid border-white rounded-[6px]"
            >
              دانلود اپلیکیشن اسنپ
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxiServicesBanner;
