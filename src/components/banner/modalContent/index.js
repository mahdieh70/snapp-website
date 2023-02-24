import React from "react";
//icons
import { RiCloseCircleLine } from "react-icons/ri";
import directDownload from "../../../assets/directdownload-icon.png";
import cafebazar from "../../../assets/cafebazaar.png";
import snapIcon from "../../../assets/snapp-pwa.svg";
import sibApp from "../../../assets/sibapp.png";
import iApps from "../../../assets/iapps.png";

const ModalContent = ({ children, onClose }) => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-end z-[60] opacity-[1]">
        <div></div>
        <div className="bg-white w-full ">
          <div className="px-4">
            <div className="flex justify-between items-center">
              <h3 className="my-4">اپلیکیشن اسنپ</h3>
              <div
                onClick={() => {
                  onClose();
                }}
              >
                <RiCloseCircleLine size={22} />
              </div>
            </div>
            <div className="pt-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
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
            <div className="pt-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
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
            <div className="pt-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
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
            <div className="pt-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
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
            <div className="pt-4" style={{ borderBottom: "1px solid #e8e8e8" }}>
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
      <div>{children}</div>
    </div>
  );
};

export default ModalContent;
