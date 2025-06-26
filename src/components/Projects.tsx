import { useMemo, useRef, useState } from "react";
import type { FC } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project, ProjectCategory } from "@/types/projectTypes";
import allProjectsData from "@/data/projectsData.json";
import autoAnimate from "@formkit/auto-animate";

const projectsData: Project[] = allProjectsData as Project[];

const sortedProjectsData = [...projectsData].sort((a, b) =>
  a.title.localeCompare(b.title),
);

const Projects: FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const gridRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  const initializeAutoAnimate = (element: HTMLDivElement | null) => {
    if (element && !hasInitialized.current) {
      setTimeout(() => {
        autoAnimate(element, {
          duration: 300,
          easing: "ease-in-out",
        });
      }, 100);
      hasInitialized.current = true;
    }
    gridRef.current = element;
  };

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return sortedProjectsData;
    }
    return sortedProjectsData.filter((project) => project.category === filter);
  }, [filter]);

  const filters: { label: string; value: ProjectCategory | "all" }[] = [
    { label: "All Projects", value: "all" },
    { label: "Web", value: "Web" },
    { label: "Desktop", value: "Desktop" },
  ];

  if (filteredProjects.length === 0) {
    return (
      <div className="bg-gray-50 py-20 text-center">
        <p className="text-xl text-gray-700">No projects found.</p>
      </div>
    );
  }

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
        <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium ${filter === f.value ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors duration-200 ease-in-out mb-2 sm:mb-0`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div ref={initializeAutoAnimate} className="flex flex-wrap gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
