import React, { useState } from "react";

import HeaderOfRequest from "../../headerOfrequest";
import RadioButtons from "../../radioButtons/index";
import ContentOfRequest from "../../contentOfRequest";
//images
import recordImage from "../../../assets/taxiRequestImages/6-3.jpg";
import backAndForth from "../../../assets/taxiRequestImages/6-2.jpg";
import stopImage from "../../../assets/taxiRequestImages/6-1.jpg";

const RegistrationOfRequest = () => {
  const [topping, setTopping] = useState("record");
  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };

  return (
    <>
      <section
        className="min-h-[400px] h-max flex flex-col mt-10 mx-4"
        style={{ contentVisibility: "auto" }}
      >
        <div className="w-full overflow-x-scroll flex">
          <RadioButtons
            changed={onOptionChange}
            id="record"
            isSelected={topping === "record"}
            label="ثبت"
            value="record"
          />
          <RadioButtons
            changed={onOptionChange}
            id="backAndForth"
            isSelected={topping === "backAndForth"}
            label="رفت و برگشت"
            value="backAndForth"
          />
          <RadioButtons
            changed={onOptionChange}
            id="stop"
            isSelected={topping === "stop"}
            label="توقف"
            value="stop"
          />
        </div>

        <div className="flex relative w-full">
          {topping === "record" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>ثبت درخواست تاکسی اینترنتی</HeaderOfRequest>
                <ContentOfRequest>
                  در سوپر اپلیکیشن اسنپ، آیکن «اسنپ!» را انتخاب کنید. ابتدا آدرس
                  مبدأ و سپس مقصد خود را تعیین کنید. حالا می‌توانید نوع خودرو،
                  مبلغ، گزینه‌های سفر و غیره را مشاهده و ویرایش کنید.
                </ContentOfRequest>
              </div>
              <img
                src={recordImage}
                alt="record"
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
                  می‌توانید در قسمت گزینه‌های سفر، درخواست رفت و برگشت را انتخاب
                  کنید. در این حالت، تاکسی با رساندن شما به مقصد منتظر می‌ماند
                  تا دوباره شما را به مبدأ برگرداند.
                </ContentOfRequest>
              </div>
              <img
                src={backAndForth}
                alt="record"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}
          {topping === "stop" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>ثبت توقف در مسیر</HeaderOfRequest>
                <ContentOfRequest>
                  اگر برای سوار شدن و رسیدن به تاکسی اسنپ زمان بیشتری لازم دارید
                  یا باید برای چند دقیقه در محلی توقف داشته باشید، نیاز به اتمام
                  سفر و درخواست مجدد برای تاکسی اینترنتی نیست و فقط کافی است مدت
                  زمان توقف را در اپلیکیشن ثبت کنید.
                </ContentOfRequest>
              </div>
              <img
                src={stopImage}
                alt="record"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RegistrationOfRequest;
