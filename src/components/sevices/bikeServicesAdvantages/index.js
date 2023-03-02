import React from "react";

//components
import ServicesDetailsHeader from "../../servicesDetailsHeader";
import ServicesDetailsHeaderContent from "../../servicesDetailsHeaderContent";
import ServicesAdvantagesImage from "../../servicesAdvantagesImage";
import ServicesAdvantagesTitle from "../../servicesAdvantagesTitle";
import ServicesAdvantagesContent from "../../servicesAdvantagesContent";

//images
import easyAndFast from "../../../assets/taxiAdvantagesImage/3 (1).png";
import pricing from "../../../assets/taxiAdvantagesImage/4 (1).png";
import support from "../../../assets/taxiAdvantagesImage/5 (1).png";

const BikeServicesAdvantages = () => {
  return (
    <>
      <section className="min-h[700px] flex flex-col leading-[1.7]">
        <div className="bg-bikeAdvantagesImage bg-cover bg-left h-[30vh]"></div>
        <div className="flex flex-col mx-4 ">
          <ServicesDetailsHeader>
            مزایای استفاده از پیک موتوری اسنپ
          </ServicesDetailsHeader>
          <ServicesDetailsHeaderContent>
            سوپراپلیکشن اسنپ روشی ساده و کاربردی برای سفر با موتور «اسنپ‌بایک» و
            ارسال مرسولات «اسنپ‌باکس» را به صورت کاملا آنلاین، پیش روی شهروندان
            قرار داده است.
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
              اسنپ با اطمینان خاطر و در سریع‌ترین زمان ممکن، مرسولات شما را به
              موقع به مقصد انتخابی می‌رساند.
            </ServicesAdvantagesContent>
          </div>
          <div className="mt-6">
            <ServicesAdvantagesImage>
              <img src={pricing} alt="pricing" height={190} loading="lazy" />
            </ServicesAdvantagesImage>
            <ServicesAdvantagesTitle>قیمت‌گذاری شفاف</ServicesAdvantagesTitle>
            <ServicesAdvantagesContent>
              قیمت‌گذاری در اسنپ کاملاً شفاف است و شما می‌توانید با پرداخت هزینه
              معقولانه، بسته خود را ارسال کنید.
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
    </>
  );
};

export default BikeServicesAdvantages;
