import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      title: "Wanderly",
      desc: "A visual travel discovery app that shows real images, hotels, and nearby attractions using Google Places API.",
      tech: ["React", "Tailwind", "Google Places API"],
      links: [
        { text: "GitHub", href: "https://github.com/Saumitra11/Wanderly" },
        { text: "Live Demo", href: "https://wanderly-umber.vercel.app/" },
      ],
    },

    {
      title: "UrbanHabitats",
      desc: "Real estate discovery platform with search filters, listings, and modern card UI.",
      tech: ["React", "Node", "Express", "MongoDB"],
      links: [
        { text: "GitHub", href: "https://github.com/Saumitra11/UrbanHabitats" },
        {
          text: "Live Demo",
          href: "https://urban-habitats-1-nine.vercel.app/",
        },
      ],
    },
    {
      title: "K-Means Coloring",
      desc: "Extract dominant colors from images using K-Means clustering.",
      tech: ["Python", "OpenCV", "NumPy"],
      links: [
        {
          text: "GitHub",
          href: "https://github.com/Saumitra11/K-Dominant-Colors",
        },
      ],
    },
    {
      title: "PlayCave",
      desc: "Multiplayer game portal with user profiles, room system and animations.",
      tech: ["React", "Firebase", "Node"],
      links: [
        { text: "GitHub", href: "https://github.com/maurya-goyal10/playCave" },
      ],
    },
    {
      title: "Euro 2020 Analysis",
      desc: "Football match analysis with data cleaning, visualization and insights.",
      tech: ["Python", "Pandas", "Matplotlib"],
      links: [
        {
          text: "GitHub",
          href: "https://github.com/Saumitra11/Football-Game-Analysis",
        },
      ],
    },
    {
      title: "Emotion Detection",
      desc: "Facial emotion recognition using CNNs with a working web demo.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      links: [
        {
          text: "GitHub",
          href: "https://github.com/Saumitra11/Emotion-Detector",
        },
        {
          text: "Live Demo",
          href: "https://saumitra11.github.io/Emotion-Detector/",
        },
      ],
    },
  ];

  return (
    <section
      id="works"
      className="min-h-screen py-16 text-gray-300 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">
            My <span className="text-cyan-600">Works</span>
          </h3>
          <p className="text-gray-400 mt-3">
            A collection of the projects I've built across Web, ML and Cloud.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          loopAdditionalSlides={10}
          loopFillGroupWithBlank={false}
          slidesPerGroup={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={900}
          freeMode={true}
          freeModeMomentum={true}
          freeModeMomentumRatio={0.4}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-14"
        >
          {projects.map((p, i) => (
            <SwiperSlide key={i}>
              <div
                className="
                bg-gray-800/80
                border border-gray-700
                rounded-3xl
                p-8
                h-72
                shadow-xl
                hover:shadow-cyan-600/30
                transition-all
                duration-300
                backdrop-blur-xl
                flex flex-col
                justify-between
              "
              >
                {/* Title + Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">{p.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-[2px] bg-gray-900 text-gray-300 text-xs rounded-md border border-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  {p.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-md text-sm text-cyan-400 bg-gray-900 border border-cyan-700 hover:bg-cyan-700 hover:text-black transition-all"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
