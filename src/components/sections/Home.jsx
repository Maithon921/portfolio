import { RevealOnScroll } from "../RevealOnScroll.jsx";
import meDarker from "../../assets/meDarker.png"

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-24">
        <div className="text-start z-10 px-4 flex flex-col justify-center items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            I'm Maithonkambou Abonmai
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg ">
            <span className="text-blue-500 font-bold">A full-stack developer</span> who loves crafting clean, scalable web
            applications. My goal is to build solutions that offers both
            exceptional performance and a delightful user experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className=" bg-blue-500 text-white py-3 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
            >
              View Projects
            </a>
            <a
              href="#project"
              className=" border border-blue-500/50 text-blue-500 px-4 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 "
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center px-4" data-aos="fade-left" data-aos-delay="300">
            <div className="w-full max-w-md flex justify-center items-center bg-cyan-100/10 rounded-full ">
                <img 
                  src={meDarker} 
                  alt="Maithonkambou Abonmai" 
                  className="w-full aspect-square object-contain"
                />
            </div>
          </div>
          </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
