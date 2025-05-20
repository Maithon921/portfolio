import { RevealOnScroll } from "../RevealOnScroll.jsx";
import { techSkills } from "../../utils/data.jsx";

const About = () => {


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-2 py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="grid content-center grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="rounded-xl p-8 border text-gray-500 border-white/10 hover:-translate-y-1 transition-all flex flex-col justify-center items-center ">
              <p className="text-base md:text-lg mb-6 leading-relaxed">
                I'm a Full Stack Developer originally from{" "}
                <strong className="text-blue-500">Manipur</strong>, currently based in{" "}
                <strong className="text-blue-500">Bangalore</strong>. I specialize in building full-stack
                web applications using the <strong className="text-blue-500">MERN stack</strong>. From
                crafting responsive frontends to building secure and scalable
                backend APIs, I love solving real-world problems through clean,
                maintainable code.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                I’m constantly improving my skills and have built apps like a{" "}
                <strong className="text-blue-500">YouTube clone</strong> and a{" "}
                <strong className="text-blue-500">Task Management System</strong> featuring role-based
                dashboards and real-time notifications.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold text-center mb-4 text-blue-300/60">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4">
                  {techSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col justify-center items-center text-blue-500 p-3 rounded-md text-sm font-light hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      <span className="w-14 h-14 aspect-square mb-3 rounded-full p-3 bg-gray-900">
                        {skill.icon}
                      </span>
                      {skill.tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-4 border border-white/10 hover:-translate-y-1 transition-all">
                <p className="text-lg text-blue-300/60 font-bold">Work Experience</p>
                <p className="text-gray-500"> - Fresher</p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
