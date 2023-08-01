import React, { useEffect, useState } from "react";
import me from "../assets/images/result2.png";

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const subtitles = [
    "Software Engineer",
    "Fullstack Developer",
    "Tech Enthusiast",
    "Swimmer",
  ];

  const typeSubtitle = (text, index, delay = 100) => {
    if (index <= text.length) {
      setCurrentSubtitle(text.substring(0, index));
      setTimeout(() => typeSubtitle(text, index + 1, delay), delay);
    } else {
      setTimeout(() => eraseSubtitle(text, index - 1, delay), 1000);
    }
  };

  const eraseSubtitle = (text, index, delay = 50) => {
    if (index >= 0) {
      setCurrentSubtitle(text.substring(0, index));
      setTimeout(() => eraseSubtitle(text, index - 1, delay), delay);
    } else {
      const nextSubtitleIndex =
        (subtitles.indexOf(text) + 1) % subtitles.length;
      typeSubtitle(subtitles[nextSubtitleIndex], 0);
    }
  };

  useEffect(() => {
    typeSubtitle(subtitles[0], 0);
  }, []);

  return (
    <section
      id="portal"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={me}
          alt=""
          className={`my-10 md:w-6/12 w-6/12 object-cover md:h-90`}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1
            className={`md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold`}
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">Hello!</span>
            <br />I am <span>Saumitra Pathak</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            {currentSubtitle || "\u00A0"}{" "}
          </h4>
          <a className="custom-link" href="#connect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Connect With Me
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            <div
              className="text-gray-400 hover:text-white cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/saumitra-pathak-b32289215/",
                  "_blank"
                )
              }
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </div>
            <div
              className="text-gray-400 hover:text-white cursor-pointer"
              onClick={() =>
                window.open("https://twitter.com/saumitra_11_", "_blank")
              }
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
