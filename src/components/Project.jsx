import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Project = () => {
  return (
    <section id="works" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-bold">
          My <span className="text-cyan-600">Works</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg opacity-0">Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper slidesPerView={1.2} spaceBetween={20} breakpoints={{}}>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
