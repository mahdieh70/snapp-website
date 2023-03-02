import React, { useState } from "react";

//components
import DrawerMenu from "../../drawerMenu/index";
import DrawerMenuContent from "../../banner/drowerMenuContent/index";
import ServicesHeaderOfBanner from "../../servicesHeaderOfBanner/index";
import ServicesContentOfBanner from "../../servicesContentOfBanner/index";
import ButtonsOfServicesBanner from "../../buttonsOfServicesBanner/index";
import SnappAppDownloadButton from "../../snappAppDownloadButton/index";

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
        <div className="w-full min-h-[40vh] bg-cover bg-taxiServicesBanner"></div>
        <div className="flex flex-col py-4 px-6 leading-[1.7] bg-[#06D170]">
          <ServicesHeaderOfBanner>
            تاکسی اینترنتی اسنپ، در رکاب شماست!
          </ServicesHeaderOfBanner>
          <ServicesContentOfBanner>
            اسنپ! اولین و بزرگترین تاکسی اینترنتی ایران است که برای جابه‌جایی در
            شهرهای بزرگ و کوچک ایران آماده خدمت‌رسانی به شماست.
          </ServicesContentOfBanner>
          <div className="flex items-center py-2">
            <ButtonsOfServicesBanner>درخواست تاکسی</ButtonsOfServicesBanner>
            <SnappAppDownloadButton
              onClick={() => setIsShowMenu((prev) => !prev)}
            >
              دانلود اپلیکیشن اسنپ
            </SnappAppDownloadButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxiServicesBanner;
