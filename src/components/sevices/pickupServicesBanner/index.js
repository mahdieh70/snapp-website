import React, { useState } from "react";
import DrawerMenu from "../../drawerMenu";
import DrawerMenuContent from "../../banner/drowerMenuContent/index";
import ServicesHeaderOfBanner from "../../servicesHeaderOfBanner";
import ServicesContentOfBanner from "../../servicesContentOfBanner";
import ButtonsOfServicesBanner from "../../buttonsOfServicesBanner";
import SnappAppDownloadButton from "../../snappAppDownloadButton";

const PickupServicesBanner = () => {
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
        <div className="w-full min-h-[40vh] bg-cover bg-pickupServicesBanner"></div>
        <div className="flex flex-col py-4 px-6 leading-[1.7] bg-[#06D170]">
          <ServicesHeaderOfBanner>
            وانت بار اینترنتی اسنپ!
          </ServicesHeaderOfBanner>
          <ServicesContentOfBanner>
            سرویس وانت بار اسنپ بهترین راهکار برای جابه‌جایی وسایل و بار است.
            شما به‌راحتی می‌توانید از طریق سوپراپ اسنپ اقدام به ثبت درخواست جهت
            استفاده از این سرویس کنید.
          </ServicesContentOfBanner>
          <div className="flex items-center py-2">
            <ButtonsOfServicesBanner>درخواست وانت</ButtonsOfServicesBanner>
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

export default PickupServicesBanner;
