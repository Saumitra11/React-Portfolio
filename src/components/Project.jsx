import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hpe from "../assets/images/hpe.png";
import uh from "../assets/images/uh.png";
import k from "../assets/images/k-means.jpg";
import euro from "../assets/images/euro.png";
import pc from "../assets/images/pc.png";
import om from "../assets/images/om.png";
import emotion from "../assets/images/motion.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Project = () => {
  return (
    <section
      id="works"
      className="min-h-screen py-10 text-gray-300 flex items-center justify-center"
    >
      <div>
        <div className="text-center">
          <h3 className="text-4xl font-bold mt-10">
            My <span className="text-cyan-600">Works</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg opacity-0">Works</p>
        </div>
        <br />
        <div className="flex lg:max-w-6xl max-w-sm gap-6 px-5 mx-auto items-center relative">
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              centeredSlides={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay, Navigation]}
            >
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={hpe} alt="" className="rounded-lg project-image" />
                  <h3 className="text-xl my-4">
                    Seamless Beta OS Enablement Solution
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={om}
                    alt=""
                    className="rounded-lg project-image"
                  />
                  <h3 className="text-xl my-4">Omnisc.io</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saumitra11/Omnisc.io"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://omnisc-io.vercel.app/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={uh} alt="" className="rounded-lg project-image" />
                  <h3 className="text-xl my-4">UrbanHabitats</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saumitra11/UrbanHabitatsFrontend"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://urban-habitats-page.pages.dev/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={k} alt="" className="rounded-lg project-image" />
                  <h3 className="text-xl my-4">K Means Coloring</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saumitra11/K-Dominant-Colors"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={pc} alt="" className="rounded-lg project-image" />
                  <h3 className="text-xl my-4">PlayCave</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/maurya-goyal10/playCave"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={euro} alt="" className="rounded-lg project-image" />
                  <h3 className="text-xl my-4">Euro 2020 Knockout Analysis</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saumitra11/Football-Game-Analysis"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img
                    src={emotion}
                    alt=""
                    className="rounded-lg project-image"
                  />
                  <h3 className="text-xl my-4">Emotion Detection</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/Saumitra11/Emotion-Detector"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href="https://saumitra11.github.io/Emotion-Detector/"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
