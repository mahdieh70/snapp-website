import React from "react";
import Collapsible from "../../collapsible";
import QuestionsContent from "../../QuestionsContent";

const PickupServicesQuestions = () => {
  return (
    <>
      <section className="py-10 px-4 bg-[#f5f5f6] block">
        <h2 className="text-[19px] opacity-[0.8] my-8">
          پرسش&zwnj;های پرتکرار
        </h2>
        <div>
          <div>
            <Collapsible label="خدمت وانت بار اسنپ شامل چه مواردی می شود؟">
              <QuestionsContent>
                این خدمات شامل حمل بار، وسایل و اثاثیه از منزل یا محل کار است.
                انتخاب نوع وانت، استفاده از کمک راننده برای جابه‌جایی بار،
                پشتیبانی 24 ساعته و بسیاری موارد دیگر، از جمله خدمات سوپراَپ
                وانت اسنپ هستند.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="سرویس وانت اسنپ دارای چند نوع وانت است؟">
              <QuestionsContent>
                در سوپراپ اسنپ می‌تواند نوع وانت را براساس نیازهای شخصی انتخاب
                کرد. وانت‌های اسنپ به انواع وانت سبک، وانت سبک مسقف، وانت سبک
                کفی‌دار و وانت سنگین تقسیم می‌شوند.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="آیا سرویس وانت بار اسنپ خدمات بسته بندی دارد؟">
              <QuestionsContent>
                خیر، این سرویس تنها مسئولیت حمل و نقل بار را بر عهده دارد.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="سرویس وانت بار اسنپ در چه شهرهایی فعال است؟">
              <QuestionsContent>
                وانت سبک اسنپ به شهرهای تهران، کرج، شیراز، مشهد، اصفهان، اهواز،
                تبریز، قم، کرمان، گیلان، ارومیه، همدان، گرگان، هرمزگان، اراک،
                قزوین، کرمانشاه، مازندران، بیرجند، زنجان، بجنورد اردبیل،
                خرم‌آباد، سنندج و بوشهر خدمات رسانی می‌کند. همچنین، می‌توان از
                سرویس وانت سنگین اسنپ در شهرهای تهران، کرج، شیراز، مشهد، اصفهان،
                قم، تبریز و اهواز نیز استفاده کرد.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label=" آیا تیم باربری اسنپ پروتکل‌های بهداشتی را رعایت می‌کند؟">
              <QuestionsContent>
                بله، همۀ اعضای تیم باربری اسنپ از ماسک، دستکش و مواد ضدعفونی
                کننده استفاده می‌کنند.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="منظور از قیمت ثابت در اسنپ چیست؟">
              <QuestionsContent>
                کرایه نهایی در اسنپ ثابت و بدون تغییر است. با طی کردن مراحل ثبت
                نام و انتخاب مبدأ و مقصد و نوع وانت، می‌توانید از قیمت نهایی حمل
                بار مطلع شوید.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="آیا امکان ردیابی وانت بار از مبدأ تا مقصد وجود دارد؟">
              <QuestionsContent>
                بله، از طریق سوپراپ اسنپ می‌توانید حرکت وانت را ردیابی کنید.
              </QuestionsContent>
            </Collapsible>
          </div>
          <div>
            <Collapsible label="نحوه پرداخت مبلغ حمل بار چگونه است؟">
              <QuestionsContent>
                می‌توانید به صورت نقدی و یا آنلاین مبلغ را پرداخت کنید. همچنین،
                امکان پرداخت از طرف مقصد نیز وجود دارد.
              </QuestionsContent>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupServicesQuestions;
