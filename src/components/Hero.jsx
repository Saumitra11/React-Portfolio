import React, { useEffect, useState } from "react";
import me from "../assets/images/result.png";

const Hero = () => {
  const socialMedia = ["logo-linkedin", "logo-twitter"];
  return (
    <section
      id="portal"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={me}
          alt=""
          className={`my-10 md:w-6/12 md:mt-30 h-90 object-cover`}
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1
            className={`md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold`}
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">Hello!</span>
            <br />I am <span>Saumitra Pathak </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Software Engineer
          </h4>
          <button className="btn-primary mt-8">Connect With Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMedia.map((social, i) => (
              <div
                key={social}
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <ion-icon name={social}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
