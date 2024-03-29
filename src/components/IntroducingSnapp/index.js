import React from "react";

//images
import easy from "../../assets/introduceImage/210x190-easy.png";
import fast from "../../assets/introduceImage/210x190-fast.png";
import eco from "../../assets/introduceImage/210x190-eco.png";

const IntroducingSnapp = () => {
  return (
    <>
      <section className="min-h-[700px] flex flex-col relative ">
        <div className="bg-introduceImage h-[30vh] bg-cover bg-center w-full flex-wrap flex"></div>
        <div className="small:flex small:flex-col small:mx-4 medium:px-[85px] medium:flex medium:flex-col">
          <h2 className="text-[20px] opacity-[0.9] mb-2 mt-4 ">
            سوپر اپ اسنپ، پاسخی به تمام نیازها
          </h2>
          <pre className="text-[12px] opacity-[0.7] leading-[2] my-2 whitespace-pre-wrap">
            اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در
            حوزه‌&zwnj;ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد.
            سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک
            اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات
            متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها
            و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو
            هتل، پرداخت قبض و خرید شارژ استفاده کنید.
          </pre>
        </div>
        <div className="small:mt-2 small:mx-4 small:flex small:flex-wrap small:justify-around medium:px-[85px] medium:mt-2 medium:flex medium:justify-between medium:flex-nowrap">
          <div className="small:flex-[0-0-41.65%] small:w-[41.65%] small:max-w-[41.65%] small:mt-6 medium:flex-[0_0_33.32%] medium:w-[33.32%] medium:max-w-[33.32%] medium:mt-6 medium:mx-1">
            <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
              <img src={easy} alt="easy" loading="lazy" height={190} />
            </div>
            <p className="font-bold text-[14.8px] opacity-[0.9] my-4">آسان</p>
            <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
              برای استفاده از هر کدام از خدمات سوپر‌&zwnj;اپ اسنپ کافی است وارد
              اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
            </pre>
          </div>
          <div className="small:flex-[0-0-41.65%] small:w-[41.65%] small:max-w-[41.65%] small:mt-6 medium:flex-[0_0_33.32%] medium:w-[33.32%] medium:max-w-[33.32%] medium:mt-6 medium:mx-1">
            <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
              <img src={fast} alt="fast" loading="lazy" height={190} />
            </div>
            <p className="font-bold text-[14.8px] opacity-[0.9] my-4">سریع</p>
            <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
              قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
              می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
            </pre>
          </div>
          <div className="small:flex-[0-0-41.65%] small:w-[41.65%] small:max-w-[41.65%] small:mt-6 medium:flex-[0_0_33.32%] medium:w-[33.32%] medium:max-w-[33.32%] medium:mt-6 medium:mx-1">
            <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
              <img src={eco} alt="eco" loading="lazy" height={190} />
            </div>
            <p className="font-bold text-[14.8px] opacity-[0.9] my-4">
              به صرفه
            </p>
            <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
              سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا
              بهترین خدمات را با قیمتی منطقی دریافت کنید.
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroducingSnapp;
