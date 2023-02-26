import React, { useState } from "react";

//images
import taxiImage from "../../assets/cab.svg";
import bike from "../../assets/bike.svg";
import pickUp from "../../assets/Pickup-new.png";
import food from "../../assets/food.svg";
import market from "../../assets/market.svg";
import express from "../../assets/market (1).svg";
import domesticTicket from "../../assets/Domestic Trip.png";
import foreignTicket from "../../assets/Domestic Trip (1).png";
import doctor from "../../assets/doctor.svg";
import hotel from "../../assets/hotel.png";
import residence from "../../assets/trip.svg";
import shopCenter from "../../assets/new Shop.png";
import busTicket from "../../assets/bus.png";
import trainTicket from "../../assets/train.png";
import snappClub from "../../assets/club.svg";
import investment from "../../assets/Service Icon.png";
import moving from "../../assets/Moving.png";
import pay from "../../assets/pay.svg";
import snappTicket from "../../assets/ticket-icon (1).svg";

const Services = () => {
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const isButtonVisible = visible < 19;

  return (
    <div>
      <section className="bg-[#f2f5f8] flex flex-col mb-10">
        <h3 className="text-center py-8">
          یک اپلیکیشن، برای تمام نیاز&zwnj;ها
        </h3>
        <div
          className={
            isButtonVisible
              ? "flex justify-center flex-wrap relative max-h-[510px] overflow-hidden"
              : "flex justify-center flex-wrap relative max-h-[9999px]"
          }
        >
          <a href="#" className="services-box">
            <img
              src={taxiImage}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">تاکسی اینترنتی</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={bike}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">پیک موتوری</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={pickUp}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">درخواست وانت </h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={food}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">سفارش آنلاین غذا</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={market}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">سوپرمارکت آنلاین</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={express}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">اسنپ اکسپرس</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={domesticTicket}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">بلیط پرواز داخلی</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={foreignTicket}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">بلیط پرواز خارجی</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={doctor}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">دکتر</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={hotel}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">رزرو هتل</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={residence}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">رزرو اقامتگاه</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={shopCenter}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">فروشگاه</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={busTicket}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">بلیط اتوبوس</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={trainTicket}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">بلیط قطار</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={snappClub}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text"> اسنپ! کلاب</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={investment}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">سرمایه گذاری</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={moving}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">اسباب&zwnj;کشی منزل</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img src={pay} alt="taxi" width={48} height={48} className="mx-1" />
            <div>
              <h3 className="servicesBox-text">سرویس اعتباری</h3>
            </div>
          </a>
          <a href="#" className="services-box">
            <img
              src={snappTicket}
              alt="taxi"
              width={48}
              height={48}
              className="mx-1"
            />
            <div>
              <h3 className="servicesBox-text">اسنپ تیکت</h3>
            </div>
          </a>
          {isButtonVisible ? (
            <div
              className="absolute bottom-0 w-full h-[30%] flex justify-center items-end text-center"
              style={{
                background:
                  "linear-gradient(0deg,rgb(255,255,255)0%,rgba(0,212,255,0)100%",
              }}
            >
              <button
                onClick={showMoreItems}
                type="button"
                className="mb-6 px-6 bg-white text-green-500 border-solid border-green-500 rounded-md font-bold h-12 min-h-12 leading-none w-auto cursor-pointer overflow-hidden relative max-w-full select-none whitespace-nowrap text-ellipsis"
              >
                مشاهده همه
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Services;
