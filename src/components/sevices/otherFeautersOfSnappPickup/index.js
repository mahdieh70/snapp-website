import React from "react";
import OtherFeautersHeader from "../../otherFeautersHeader";
import OtherFeauturesHeaderContent from "../../otherFeautersHeaderContent";
import OtherFeautersTitle from "../../otherFeautersTitle";
import OtherFeautersContent from "../../otherFeautersContent";

import pickup from "../../../assets/otherFeauters/7 (1).jpg";

const OtherFeautersOfSnappPickup = () => {
  return (
    <div>
      {" "}
      <section className="flex flex-col my-8 mx-4">
        <div className="flex flex-col">
          <div
            className="flex flex-col rounded-[9px] overflow-hidden"
            style={{ backgroundColor: "rgba(6, 209, 112, 0.075)" }}
          >
            <img src={pickup} alt="bike" className="w-full h-auto mb-4" />
            <OtherFeautersHeader>امکان انتخاب نوع وانت</OtherFeautersHeader>
            <OtherFeauturesHeaderContent>
              در سرویس وانت اینترنتی اسنپ امکان استفاده از چهار نوع وانت بار
              وجود دارد: • وانت سبک (وانت پراید و وانت پیکان): مناسب برای
              جابه‌جایی بار تا 500 کیلوگرم است. • وانت سبک مسقف: برای محافظت از
              بار در برابر آفتاب یا باران کاربرد دارد. • وانت سبک کفی‌دار: مناسب
              برای جابه‌جایی بهتر و جلوگیری از آسیب به مبلمان و اثاثیه منزل است.
              • وانت سنگین (نیسان): مناسب برای بارهای سنگین و حجیم است. در صورتی
              که بار بیش از 500 کیلوگرم تا 3800 کیلوگرم باشد، ما استفاده از
              سرویس وانت سنگین را پیشنهاد می‌کنیم.
            </OtherFeauturesHeaderContent>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4">
            <OtherFeautersTitle>انتقال وسایل و بار با اسنپ</OtherFeautersTitle>
            <OtherFeautersContent>
              اگر در حال جابه‌جایی وسایل خانه خود هستید یا می‌خواهید وسیله‌ای
              سنگین را از محل کار خود به نقطه‌ای از شهر انتقال دهید، وانت بار
              آنلاین اسنپ بهترین انتخاب ممکن است. بنابراین، هیچ‌گونه محدودیتی
              نسبت به نوع کاربری ساختمان جهت انتقال بار وجود ندارد و کلیه
              مشتریان می‌توانند وسایل خود را از منزل، شرکت یا مغازه خود به مکان
              دیگری منتقل کنند. جابه‌جایی بار با سرویس وانت‌بار اسنپ تا سقف
              ۱۵میلیون تومان تضمین می‌شود.
            </OtherFeautersContent>
          </div>
          <div className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4">
            <OtherFeautersTitle>
              وانت بار در تهران و سراسر کشور
            </OtherFeautersTitle>
            <OtherFeautersContent>
              درخواست اینترنتی وانت سبک اسنپ در شهرهای تهران، کرج، شیراز، مشهد،
              اصفهان، اهواز، تبریز، قم، کرمان، گیلان، ارومیه، همدان، گرگان،
              هرمزگان، اراک، قزوین، کرمانشاه، مازندران، بیرجند، زنجان، بجنورد
              اردبیل، خرم‌آباد، سنندج و بوشهر امکان‌پذیر است. همچنین، می‌توان از
              سرویس وانت سنگین اسنپ در شهرهای تهران، کرج، شیراز، مشهد، اصفهان،
              قم، تبریز و اهواز نیز از طریق سوپراَپ اسنپ استفاده کرد. امکان
              درخواست سرویس وانت بین‌استانی در اپلیکیشن اسنپ فراهم است؛ جزئیات
              بیشتر در مورد شهرهای تحت پوشش را در این لینک بخوانید.
            </OtherFeautersContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherFeautersOfSnappPickup;
