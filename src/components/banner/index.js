import React, { useState } from "react";

//components
import Modal from "../drawerMenu";
import ModalContent from "./drowerMenuContent";

const Banner = () => {
  const [showModal, setIsShowModal] = useState(false);
  return (
    <div>
      <Modal isShow={showModal} onClose={() => setIsShowModal((prev) => !prev)}>
        <ModalContent onClose={() => setIsShowModal((prev) => !prev)} />
      </Modal>
      <section className="flex flex-col">
        <div className="bg-bannerImage w-[100%] bg-cover bg-no-repeat bg-center  min-h-[40vh]" style={{transform:"scaleX(-1)"}}>
         
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
              onClick={() => setIsShowModal((prev) => !prev)}
              type="button"
              className="h-12 w-full text-[14px] leading-none font-bold py-2 bg-white border-none rounded-md"
            >
              دانلود اپلیکیشن اسنپ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
