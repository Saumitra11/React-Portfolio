import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");

  const subtitles = [
    "Cloud Developer @ HPE",
    "Backend & Automation Engineer",
    "Tech Enthusiast",
  ];

  // typing animation
  const typeSubtitle = (text, index, delay = 70) => {
    if (index <= text.length) {
      setCurrentSubtitle(text.substring(0, index));
      setTimeout(() => typeSubtitle(text, index + 1, delay), delay);
    } else {
      setTimeout(() => eraseSubtitle(text, index - 1, delay), 1000);
    }
  };

  const eraseSubtitle = (text, index, delay = 40) => {
    if (index >= 0) {
      setCurrentSubtitle(text.substring(0, index));
      setTimeout(() => eraseSubtitle(text, index - 1, delay), delay);
    } else {
      const next = (subtitles.indexOf(text) + 1) % subtitles.length;
      typeSubtitle(subtitles[next], 0);
    }
  };

  useEffect(() => {
    typeSubtitle(subtitles[0], 0);
  }, []);

  return (
    <section
      id="portal"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10"
    >
      <div className="animate-fade-in-up max-w-3xl">
        {/* MAIN HEADER */}
        <h1 className="text-white font-bold md:text-6xl text-4xl leading-[1.3] md:leading-[1.25]">
          <span className="text-cyan-600 block mb-2">Hello!</span>I am{" "}
          <span>Saumitra Pathak</span>
        </h1>

        {/* SUBTITLE */}
        <h4 className="md:text-2xl text-xl mt-6 font-semibold text-gray-400 h-8 animate-fade-in">
          {currentSubtitle || "\u00A0"}
        </h4>

        {/* CTA BUTTON */}
        <a href="#connect" className="custom-link inline-block mt-10">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Connect With Me
        </a>

        {/* SOCIAL ICONS */}
        <div className="mt-12 text-3xl flex items-center justify-center gap-8 animate-fade-in-delayed">
          <div
            className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/saumitra-pathak-b32289215/",
                "_blank",
              )
            }
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>

          <div
            className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300"
            onClick={() =>
              window.open("https://twitter.com/saumitra_11_", "_blank")
            }
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
