import React from "react";
import video from "../../assets/video/box-landing.mp4";

const BikeServicesVideo = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10 py-10 px-4 bg-[#f5f5f6] self-stretch overflow-hidden my-6 text-center">
        <div>
          <video controls className="w-full max-w-[600px] rounded-[9px]">
            <source src={video} />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
      </section>
    </>
  );
};

export default BikeServicesVideo;
