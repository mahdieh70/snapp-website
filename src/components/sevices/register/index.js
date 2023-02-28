import React from "react";

//images
import carImage from "../../../assets/taxiSectionImages/car.svg";
const Register = () => {
  return (
    <>
      <section className="flex flex-col mx-4 ">
        <div className="flex flex-col items-center justify-center px-2 ">
          <h3 className="font-bold mb-4 text-[15px] opacity-[0.9] ">
            ثبت نام در تاکسی اینترنتی اسنپ!
          </h3>
          <pre className="whitespace-pre-wrap text-[14px] leading-[2] opacity-[0.7]">
            شما نیز می‌توانید به ناوگان اسنپ ملحق شوید .از مزایای همکاری و ثبت
            نام در تاکسی اینترنتی اسنپ می‌توان به درآمد تضمینی و ساعت کاری
            دلخواه اشاره کرد .بدون نیاز به مراجعه‌ى حضوری، تمام مراحل ثبت‌نام را
            اینترنتی انجام دهید.
          </pre>
          <a href="#" className="my-6 no-underline">
            <button
              type="button"
              className="text-[16px] my-1 px-6 font-bold h-[48px] min-h-[48px] leading-none text-white border-none rounded-[6px] w-auto cursor-pointer overflow-hidden relative max-w-full whitespace-nowrap text-ellipsis"
              style={{ backgroundColor: "rgb(0, 209, 112)" }}
            >
              بیشتر بدانید
            </button>
          </a>
        </div>
        <img src={carImage} alt="carImage" loading="lazy"/>
      </section>
    </>
  );
};

export default Register;
