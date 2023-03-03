import React from "react";
import Collapsible from "../../collapsible";
import QuestionsContent from "../../QuestionsContent";

const BikeServicesQuestions = () => {
  return (
    <>
      <section className="py-10 px-4 bg-[#f5f5f6] block">
        <h2 className="text-[19px] opacity-[0.8] my-8">
          پرسش&zwnj;های پرتکرار
        </h2>
        <div>
          <div>
            <Collapsible label="چگونه از اسنپ پیک موتوری بگیریم؟">
              <QuestionsContent>
                ابتدا وارد سوپراپ اسنپ شوید و آیکن اسنپ بایک را انتخاب کنید. بعد
                از کلیک بر روی آن آیکن می‌توانید سفارش جدید خود را ثبت کنید.
                اکنون وارد صفحه‌ای می شوید که باید مبدأ، مقصد و نوع پیک را مشخص
                کنید.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="ساعات سرویس دهی پیک موتوری اسنپ چگونه است؟">
              <QuestionsContent>
                پیک موتوری اسنپ ۲۴ ساعته آماده سرویس‌دهی به مشتریان عزیز خود
                است.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="چه روش‌های حمل و نقلی در دسترس هستند؟">
              <QuestionsContent>
                در سوپراپلیکشن اسنپ، گزینه «اسنپ‌باکس» برای ارسال مرسوله و گزینه
                «اسنپ‌بایک» برای جابجایی مسافر با موتور وجود دارند.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="هزینه درخواست پیک موتوری چقدر می شود؟">
              <QuestionsContent>
                شما می‌توانید پیش از ثبت هر درخواست با مشخص کردن مبدأ و مقصد
                مورد نظر خود و تعیین بازگشت و یا عدم بازگشت سفیر، از هزینه سفر
                مطلع شوید.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="آیا امکان درخواست تلفنی سفارش وجود دارد؟">
              <QuestionsContent>
                پیک موتوری اسنپ تنها به صورت آنلاین فعالیت می‌کند و تنها
                درخواست‌هایی پاسخ موفق دریافت می‌کنند که در سوپراپ اسنپ ثبت شده
                باشند. بنابراین امکان ارسال تلفنی سفارش وجود ندارد.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="چطور می توانم سفیر را روی نقشه ببینم؟">
              <QuestionsContent>
                زمانی که سفیر درخواست شما را دریاف می کند، می‌توانید از طریق
                سوپراپ اسنپ، حرکت او را بر روی نقشه رصد کنید.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="نحوه پرداخت هزینه سفارش چگونه است؟">
              <QuestionsContent>
                هزینه سفارش را می‌توانید به صورت آنلاین (کیف پول آپ یا درگاه
                بانک) و نقدی پرداخت کنید. همچنین امکان پرداخت از طرف مقصد (تحویل
                گیرنده) امکان پذیر است.
              </QuestionsContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
};

export default BikeServicesQuestions;
