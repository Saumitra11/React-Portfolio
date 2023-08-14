import React from "react";
import hpe from "../assets/images/hpe.png";
import aws from "../assets/images/aws.png";
const About = () => {
  const info = [
    {
      text: "Certifications Completed",
      count: "4+",
    },
    {
      text: "Completed Projects",
      count: "9+",
    },
    {
      text: "Company Worked",
      count: "1",
    },
  ];
  return (
    <section
      id="me"
      className="min-h-screen py-10 text-gray-300 flex items-center justify-center"
    >
      <div className="text-center mt-8 ">
        <h3 className="text-4xl font-bold">
          My <span className="text-cyan-600">Life</span>
        </h3>
        <p className="text-gray-500 my-3 text-lg opacity-0">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items center md:gap-6 gap-12 px-10 max-w-6xl mx-auto ">
          <div className="p-2">
            <div className="text-gray-300 my-3 ">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am Saumitra Pathak, a Computer Science and Engineering
                undergrad from VIT Vellore. I interned at{" "}
                <strong>Hewlett Packard Enterprise</strong> from January 2023 to
                July 2023. I've worked with{" "}
                <strong>React.js, Node.js, Express.js</strong> and{" "}
                <strong>Python</strong>. I've also worked with{" "}
                <strong>C++</strong> and I am an
                <strong> AWS Certified Cloud Practitioner</strong>. My main goal
                in my career path is to learn and expand my knowledge domain. I
                am very much interested in Football and Video Games and I love
                travelling.
              </p>
              <div className="flex mt-10 items-center gap-7 ">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white ">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>{" "}
              <br />
              <br />
              <a className="custom-link" href="src\assets\Resume.pdf" download>
                {/* <button className="btn-primary">My Resume</button> */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                My Resume
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aws}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
