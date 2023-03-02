import React from "react";

//components
import ServicesDetailsHeader from "../../servicesDetailsHeader/index";
import ServicesAdvantagesContent from "../../servicesAdvantagesContent";
import ServicesAdvantagesImage from "../../servicesAdvantagesImage";
import ServicesDetailsHeaderContent from "../../servicesDetailsHeaderContent";
import ServicesAdvantagesTitle from "../../servicesAdvantagesTitle";

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
          <ServicesDetailsHeader>
            مزایای تاکسی اینترنتی اسنپ
          </ServicesDetailsHeader>

          <ServicesDetailsHeaderContent>
            تاکسی اینترنتی اسنپ تحولی عظیم در سیستم حمل و نقل هوشمند محسوب
            می‌شود که هدفش برطرف کردن نیاز روزانه مردم برای سفر از نقطه‌ای به
            نقطه دیگر است.
          </ServicesDetailsHeaderContent>
        </div>
        <div className="mt-2 mx-4">
          <div className="mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <ServicesAdvantagesImage>
                <img
                  src={easyAndFast}
                  alt="easyAndFast"
                  height={190}
                  loading="lazy"
                />
              </ServicesAdvantagesImage>
            </div>
            <ServicesAdvantagesTitle>آسان و سریع</ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              با نصب سوپر اپلیکیشن اسنپ می‌توانید خیلی سریع و آسان، درخواست
              خودرو به مقصد مورد نظرتان را ثبت کنید.
            </ServicesAdvantagesContent>
          </div>
          <div className="mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <ServicesAdvantagesImage>
                <img src={pricing} alt="pricing" height={190} loading="lazy" />
              </ServicesAdvantagesImage>
            </div>
            <ServicesAdvantagesTitle>قیمت‌گذاری شفاف</ServicesAdvantagesTitle>

            <ServicesAdvantagesContent>
              قیمت‌گذاری در اسنپ کاملا رقابتی، منطقی و شفاف است. مبلغ هر سفر پیش
              از درخواست خودرو، اعلام خواهد شد.
            </ServicesAdvantagesContent>
          </div>
          <div className="mt-6">
            <div className="overflow-hidden flex items-center justify-center rounded-[18px] bg-[#f2f5f8]">
              <ServicesAdvantagesImage>
                <img src={support} alt="support" height={190} loading="lazy" />
              </ServicesAdvantagesImage>
            </div>
            <ServicesAdvantagesTitle>پشتیبانی تمام وقت</ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک و
              پاسخ‌دهی به تمام سوالات شما است.
            </ServicesAdvantagesContent>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxiServicesAdvantages;
