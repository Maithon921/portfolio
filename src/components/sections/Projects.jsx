import ProjectCard from "../ProjectCard.jsx";
import { Allprojects } from "../../utils/data.jsx";

const Projects = () => {
  return (
    <section
      id="project"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Allprojects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
