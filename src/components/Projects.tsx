import { useState } from "react";
import type { FC } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/types/projectTypes";
import allProjectsData from "@/data/projectsData.json";

const projectsData: Project[] = allProjectsData as Project[];

const Projects: FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const filters: { label: string; value: ProjectCategory | "all" }[] = [
    { label: "All Projects", value: "all" },
    { label: "Web", value: "web" },
    { label: "Desktop", value: "desktop" },
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
