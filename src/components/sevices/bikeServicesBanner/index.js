import React, { useState } from "react";

//components
import DrawerMenu from "../../drawerMenu";
import DrawerMenuContent from "../../banner/drowerMenuContent/index";
import ServicesHeaderOfBanner from "../../servicesHeaderOfBanner";
import ServicesContentOfBanner from "../../servicesContentOfBanner";
import ButtonsOfServicesBanner from "../../buttonsOfServicesBanner";
import SnappAppDownloadButton from "../../snappAppDownloadButton";

const BikeServicesBanner = () => {
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
        <div className="w-full min-h-[40vh] bg-cover bg-bikeServicesBanner"></div>
        <div className="flex flex-col py-4 px-6 leading-[1.7] bg-[#06D170]">
          <ServicesHeaderOfBanner>پیک موتوری اسنپ!</ServicesHeaderOfBanner>
          <ServicesContentOfBanner>
            با خدمات پیک موتوری اسنپ، ارسال آسان و تحویل به موقع مرسولات را
            تجربه کنید یا با اسنپ بایک سفر کنید و ترافیک را دور بزنید!
          </ServicesContentOfBanner>
          <div className="flex items-center py-2">
            <ButtonsOfServicesBanner>درخواست موتور</ButtonsOfServicesBanner>
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

export default BikeServicesBanner;
