import React from "react";

//images
import easyAndFast from "../../../assets/taxiAdvantagesImage/3.png";
import pricing from "../../../assets/taxiAdvantagesImage/4.png";
import support from "../../../assets/taxiAdvantagesImage/5.png";

const TaxiServicesAdvantages = () => {
  return (
    <>
      <section className="min-h[700px] flex flex-col leading-[1.7]">
        <div className="bg-taxiServicesAdvantages bg-cover bg-left h-[30vh]"></div>
        <div className="flex flex-col mx-4 ">
          <h2 className="text-[22px] mt-4 mb-2">مزایای تاکسی اینترنتی اسنپ</h2>
          <pre className="text-[12px] whitespace-pre-wrap my-2 opacity-[0.8]">
            تاکسی اینترنتی اسنپ تحولی عظیم در سیستم حمل و نقل هوشمند محسوب
            می‌شود که هدفش برطرف کردن نیاز روزانه مردم برای سفر از نقطه‌ای به
            نقطه دیگر است.
          </pre>
        </div>
        <div className="mt-2 mx-4">
          <div className="mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <img
                src={easyAndFast}
                alt="easyAndFast"
                height={190}
                loading="lazy"
              />
            </div>
            <p className="text-[14.8px] font-bold my-4 opacity-[0.9]">
              آسان و سریع
            </p>
            <pre className="text-[10.8px] whitespace-pre-wrap opacity-[0.7]">
              با نصب سوپر اپلیکیشن اسنپ می‌توانید خیلی سریع و آسان، درخواست
              خودرو به مقصد مورد نظرتان را ثبت کنید.
            </pre>
          </div>
          <div className="mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <img src={pricing} alt="pricing" height={190} loading="lazy" />
            </div>
            <p className="text-[14.8px] font-bold my-4 opacity-[0.9]">
              قیمت&zwnj;گذاری شفاف
            </p>
            <pre className="text-[10.8px] whitespace-pre-wrap opacity-[0.7]">
              قیمت‌گذاری در اسنپ کاملا رقابتی، منطقی و شفاف است. مبلغ هر سفر پیش
              از درخواست خودرو، اعلام خواهد شد.
            </pre>
          </div>
          <div className="mt-6">
            {" "}
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <img src={support} alt="support" height={190} loading="lazy" />
            </div>
            <p className="text-[14.8px] font-bold my-4 opacity-[0.9]">
              پشتیبانی تمام وقت
            </p>
            <pre className="text-[10.8px] whitespace-pre-wrap opacity-[0.7]">
              پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک و
              پاسخ‌دهی به تمام سوالات شما است.
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxiServicesAdvantages;
