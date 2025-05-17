import { useState } from "react";

function ProjectCard({ project }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className=" rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all overflow-hidden">
      <img
        src={project.img}
        alt={`${project.title} image`}
        className="shadow-[0_2px_8px_rgba(59,130,246,0.1)] hover:scale-101 transition-all duration-500 "
      />
      <div className="px-4 py-2">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <div className="mb-4 inline-block">
          <p className={`text-gray-400  ${seeMore ? "" : "line-clamp-2"}`}>
            {project.description}
          </p>
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="text-xs text-blue-600 hover:underline focus:outline-none"
          >
            {" "}
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
