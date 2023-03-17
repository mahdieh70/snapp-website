import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

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

import { Link } from "react-router-dom";

const Services = () => {
  const [visible, setVisible] = useState(12);

  const isMobile = useMediaQuery({
    query: "(max-width: 841px)",
  });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const isButtonVisible = visible < 19;

  return (
    <>
      <section className="bg-[#f2f5f8] flex flex-col mb-10 overflow-hidden medium:px-[85px] ">
        <h3 className="small:text-center small:py-8 medium:py-10 medium:text-[33px] medium:opacity-[0.8] medium:leading-[52px] medium:font-bold medium:text-center">
          یک اپلیکیشن، برای تمام نیاز&zwnj;ها
        </h3>
        {isMobile ? (
          <div
            className={
              isButtonVisible
                ? "flex justify-center flex-wrap relative max-h-[510px] overflow-hidden"
                : "flex justify-center flex-wrap relative max-h-[9999px]"
            }
          >
            <Link to="/taxiServices" className="services-box">
              <img
                src={taxiImage}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">تاکسی اینترنتی</h3>
              </div>
            </Link>
            <Link to="/bikeServices" className="services-box">
              <img
                src={bike}
                alt="bike"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">پیک موتوری</h3>
              </div>
            </Link>
            <Link to="/pickupServices" className="services-box">
              <img
                src={pickUp}
                alt="pickUp"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">درخواست وانت </h3>
              </div>
            </Link>
            <Link to="/foodServices" className="services-box">
              <img
                src={food}
                alt="food"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سفارش آنلاین غذا</h3>
              </div>
            </Link>
            <Link to="/marketServices" className="services-box">
              <img
                src={market}
                alt="market"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سوپرمارکت آنلاین</h3>
              </div>
            </Link>
            <Link to="/expressServices" className="services-box">
              <img
                src={express}
                alt="express"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">اسنپ اکسپرس</h3>
              </div>
            </Link>
            <Link to="/domestickServices" className="services-box">
              <img
                src={domesticTicket}
                alt="domestic"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">بلیط پرواز داخلی</h3>
              </div>
            </Link>
            <Link to="/foreignServices" className="services-box">
              <img
                src={foreignTicket}
                alt="foreign"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">بلیط پرواز خارجی</h3>
              </div>
            </Link>
            <Link to="/doctorServices" className="services-box">
              <img
                src={doctor}
                alt="doctor"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">دکتر</h3>
              </div>
            </Link>
            <Link to="/hotelServices" className="services-box">
              <img
                src={hotel}
                alt="hotel"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">رزرو هتل</h3>
              </div>
            </Link>
            <Link to="/residenceServices" className="services-box">
              <img
                src={residence}
                alt="residence"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">رزرو اقامتگاه</h3>
              </div>
            </Link>
            <Link to="/shopCenterServices" className="services-box">
              <img
                src={shopCenter}
                alt="shopCenter"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">فروشگاه</h3>
              </div>
            </Link>
            <Link to="/busticketServices" className="services-box">
              <img
                src={busTicket}
                alt="bus"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">بلیط اتوبوس</h3>
              </div>
            </Link>
            <Link to="/trainServices" className="services-box">
              <img
                src={trainTicket}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">بلیط قطار</h3>
              </div>
            </Link>
            <Link to="/clubServices" className="services-box">
              <img
                src={snappClub}
                alt="club"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text"> اسنپ! کلاب</h3>
              </div>
            </Link>
            <Link to="/investmentServices" className="services-box">
              <img
                src={investment}
                alt="investment"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سرمایه گذاری</h3>
              </div>
            </Link>
            <Link to="/movingServices" className="services-box">
              <img
                src={moving}
                alt="moving"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">اسباب&zwnj;کشی منزل</h3>
              </div>
            </Link>
            <Link to="/payServices" className="services-box">
              <img
                src={pay}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سرویس اعتباری</h3>
              </div>
            </Link>
            <Link to="/snappTicketServices" className="services-box">
              <img
                src={snappTicket}
                alt="snappTicket"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">اسنپ تیکت</h3>
              </div>
            </Link>
            {isButtonVisible ? (
              <div
                className="absolute bottom-0 w-full h-[30%] flex justify-center items-end text-center"
                style={{
                  background:
                    "linear-gradient(0deg,rgb(255,255,255)0%,rgba(0,212,255,0)100%",
                }}
              >
                {isMobile && (
                  <button
                    onClick={showMoreItems}
                    type="button"
                    className="mb-6 px-6 bg-white text-green-500 border-solid border-green-500 rounded-md font-bold h-12 min-h-12 leading-none w-auto cursor-pointer overflow-hidden relative max-w-full select-none whitespace-nowrap text-ellipsis"
                  >
                    مشاهده همه
                  </button>
                )}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center text-center">
            <Link to="/taxiServices" className="services-box">
              <img
                src={taxiImage}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">تاکسی اینترنتی</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">امکان درخواست آنلاین خودرو با اسنپ</p>
              </div>
            </Link>
            <Link to="/bikeServices" className="services-box">
              <img
                src={bike}
                alt="bike"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">پیک موتوری</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">حمل و نقل با اسنپ</p>
              </div>
            </Link>
            <Link to="/pickupServices" className="services-box">
              <img
                src={pickUp}
                alt="pickUp"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">درخواست وانت </h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">حمل و نقل با اسنپ</p>
              </div>
            </Link>
            <Link to="/foodServices" className="services-box">
              <img
                src={food}
                alt="food"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سفارش آنلاین غذا</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">سفارش غذا، نان و شیرینی با اسنپ</p>
              </div>
            </Link>
            <Link to="/marketServices" className="services-box">
              <img
                src={market}
                alt="market"
                width={48}
                height={48}
                className="mx-2"
              />
              <div>
                <h3 className="servicesBox-text">سوپرمارکت آنلاین</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">تهیه اقلام روزانه با اسنپ</p>
              </div>
            </Link>
            <Link to="/expressServices" className="services-box">
              <img
                src={express}
                alt="express"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">اسنپ اکسپرس</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">تحویل کمتر از ۳۰ دقیقه</p>
              </div>
            </Link>
            <Link to="/domestickServices" className="services-box">
              <img
                src={domesticTicket}
                alt="domestic"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">بلیط پرواز داخلی</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/foreignServices" className="services-box">
              <img
                src={foreignTicket}
                alt="foreign"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">بلیط پرواز خارجی</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/doctorServices" className="services-box">
              <img
                src={doctor}
                alt="doctor"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">دکتر</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">درمان با اسنپ</p>
              </div>
            </Link>
            <Link to="/hotelServices" className="services-box">
              <img
                src={hotel}
                alt="hotel"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">رزرو هتل</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/residenceServices" className="services-box">
              <img
                src={residence}
                alt="residence"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">رزرو اقامتگاه</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/shopCenterServices" className="services-box">
              <img
                src={shopCenter}
                alt="shopCenter"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">فروشگاه</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">خرید از فروشگاه های معتبر شهر</p>
              </div>
            </Link>
            <Link to="/busticketServices" className="services-box">
              <img
                src={busTicket}
                alt="bus"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">بلیط اتوبوس</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/trainServices" className="services-box">
              <img
                src={trainTicket}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">بلیط قطار</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">گردشگری با اسنپ</p>
              </div>
            </Link>
            <Link to="/clubServices" className="services-box">
              <img
                src={snappClub}
                alt="club"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text"> اسنپ! کلاب</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">باشگاه مشتریان اسنپ</p>
              </div>
            </Link>
            <Link to="/investmentServices" className="services-box">
              <img
                src={investment}
                alt="investment"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">سرمایه گذاری</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">خدمات غیرحضوری بورس و سرمایه گذاری</p>
              </div>
            </Link>
            <Link to="/movingServices" className="services-box">
              <img
                src={moving}
                alt="moving"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">اسباب&zwnj;کشی منزل</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">حمل و نقل با اسنپ</p>
              </div>
            </Link>
            <Link to="/payServices" className="services-box">
              <img
                src={pay}
                alt="taxi"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">سرویس اعتباری</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">پرداخت با اسنپ</p>
              </div>
            </Link>
            <Link to="/snappTicketServices" className="services-box">
              <img
                src={snappTicket}
                alt="snappTicket"
                width={48}
                height={48}
                className="mx-2"
              />
              <div className="flex flex-col items-center justify-center text-center pointer-events-auto">
                <h3 className="servicesBox-text">اسنپ تیکت</h3>
                <p className="text-center text-[12px] text-[#a3a3a3]">خرید آنلاین بلیط با اسنپ</p>
              </div>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Services;
