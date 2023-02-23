import React, { useState } from "react";

//banner image
import image from "../../assets/intro_desktop.jpg";

//icons
import { RiCloseCircleLine } from "react-icons/ri";
import directDownload from "../../assets/directdownload-icon.png";
import cafebazar from "../../assets/cafebazaar.png";
import snapIcon from "../../assets/snapp-pwa.svg";
import sibApp from "../../assets/sibapp.png";
import iApps from "../../assets/iapps.png";

const Banner = () => {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const clickHandler = () => {
    setShowDownloadMenu(!showDownloadMenu);
    console.log("mmm");
  };
  return (
    <div>
      <section className="flex flex-col">
        <div className="w-full">
          <img
            src={image}
            alt="pic"
            className="w-full"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
        <div className="flex flex-col w-full bg-[#21aa58] py-4 px-6">
          <h1 className="text-[28px] leading-[48px] text-white font-bold">
            تجربه&zwnj;ی زندگی راحت&zwnj;تر، سریع&zwnj;تر و به&zwnj;صرفه&zwnj;تر
            با سوپر اپلیکیشن اسنپ!
          </h1>
          <p className="py-2 text-[16.08px] text-white text-opacity-[0.8]">
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
            مشاوره‌&zwnj;ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
            سوپراپلیکیشن اسنپ انجام دهید.
          </p>
          <div className="flex items-center py-2">
            <button
              onClick={clickHandler}
              type="button"
              className="h-12 w-full text-[14px] leading-none font-bold py-2 bg-white border-none rounded-md"
            >
              دانلود اپلیکیشن اسنپ
            </button>
          </div>
        </div>
        <div>
          <div></div>
          <div>
            <div className="px-4">
              <div className="flex justify-between items-center">
                <h3 className="my-4">اپلیکیشن اسنپ</h3>
                <div onClick={clickHandler}>
                  <RiCloseCircleLine size={22} />
                </div>
              </div>
              <div
                className="pt-4"
                style={{ borderBottom: "1px solid #e8e8e8" }}
              >
                <a
                  href="#"
                  className="flex items-center mb-4 w-full no-underline"
                >
                  <img src={directDownload} alt="direct" loading="lazy" />
                  <span className="mr-4 text-[14px] text-[#3f3f3f]">
                    دانلود مستقیم
                  </span>
                </a>
              </div>
              <div
                className="pt-4"
                style={{ borderBottom: "1px solid #e8e8e8" }}
              >
                <a
                  href="#"
                  className="flex items-center mb-4 w-full no-underline"
                >
                  <img src={cafebazar} alt="cafebazar" loading="lazy" />
                  <span className="mr-4 text-[14px] text-[#3f3f3f]">
                    دانلود از کافه&zwnj;بازار
                  </span>
                </a>
              </div>
              <div
                className="pt-4"
                style={{ borderBottom: "1px solid #e8e8e8" }}
              >
                <a
                  href="#"
                  className="flex items-center mb-4 w-full no-underline"
                >
                  <img
                    src={snapIcon}
                    alt="snapIcon"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="mr-4 text-[14px] text-[#3f3f3f]">
                    وب اپلیکیشن اسنپ (iOS)
                  </span>
                </a>
              </div>
              <div
                className="pt-4"
                style={{ borderBottom: "1px solid #e8e8e8" }}
              >
                <a
                  href="#"
                  className="flex items-center mb-4 w-full no-underline"
                >
                  <img src={sibApp} alt="sibApp" loading="lazy" />
                  <span className="mr-4 text-[14px] text-[#3f3f3f]">
                    دانلود از سیب&zwnj;اپ
                  </span>
                </a>
              </div>
              <div
                className="pt-4"
                style={{ borderBottom: "1px solid #e8e8e8" }}
              >
                <a
                  href="#"
                  className="flex items-center mb-4 w-full no-underline"
                >
                  <img src={iApps} alt="iApps" loading="lazy" />
                  <span className="mr-4 text-[14px] text-[#3f3f3f]">
                    دانلود از ای&zwnj;اپس
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
