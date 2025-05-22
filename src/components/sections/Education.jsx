import { timeline } from "../../utils/data";

function Education() {
  return (
    <section
      className="min-h-screen flex justify-center items-center py-20"
      id="education"
    >
      <div className="max-w-5xl mx-auto px-3">
        <h1
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          Education
        </h1>
        <div>
          {timeline.map((edu, index) => (
            <div
              key={edu.id}
              className="relative pl-8 pb-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute left-0 top-2 overflow-hidden h-7 w-7 rounded-full bg-blue-500/40 p-0.5 text-gray-400 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
                {edu.icon}
              </div>
              {index !== timeline.length - 1 && (
                <div className=" absolute left-[13px] top-9 bottom-0 w-[2px] h-[89%] bg-blue-400 "></div>
              )}
              <div className="rounded-xl md:ml-3 p-5 border text-gray-500 border-white/10 hover:-translate-y-1 transition-all flex flex-col justify-center ">
                <div className="mb-3 relative">
                  <h3 className="text-lg font-bold text-blue-500">
                    {edu.title}
                  </h3>
                  <p className="text-blue-950 font-medium text-[13px]">
                    {edu.location}
                  </p>
                </div>
                <p className="text-sm"> {edu.date} </p>
                <p className="text-sm mb-2 text-gray-500">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Education;
