import React from "react";

//images
import income from "../../assets/registerImage/180x100-income.png";
import hour from "../../assets/registerImage/180x100-hour.png";
import benefits from "../../assets/registerImage/180x100-benefits.png";
import carfix from "../../assets/registerImage/180x100-carfix.png";
import video from "../../assets/video/jazb-ranande.mp4";

const RegisterOfDrivers = () => {
  return (
    <>
      <section className="small:text-center small:flex small:flex-col small:justify-center small:items-center small:mt-10 small:py-10 small:px-4 small:bg-[#f2f5f8] small:leading-[1.7] medium:px-[85px] medium:text-center medium:flex medium:flex-col medium:items-center justify-center medium:mt-10 medium:py-10 medium:bg-[#f2f5f8] ">
        <h2 className="text-[32px] leading-[52px] font-black text-center opacity-[0.8]">
          در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
        </h2>
        <p className="font-medium text-[19small:px] py-4 text-center leading-[1.7] opacity-[0.6]">
          بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
          اینترنتی انجام دهید
        </p>
        <a href="#" className="no-underline text-center ">
          <button
            type="button"
            className="text-[15.8px] my-4 px-8 font-bold h-[48px] min-h-[48px] leading-none text-white border-none rounded-[6px] bg-[#00D170]"
          >
            ثبت&zwnj;نام رانندگان
          </button>
        </a>
        <div className="self-stretch overflow-hidden my-6 text-center leading-[1.7]">
          <video controls className="w-full rounded-[9px]">
            <source src={video} />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
        <div className="flex flex-wrap text-center leading-[1.7]">
          <div className="register-box">
            <img
              src={income}
              alt="income"
              className="w-auto h-[100px] text-center leading-[1.7]"
            />
            <div className="text-center flex flex-col justify-center leading-[1.7]">
              <p className="font-bold py-2 leadin-[1.7] text-right text-[14px] opacity-[0.9]">
                درآمد تضمینی + پاداش‌های ماهانه و هفتگی
              </p>
              <p className="text-[12.8px] leading-[1.7] text-right opacity-[0.8]">
                با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه
                در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را
                افزایش دهید.
              </p>
            </div>
          </div>
          <div className="register-box">
            <img
              src={hour}
              alt="hour"
              className="w-auto h-[100px] text-center leading-[1.7]"
            />
            <div className="text-center flex flex-col justify-center leading-[1.7]">
              <p className="font-bold py-2 leadin-[1.7] text-right text-[14px] opacity-[0.9]">
                ساعت کاری دلخواه
              </p>
              <p className="text-[12.8px] leading-[1.7] text-right opacity-[0.8]">
                فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود
                را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان
                شخصی‌سازی کنید.
              </p>
            </div>
          </div>
          <div className="register-box">
            <img
              src={benefits}
              alt="benefits"
              className="w-auto h-[100px] text-center leading-[1.7]"
            />
            <div className="text-center flex flex-col justify-center leading-[1.7]">
              <p className="font-bold py-2 leadin-[1.7] text-right text-[14px] opacity-[0.9]">
                مزایا و خدمات باشگاه رانندگان
              </p>
              <p className="text-[12.8px] leading-[1.7] text-right opacity-[0.8]">
                در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از
                جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی
                بهره‌مند شوید.
              </p>
            </div>
          </div>
          <div className="register-box">
            <img
              src={carfix}
              alt="carfix"
              className="w-auto h-[100px] text-center leading-[1.7]"
            />
            <div className="text-center flex flex-col justify-center leading-[1.7]">
              <p className="font-bold py-2 leadin-[1.7] text-right text-[14px] opacity-[0.9]">
                کار&zwnj;فیکس
              </p>
              <p className="text-[12.8px] leading-[1.7] text-right opacity-[0.8]">
                باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای
                سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی
                کرده است.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterOfDrivers;
