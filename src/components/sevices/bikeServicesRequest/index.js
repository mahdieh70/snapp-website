import React, { useState } from "react";
import RadioButtons from "../../radioButtons";
import HeaderOfRequest from "../../headerOfrequest";
import ContentOfRequest from "../../contentOfRequest";

import bikeRequest from "../../../assets/taxiRequestImages/bikeRequest.jpg";
import destination from "../../../assets/taxiRequestImages/6-2 (1).jpg";
import backAndForth from "../../../assets/taxiRequestImages/6-3 (1).jpg";

const BikeServicesRequest = () => {
  const [topping, setTopping] = useState("record");
  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };
  return (
    <div>
      <section
        className="min-h-[400px] h-max flex flex-col mt-10 mx-4"
        style={{ contentVisibility: "auto" }}
      >
        <div className="w-full overflow-x-scroll flex">
          <RadioButtons
            changed={onOptionChange}
            id="record"
            isSelected={topping === "record"}
            label="درخواست پیک"
            value="record"
          />
          <RadioButtons
            changed={onOptionChange}
            id="stop"
            isSelected={topping === "stop"}
            label="ثبت مقصد"
            value="stop"
          />
          <RadioButtons
            changed={onOptionChange}
            id="backAndForth"
            isSelected={topping === "backAndForth"}
            label="رفت و برگشت"
            value="backAndForth"
          />
        </div>

        <div className="flex relative w-full">
          {topping === "record" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>درخواست پیک موتوری</HeaderOfRequest>
                <ContentOfRequest>
                  در سوپر اپلیکیشن اسنپ، آیکن «اسنپ» برای جابه‌جای مسافر و آیکن
                  «اسنپ باکس» را برای جابه‌جایی کالا انتخاب کنید. ابتدا آدرس
                  مبدأ و سپس مقصد خود را تعیین کنید. در ادامه می‌توانید مبلغ،
                  گزینه‌های سفر و غیره را مشاهده و ویرایش کنید.
                </ContentOfRequest>
              </div>
              <img
                src={bikeRequest}
                alt="request"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}

          {topping === "stop" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>ثبت مقصدهای مختلف</HeaderOfRequest>
                <ContentOfRequest>
                  امکان افزودن مقصد‌های بیشتر وجود دارد و می‌توانید چندین بسته
                  را به مقاصد مختلف در سراسر شهر ارسال کنید. این قابلیت به کاهش
                  زمان و سرعت ارسال مرسولات کمک می‌کند.
                </ContentOfRequest>
              </div>
              <img
                src={destination}
                alt="destination"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}
          {topping === "backAndForth" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>درخواست رفت و برگشت</HeaderOfRequest>
                <ContentOfRequest>
                  ممکن است نیاز باشد بسته‌ای را به مقصدی ارسال کنید و در عوض از
                  مقصد بسته یا رسید امضا شده را دریافت کنید! برای این کار،
                  سوپراپ اسنپ امکان رفت و برگشت مسیر را نیز فراهم و در اختیار
                  شما قرار داده است.
                </ContentOfRequest>
              </div>
              <img
                src={backAndForth}
                alt="backAndForth"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BikeServicesRequest;
