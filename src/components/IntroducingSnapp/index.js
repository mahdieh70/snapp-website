import React from "react";

//images
import easy from "../../assets/introduceImage/210x190-easy.png";
import fast from "../../assets/introduceImage/210x190-fast.png";
import eco from "../../assets/introduceImage/210x190-eco.png";

const IntroducingSnapp = () => {
  return (
    <div>
      <section className="min-h-[700px] flex flex-col relative ">
        <div className="bg-introduceImage h-[30vh] bg-cover bg-center w-full flex-wrap flex"></div>
        <div className="flex flex-col mx-4">
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
        <div className="mt-2 mx-4 ">
          <div className="mt-6">
            <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
              <img src={easy} alt="easy" loading="lazy" height={190} />
            </div>
            <p className="font-bold text-[14.8px] opacity-[0.9] my-4">آسان</p>
            <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
              برای استفاده از هر کدام از خدمات سوپر‌&zwnj;اپ اسنپ کافی است وارد
              اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
            </pre>
          </div>
          <div className="mt-6">
            <div className="mt-6">
              <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
                <img src={fast} alt="fast" loading="lazy" height={190} />
              </div>
              <p className="font-bold text-[14.8px] opacity-[0.9] my-4">سریع</p>
              <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
                قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک
                می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
              </pre>
            </div>
          </div>
          <div className="mt-6">
            <div className="mt-6">
              <div className="overflow-hidden flex justify-center items-center bg-[#f2f5f8] rounded-[18px]">
                <img src={eco} alt="eco" loading="lazy" height={190} />
              </div>
              <p className="font-bold text-[14.8px] opacity-[0.9] my-4">
                به صرفه
              </p>
              <pre className="text-[10.5px] align-baseline whitespace-pre-wrap opacity-[0.8]">
                سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند
                تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroducingSnapp;
