import React from "react";

const About = () => {
  const info = [
    { text: "Certifications Completed", count: "4+" },
    { text: "Completed Projects", count: "9+" },
    { text: "Company Worked", count: "1" },
  ];

  return (
    <section
      id="me"
      className="min-h-screen py-16 text-gray-300 flex items-center justify-center"
    >
      <div className="w-full max-w-6xl px-10 animate-fade-in-up">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold">
            My <span className="text-cyan-600">Life</span>
          </h3>
          <p className="text-gray-500 mt-3 text-lg opacity-0">
            My Introduction
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex md:flex-row flex-col items-start gap-14">
          {/* LEFT COLUMN */}
          <div className="flex-1">
            <ul className="list-disc pl-6 space-y-5 leading-7 text-left text-gray-200">
              <li>
                Cloud Developer at{" "}
                <strong>Hewlett Packard Enterprise (HPE)</strong>, building
                automation infrastructure, backend workflows, and CI/CD
                integrations.
              </li>

              <li>
                Skilled in <strong>Python</strong>, <strong>Java</strong>,
                <strong> JavaScript</strong>, <strong>Linux</strong>, and cloud
                technologies.
              </li>

              <li>
                Built a React.js–Express.js automation portal during my
                internship to streamline OS installation workflows.
              </li>

              <li>
                Hands-on with <strong>React.js</strong>,{" "}
                <strong>Node.js</strong>,<strong>Express.js</strong>,{" "}
                <strong>C++</strong>, and backend automation.
              </li>

              <li>
                <strong>AWS Certified Cloud Practitioner</strong> (2022–2025).
              </li>

              <li>
                Passionate about designing scalable systems and growing as a
                full-stack & cloud-focused developer.
              </li>

              <li>
                Outside tech: I enjoy <strong>football</strong>,{" "}
                <strong>gaming</strong>, and <strong>travelling</strong>.
              </li>
            </ul>

            {/* Stats */}
            <div className="flex mt-12 gap-14">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="text-3xl font-semibold text-white">
                    {content.count}
                  </h3>
                  <span className="text-sm text-gray-400">{content.text}</span>
                </div>
              ))}
            </div>

            {/* Resume Link */}
            <a
              className="custom-link w-full block text-center"
              href="https://drive.google.com/file/d/1cjzT3d0-JlpjYX-DZLUc5aCfuyvTCJFL/view?usp=sharing"
              target="_blank"
            >
              {/* <button className="btn-primary">My Resume</button> */}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              My Resume
            </a>
          </div>

          {/* RIGHT COLUMN — HIGHLIGHTS CARD */}
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-xl w-full max-w-xs">
              <h4 className="text-xl font-semibold text-cyan-600 mb-4">
                Highlights
              </h4>

              <ul className="space-y-4 text-left text-gray-300">
                <li>💼 Cloud Developer @ HPE</li>
                <li>☁ AWS Certified Cloud Practitioner</li>
                <li>⚙ Automation & Backend Engineering</li>
                <li>💻 Python • Java • JavaScript</li>
                <li>🧪 CI/CD • Linux • React • Node</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
