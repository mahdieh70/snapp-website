import React from "react";
import Collapsible from "../../collapsible";

const Questions = () => {
  return (
    <>
      <section className="py-10 px-4 bg-[#f5f5f6] block">
        <h2 className="text-[19px] opacity-[0.8] my-8">
          پرسش&zwnj;های پرتکرار
        </h2>
        <div>
          <div>
            <Collapsible label="نحوه استفاده از سرویس تاکسی اینترنتی اسنپ چگونه است؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                در ابتدا سوپراَپ اسنپ را روی گوشی همراه خود نصب کنید. سپس روی
                آیکون اسنپ! ضربه بزنید. ابتدا آدرس مبدأ و سپس مقصد خود را تعیین
                کنید. حالا می‌توانید نوع خودرو، مبلغ، گزینه‌های سفر و غیره را
                مشاهده و ویرایش کنید.
              </pre>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="سرویس تاکسی اینترنتی اسنپ دارای چند نوع خودرو است؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                در سوپر اپلیکیشن اسنپ می‌توانید نوع خودرو را در قالب «اسنپ اکو»
                و «اسنپ اکوپلاس» انتخاب کنید. اسنپ اکو شامل استفاده از خودروهای
                معمولی با قیمت مناسب است و اسنپ اکوپلاس شامل درخواست سفارش برای
                خودروهای با کیفیت و قیمت بیشتر است. خودروهای پلاس کیفیت بالاتری
                دارند و مدل خودروها از سال 85 به بالاست.
              </pre>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="قیمت‌ها در تاکسی اینترنتی اسنپ چگونه تعیین می‌شود؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                قیمت هر سفر در اسنپ براساس چهار فاکتور اعم از «ورودی سفر»،
                «مسافت سفر»، «مدت زمان سفر» و «نسبت عرضه و تقاضا» تعیین می‌شود.
                ورودی سفر، مدت زمان سفر و مسافت سفر، «قیمت پایه» را تشکیل
                می‌دهند که هرچند ورودی و مسافت در یک سفر ثابت همیشه یکسان هستند.
                اما مدت زمان سفر با توجه به عواملی مانند ترافیک یا شرایط جوی خاص
                متغیر است. در نتیجه قیمت پایه سفرها در شرایطی که ورودی سفر و
                مسافت یکسان باشد به دلیل ترافیک و تغییر مدت زمان سفر می‌تواند
                تغییر کند. این قیمت پایه‌ متغیر خود متأثر از نسبت عرضه و
                تقاضاست. یک الگوریتم به‌صورت هوشمند نسبت عرضه و تقاضا را بررسی
                می‌کند و با توجه به آن به قیمت پایه اضافه یا از آن کم می‌شود.
              </pre>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="تاکسی اینترنتی اسنپ در چه شهرهایی فعال است؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                تاکسی اینترنتی اسنپ در تمام ۳۱ استان ایران، سرویس آنلاین
                حمل‌ونقل شهری را ارئه می‌دهد.
              </pre>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="آیا امکان ردیابی خودرو از مبدا تا مقصد وجود دارد؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                بله، از طریق اپلیکیشن اسنپ می‌توانید حرکت خودرو را ردیابی کنید.
              </pre>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="چطور می‌توانم با پشتیبانی تماس بگیرم؟">
              <pre
                className="py-4 px-2 text-[#3f3f3f] text-[12.7px] bg-white whitespace-pre-wrap"
                style={{ borderTop: "1px solid #e5e5e5" }}
              >
                برای ارتباط مستقیم با پشتیبانی می‌توانید با شماره ۹۱۰۳۹۰۰۰-۰۲۱
                تماس گرفته و منتظر پاسخگویی همکاران پشتیبانی ما باشید یا در
                صندوق صوتی ما پیغام ارسال کنید.
              </pre>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
