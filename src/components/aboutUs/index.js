import React, { useState } from "react";
import Header from "../header";
import { useMediaQuery } from "react-responsive";

import { Link } from "react-router-dom";

import activeCities from "../../assets/active-cities (2).jpg";

import DrawerMenu from "../drawerMenu";
import DrawerMenuContent from "../../components/banner/drowerMenuContent/index";

const AboutUs = () => {
  const [showDrawerMenu, setIsShowDrawer] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 841px)",
  });

  return (
    <>
      <DrawerMenu
        isShow={showDrawerMenu}
        onClose={() => setIsShowDrawer((prev) => !prev)}
      >
        <DrawerMenuContent onClose={() => setIsShowDrawer((prev) => !prev)} />
      </DrawerMenu>
      <Header />
      <main>
        <section className="small:flex small:flex-col medium:flex medium:flex-row-reverse medium:mt-[96px] ">
          <div className="small:bg-aboutUsBannerImage small:bg-cover small:bg-center small:min-h-[40vh] small:w-full medium:flex-[0_0_41.65%] medium:w-[41.65%] medium:max-w-[41.65%]"></div>
          <div className="small:flex small:flex-col small:py-4 small:px-6 small:bg-[#21aa58] medium:pr-[85px]">
            <h1 className="small:text-white small:text-[27px] small:font-bold small:leading-[48px] medium:text-[34px]">
              تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
            </h1>
            <p className="small:text-[15px] small:py-4 small:text-white medium:py-4 medium:text-[17px] ">
              از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیت
              سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با
              سوپراپلیکیشن اسنپ انجام دهید.
            </p>

            <div className="small:py-2 medium:hidden">
              <button
                onClick={() => setIsShowDrawer((prev) => !prev)}
                type="button"
                className="h-12 w-full text-[14px] leading-none font-bold py-2 bg-white border-none rounded-md "
              >
                دانلود اپلیکیشن اسنپ
              </button>
            </div>
            {isDesktopOrLaptop && (
              <div className="medium:flex medium:mt-8 medium:justify-between ">
                <div className="medium:w-1/2">
                  <button
                    className="medium:h-[48px] medium:min-h-[48px] medium:font-bold medium:text-white medium:px-2 medium:rounded-[6px] medium:bg-transparent"
                    style={{ border: "1px solid lightgray" }}
                  >
                    ورود به وب اپلیکیشن اسنپ
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="small:pt-10 small:px-6 small:block medium:px-[85px] medium:pt-10">
          <h2 className="small:text-[21px] small:my-8 small:opacity-[0.8]">
            درباره&zwnj;ی ما
          </h2>
          <p className="small:text-[14.2px] small:opacity-[0.8]">
            شرکت ایده گزین ارتباطات روماک، با نام تجاری اسنپ، در سال ۱۳۹۳
            راه‌اندازی شد. اسنپ شرکتی پویا و مبتنی بر داده است که از ذهن پویا و
            خلاق جوانان ایران قدرت می‌گیرد. این شرکت به عنوان راهکاری اثربخش
            برای انجام سفرهای درون شهری، فعالیت خود را با یک تیم کوچک آغاز کرد و
            در کمتر از چند سال به بزرگ‌ترین سامانه هوشمند حمل‌ونقل در ایران
            تبدیل شد. دکتر ایاد الکسار و دکتر محمود فوز هم‌بنیان‌گذاران این شرکت
            هستند. اپلیکیشن اسنپ بعد از گذشت چهار سال از شروع فعالیتش به سوپراپ
            تبدیل شد و اکنون خدمات گروه اسنپ در آن ارائه می‌شود. امکان درخواست
            خودرو، موتور، وانت، سفارش غذا، خدمات پزشکی و مشاوره آنلاین، رزرو هتل
            و اقامتگاههای ارزان، خرید بلیط هواپیما، اتوبوس و … در این اپلیکیشن
            جامع به صورت یکجا فراهم است.
          </p>
          <Link
            to="https://snapp.ir/blog/snappcoverage/"
            className="small:flex small:flex-col small:items-center small:no-underline"
          >
            <h2 className="text-[15px] my-10 text-[#00d16f]">
              اسنپ در چه شهرهایی فعال است؟
            </h2>
            <img
              src={activeCities}
              alt="activeCities"
              className="small:w-[80%] small:max-w-[550px]"
            />
          </Link>
        </section>
        <section className="small:flex small:flex-col small:items-center small:justify-center small:mt-6 small:bg-white medium:px-[85px] medium:flex medium:flex-row medium:items-center medium:justify-between medium:mt-8 medium:pb-10 ">
          <h3 className="font-bold mx-4 ">
            زندگی خودتو با اسنپ ساده&zwnj;تر کن!
          </h3>
          <div className="small:mt-10 small:no-underline small:cursor-pointer">
            <button
              type="button"
              className="small:mx-4 small:px-6 small:font-bold small:h-[48px] small:min-h-[48px] small:text-white small:border-none small:rounded-[6px] small:bg-[#00d16f] small:text-[16px] medium:hidden"
            >
              ورود به وب اپلیکیشن اسنپ(iOS)
            </button>
          </div>
          <div className=" medium:relative">
            <form className="small:hidden medium:flex medium:h-[56px] medium:min-h-[56px] medium:items-center medium:translate-Z-[0px]">
              <div className="flex-[0_0_49.98%] w-[49.98%] max-w-[49.98%] h-auto overflow-hidden">
                <div className="h-[48px] min-h-[48px] flex overflow-hidden relative items-center flex-row " style={{borderBottom:"1px solid rgb(235, 235, 235)"}}>
                  <div className="flex grow self-stretch items-center flex-row">
                    <input type="text" className="w-full h-full block grow px-2 border-none outline-none max-w-full"/>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <button className="mr-4 px-6 text-white bg-[#00d16f] h-10 min-h-10 border-none rounded-[6px] font-bold">ارسال لینک</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
