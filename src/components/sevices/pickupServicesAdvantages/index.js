import React from "react";

import ServicesDetailsHeader from "../../servicesDetailsHeader";
import ServicesDetailsHeaderContent from "../../servicesDetailsHeaderContent";
import ServicesAdvantagesImage from "../../servicesAdvantagesImage";
import ServicesAdvantagesTitle from "../../servicesAdvantagesTitle";
import ServicesAdvantagesContent from "../../servicesAdvantagesContent";
import easyAndFast from "../../../assets/taxiAdvantagesImage/3 (2).png";
import pricing from "../../../assets/taxiAdvantagesImage/4 (2).png";
import support from "../../../assets/taxiAdvantagesImage/5 (2).png";

const PickupServicesAdvantages = () => {
  return (
    <div>
      <section className="min-h[700px] flex flex-col leading-[1.7]">
        <div className="bg-pickupServicesAdvantages bg-cover bg-left h-[30vh]"></div>
        <div className="flex flex-col mx-4 ">
          <ServicesDetailsHeader>
            ویژگی‌های وانت بار اینترنتی اسنپ
          </ServicesDetailsHeader>
          <ServicesDetailsHeaderContent>
            وانت بار اینترنتی اسنپ با رویکرد توسعه هوشمندسازی شهری و ارائه
            راهکارهای باکیفیت و مقرون به صرفه در حیطه جابه‌جای بار راه اندازی و
            برای راحتی حال مشتریان و ارائه خدمات سریع و ارزان در دسترس کلیه
            شهروندان عزیز است.
          </ServicesDetailsHeaderContent>
        </div>
        <div className="mt-2 mx-4">
          <div className="mt-6">
            <ServicesAdvantagesImage>
              <img
                src={easyAndFast}
                alt="easyAndFast"
                height={190}
                loading="lazy"
              />
            </ServicesAdvantagesImage>
            <ServicesAdvantagesTitle>
              سریع و قابل اعتماد
            </ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              جابه‌جایی بار در اسنپ به لطف وجود سیستم حمل بار سریع و مطمئن، در
              نهایت احتیاط و توسط نیروهای باتجربه انجام می‌شود.
            </ServicesAdvantagesContent>
          </div>
          <div className="mt-6">
            <ServicesAdvantagesImage>
              <img src={pricing} alt="pricing" height={190} loading="lazy" />
            </ServicesAdvantagesImage>
            <ServicesAdvantagesTitle>قیمت‌گذاری شفاف</ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              ساختار قیمت‌گذاری در اسنپ کاملاً شفاف است و می توانید با کمترین
              هزینه، بار خود را از نقطه‌ای به نقطه دیگر منتقل کنید.
            </ServicesAdvantagesContent>
          </div>
          <div className="mt-6">
            <ServicesAdvantagesImage>
              <img src={support} alt="support" height={190} loading="lazy" />
            </ServicesAdvantagesImage>
            <ServicesAdvantagesTitle>پشتیبانی تمام وقت</ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              پشتیبانی اسنپ به صورت ۲۴ ساعته و در تمام روزهای هفته، آماده کمک و
              پاسخ‌دهی به تمام سوالات شما است.
            </ServicesAdvantagesContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PickupServicesAdvantages;
