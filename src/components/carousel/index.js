// import React, { useState } from "react";
// import { RxDotFilled } from "react-icons/rx";

// const Carousel = ({ children: slides }) => {
//   const [curr, setCurr] = useState(0);

//     const goToSlide = (slideIndex) => {
//     setCurr(slideIndex);
//   };

//   return (
//     <div className="overflow-hidden relative">
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 130}%)` }}
//       >
//         {slides}
//       </div>
//       <div className="absolute bottom-4 right-0 left-0">
//         <div className="flex items-center justify-center gap-2">
//                   {slides.map((slide, slideIndex) => (
//             <div
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//               className="text-2xl cursor-pointer"
//             >
//               <RxDotFilled />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
