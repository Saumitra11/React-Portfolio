import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "code-outline",
      language: "C++",
      level: "Advance",
      count: 90,
    },
    {
      logo: "logo-python",
      language: "Python",
      level: "Advance",
      count: 85,
    },
    {
      logo: "logo-javascript",
      language: "JavaScript",
      level: "Intermediate",
      count: 65,
    },
    {
      logo: "logo-react",
      language: "React.js",
      level: "Intermediate",
      count: 60,
    },
  ];
  return (
    <section id="skills" className="min-h-screen py-10 bg-gray-800 relative flex items-center justify-center">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-bold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-300 mt-3 text-lg opacity-0">My Knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8, 145, 170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3 ">{skill.language}</p>
              {/* <p className="text-xl mt-3 ">{skill.level}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
