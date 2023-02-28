import React, { useState } from "react";
import video from "../../../assets/video/1Khodro.mp4";

const TaxiServicesNews = () => {
 
  return (
    <>
      <section className="flex flex-col my-8 mx-4">
        <div className="flex flex-col">
          <div
            className="flex flex-col rounded-[9px] overflow-hidden"
            style={{ backgroundColor: "rgba(6, 209, 112, 0.075)" }}
          >
            <video controls className="w-full mb-4">
              <source src={video} />
              Sorry, your browser doesn't support videos.
            </video>
            <h3 className="my-auto text-center text-5">
              خبرهای جدید از تاکسی اینترنتی اسنپ
            </h3>
            <pre className="whitespace-pre-wrap mb-auto mt-4 pb-6 px-4 text-[14px] opacity-[0.7]  leading-[2]">
              با اطلاع از تازهترین اخبار مربوط به تاکسی اینترنتی اسنپ می‌توانید
              از قابلیتها و ویژگی‌های جدید این پلتفرم باخبر شوید. با به روز نگه
              داشتن اطلاع خود، امکان استفاده همه جانبه از سوپر اپلیکیشن اسنپ را
              خواهید داشت. با وبلاگ اسنپ همراه باشید.
            </pre>
          </div>
        </div>
        <div className="flex flex-col">
          <div
           
            className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4"
          >
            <h3 className="text-center text-5 mb-4">
              حفظ امنیت مسافران در طول سفر
            </h3>
            <pre className="whitespace-pre-wrap text-[14.2px] leading-[2] opacity-[0.9]">
              تاکسی اینترنتی اسنپ به منظور تأمین امنیت مسافران، «سرویس امنیت
              سفر» را به اپلیکیشن خود اضافه کرده است. با استفاده از این قابلیت،
              امکان تماس مستقیم با تیم ویژهی امنیت سفر، امکان به اشتراک گذاشتن
              موقعیت مکانی و تماس مستقیم با اورژانس برای مسافران فراهم شده است.
              سرویس امنیت سفر، با نشان یک سپر آبیرنگ در سمت چپ نقشه نمایش داده
              می‌شود. این سرویس تمام اقدامات و امکانات امنیتی اسنپ را به صورت
              متمرکز در خود جای میدهد.
            </pre>
          </div>
          <div
           
            className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4"
          >
            <h3 className="text-center text-5 mb-4">
              امکان پرداخت نقدی و آنلاین
            </h3>
            <pre className="whitespace-pre-wrap text-[14.2px] leading-[2] opacity-[0.9]">
              همۀ ما گاهی اوقات پول نقد در جیب نداریم یا به دلیل شرایط همه گیری
              کرونا، ترجیح میدهیم مبلغ را آنلاین پرداخت کنیم. داشتن آزادی عمل در
              نوع پرداخت می‌تواند به قابلیت استفاده راحت از خدمات تاکسی اینترنتی
              بیفزاید. در سوپر اپلیکیشن اسنپ مسافران می‌توانند مبلغ سفر خود را
              به صورت پرداخت نقدی، آنلاین و یا از طریق کیف پول آپ پرداخت کنند.
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaxiServicesNews;
