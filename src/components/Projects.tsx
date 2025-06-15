import { useState } from "react";
import type { FC } from "react";
import ProjectCard from "@/components/ProjectCard";

type ProjectCategory = "web" | "mobile";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: ProjectCategory;
}
const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with React and .NET, featuring user authentication, product catalog, and payment processing.",
    image: "/project1.jpg",
    tags: ["React", "C#", ".NET", "SQL"],
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/username/project1",
    category: "web",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with real-time updates and team collaboration features.",
    image: "/project2.jpg",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/username/project2",
    category: "mobile",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard for monitoring and analyzing social media metrics across multiple platforms.",
    image: "/project6.jpg",
    tags: ["Vue.js", "Chart.js", "CSS Grid"],
    liveUrl: "https://project6.com",
    githubUrl: "https://github.com/username/project6",
    category: "web",
  },
];

const Projects: FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const filters: { label: string; value: ProjectCategory | "all" }[] = [
    { label: "All Projects", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Explore my recent work and personal projects
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full ${filter === f.value ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
