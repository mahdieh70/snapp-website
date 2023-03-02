import React from "react";
import OtherFeautersHeader from "../../otherFeautersHeader";
import OtherFeauturesHeaderContent from "../../otherFeautersHeaderContent";
import OtherFeautersTitle from "../../otherFeautersTitle";
import OtherFeautersContent from "../../otherFeautersContent";

import bike from "../../../assets/taxiRequestImages/7.jpg";

const OtherFeautersOfSnappBike = () => {
  return (
    <div>
      <section className="flex flex-col my-8 mx-4">
        <div className="flex flex-col">
          <div
            className="flex flex-col rounded-[9px] overflow-hidden"
            style={{ backgroundColor: "rgba(6, 209, 112, 0.075)" }}
          >
           <img src={bike} alt="bike" className="w-full h-auto mb-4"/>
            <OtherFeautersHeader>
              فعال بودن در بیشتر شهرهای کشور
            </OtherFeautersHeader>
            <OtherFeauturesHeaderContent>
              پیک موتوری اسنپ در حال حاضر در شهرهای تهران، مشهد، اصفهان، قم،
              شیراز، کرج، اهواز، تبریز‌، یزد، کرمان، گیلان، هرمزگان، اراک،
              قزوین، کرمانشاه، ارومیه، بیرجند، زنجان، اردبیل، خرم‌آباد، سنندج و
              بجنورد فعال است. اسنپ در تلاش است تا خدمات خود را به کلیه شهرهای
              کشور گسترش دهد.
            </OtherFeauturesHeaderContent>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4">
            <OtherFeautersTitle>
              سفرهای درون شهری با پیک موتوری اسنپ!
            </OtherFeautersTitle>
            <OtherFeautersContent>
              جابه‌جایی افراد در شهرهای بزرگ و پرجمعیت مانند تهران زمان‌بر است.
              ممک است برای شما هم پیش آمده باشد که باید به سرعت به نقطه‌ای از
              شهر بروید، اما ترافیک باعث دیرتر رسیدن و بهم ریختن زمانبندی‌تان
              شده است. برای حل این مشکل، پیک موتوری اسنپ امکان تردد مسافران را
              از طریق اسنپ بایک فراهم کرده است. برای جابه‌جایی سریع به هر نقطه
              از شهر می‌توانید از سوپراپ اسنپ استفاده کنید
            </OtherFeautersContent>
          </div>
          <div className="flex flex-col justify-around rounded-[9px] my-4 p-4 text-[#3f3f3f] bg-[#f5f5f6] h-2/4">
            <OtherFeautersTitle>
              ارسال بسته در یک چشم برهم زدن
            </OtherFeautersTitle>
            <OtherFeautersContent>
              تعداد قابل‌توجهی پیک‌ موتورسوار در اسنپ‌باکس در مناطق مختلف شهر
              فعالیت می‌کنند تا در مدت زمان کوتاهی بسته شما را دریافت کنند. آنها
              با سرعت عمل بالا، بسته شما را به مقصد مورد نظر تحویل می‌دهند. پس
              از تحویل بسته به گیرنده، پیام رسیدن پیک موتوری و تحویل بسته به
              مقصد برای شما ارسال می‌شود تا خیالتان از بابت رسیدن بسته به دست
              صاحبش راحت شود. انتقال مرسوله با سرویس موتور اسنپ تا سقف ۵ میلیون
              تومان تضمین می‌شود.
            </OtherFeautersContent>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherFeautersOfSnappBike;
