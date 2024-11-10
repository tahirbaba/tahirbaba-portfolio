import React from "react";
import Heading from "./Heading";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Beginner", emoji: "📜" },
    { name: "CSS", level: "Intermediate", emoji: "🎨" },
    { name: "JavaScript", level: "Intermediate", emoji: "⚡" },
    { name: "TypeScript", level: "Intermediate", emoji: "🔐" },
    { name: "React", level: "Advanced", emoji: "🚀" },
    { name: "Next.js", level: "Intermediate", emoji: "🛠️" },
    { name: "Tailwind CSS", level: "Intermediate", emoji: "🌈" },
  ];

  return (
    <div id="skills" className="container py-20">
      <Heading title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div className="flex flex-col items-center" key={skill.name}>
            <span className="text-4xl">{skill.emoji}</span>
            <h3 className="mt-2 font-semibold">{skill.name}</h3>
            <p className="text-textSecondary">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
