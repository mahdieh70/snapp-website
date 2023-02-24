import React, { useState } from "react";

//banner image
import image from "../../assets/intro_desktop.jpg";

//components
import Modal from "../modal";
import ModalContent from "./modalContent";

const Banner = () => {
  const [showModal, setIsShowModal] = useState(false);
  return (
    <div>
      <Modal isShow={showModal} onClose={() => setIsShowModal((prev) => !prev)}>
        <ModalContent onClose={() => setIsShowModal((prev) => !prev)} />
      </Modal>
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
