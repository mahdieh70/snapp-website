import React, { useState } from "react";

//icon
import { RxDotFilled } from "react-icons/rx";

// import Carousel from "../carousel";

const OrderImageSlider = () => {
  const slides = [
    { url: "https://www.linkpicture.com/q/Food_4.jpg" },
    { url: "https://www.linkpicture.com/q/Driver.jpg" },
    { url: "https://www.linkpicture.com/q/Market_1.jpg" },
    { url: "https://www.linkpicture.com/q/Club.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <section className="my-10 mx-6 block" style={{ direction: "ltr" }}>
        <div
          className="rounded-[9px] overflow-hidden relative flex"
          style={{ transform: "translateZ(0px)" }}
        >
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
                // transform: "translate3d(0px, 0px, 0px)",
            }}
            className="h-[205.714px] min-h-full bg-cover bg-center bg-no-repeat w-full min-w-[calc(100% - 0px)] max-w-[ calc(100% - 0px)] overflow-hidden relative  "
          ></div>
          <div
            className="flex  justify-center  absolute left-[50%]  bg-[hsla(0,0%,100%,.18)] rounded-[10px]"
            style={{ transform: " translate(-50%,170px)" }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className=" flex items-center cursor-pointer text-white"
              >
                <RxDotFilled size={24}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderImageSlider;

// const OrderImageSlider = () => {
//   const slides = [
//     "https://www.linkpicture.com/q/Food_4.jpg",
//     "https://www.linkpicture.com/q/Driver.jpg",
//     "https://www.linkpicture.com/q/Market_1.jpg",
//     "https://www.linkpicture.com/q/Club.jpg",
//   ];
//   return (
//     <>
//       <section className="my-10 mx-6 block" style={{ direction: "ltr" }}>
//         <div
//           className="rounded-[9px] overflow-hidden relative flex"
//           style={{ transform: "translateZ(0px)" }}
//         >
//           <Carousel>
//             {slides.map((s) => (
//               <img src={s} alt={s} className="w-100% h-[205px]" />
//             ))}
//           </Carousel>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OrderImageSlider;
