import type { FC } from "react";
import type { Project } from "@/types/projectTypes";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 pb-4 text-center text-gray-900">
          {project.title}
        </h3>
        <div className="flex justify-center mb-4 flex-grow">
          <p className="text-gray-700 text-sm text-left max-w-prose">
            {project.description}
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex flex-wrap justify-start gap-2 max-w-prose">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium transition-colors hover:bg-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-3 mt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-100 p-1.5 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-110"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
