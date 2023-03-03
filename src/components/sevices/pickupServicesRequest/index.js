import React, { useState } from "react";
import RadioButtons from "../../radioButtons";
import HeaderOfRequest from "../../headerOfrequest";
import ContentOfRequest from "../../contentOfRequest";

import pickupRequest from "../../../assets/taxiRequestImages/pickupRequest.jpg";
import multieRequest from "../../../assets/taxiRequestImages/6-2 (2).jpg";
import destination from "../../../assets/taxiRequestImages/6-3 (2).jpg";

const PickupServicesRequest = () => {
  const [topping, setTopping] = useState("request");
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
            id="request"
            isSelected={topping === "request"}
            label="درخواست وانت"
            value="request"
          />
          <RadioButtons
            changed={onOptionChange}
            id="stop"
            isSelected={topping === "stop"}
            label="ثبت درخواست"
            value="stop"
          />
          <RadioButtons
            changed={onOptionChange}
            id="backAndForth"
            isSelected={topping === "backAndForth"}
            label="ثبت مقصد"
            value="backAndForth"
          />
        </div>

        <div className="flex relative w-full">
          {topping === "request" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>درخواست وانت بار اسنپ</HeaderOfRequest>
                <ContentOfRequest>
                  ابتدا وارد سوپراپ اسنپ شوید و آیکن وانت بار را انتخاب و سفارش
                  جدید خود را ثبت کنید. اکنون وارد صفحه‌ای می‌شوید که باید مبدأ،
                  مقصد و نوع وانت را مشخص کنید.
                </ContentOfRequest>
              </div>
              <img
                src={pickupRequest}
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
                <HeaderOfRequest>ثبت همزمان چند درخواست</HeaderOfRequest>
                <ContentOfRequest>
                  می‌توانید در زمان ثبت سفارش وانت بار، از قابلیت ثبت همزمان چند
                  سفارش استفاده کنید. بعد از ثبت اولین سفارش می‌توانید سفارش‌های
                  بعدی خود را یکی پس از دیگری ثبت کنید.
                </ContentOfRequest>
              </div>
              <img
                src={multieRequest}
                alt="multieRequest"
                height={200}
                loading="lazy"
                className="rounded-[9px] my-8"
              />
            </div>
          )}
          {topping === "backAndForth" && (
            <div className="flex flex-col items-center w-full">
              <div className="min-w-[30vw] flex flex-col text-right ">
                <HeaderOfRequest>ثبت مقصدهای مختلف</HeaderOfRequest>
                <ContentOfRequest>
                  امکان انتخاب چند مقصد مختلف در اپلیکیشن اسنپ وجود دارد. شما
                  می‌توانید تعدادی از بارهای خود را به یک مسیر و تعدادی دیگر را
                  به مسیر دیگری منتقل کنید. این قابلیت می‌تواند در کاهش زمان و
                  سرعت جابه‌جایی بار کمک شایانی کند.
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
        </div>
      </section>
    </div>
  );
};

export default PickupServicesRequest;
