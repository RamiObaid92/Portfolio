import type { FC } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 60 },
      { name: "Vue.js", level: 30 },
      { name: "Next.js", level: 36 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "HTML/CSS", level: 100 },
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    skills: [
      { name: "C#", level: 90 },
      { name: "ASP.NET", level: 85 },
      { name: "Python", level: 70 },
      { name: "C++", level: 50 },
      { name: "SQL", level: 80 },
      { name: "RESTful", level: 85 },
      { name: "gRPC", level: 60 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 100 },
      { name: "Azure", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Visual Studio", level: 95 },
      { name: "PyCharm", level: 75 },
      { name: "Docker", level: 65 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Technologies and tools I've worked with and mastered or currently
          learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-blue-700">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
