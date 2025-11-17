import React from "react";

const Skills = () => {
  const skills = [
    { logo: "logo-python", language: "Python" },
    { logo: "code-slash", language: "Java" },
    { logo: "logo-javascript", language: "JavaScript" },
    { logo: "logo-react", language: "React.js" },
    { logo: "server-outline", language: "Node.js / Express.js" },
    { logo: "cloud-outline", language: "AWS Cloud" },
    { logo: "terminal-outline", language: "Linux" },
    { logo: "git-branch-outline", language: "Git / CI-CD" },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-gray-900 flex items-center justify-center"
    >
      <div className="text-center text-gray-100">
        <h3 className="text-5xl font-bold animate-fade-in-up">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg animate-fade-in">
          What I work with
        </p>

        {/* SKILL GRID */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-14 px-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-cyan-600 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-cyan-500 text-5xl mb-4">
                <ion-icon name={skill.logo}></ion-icon>
              </div>
              <h4 className="text-xl font-semibold">{skill.language}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
