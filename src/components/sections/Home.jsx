import { RevealOnScroll } from "../RevealOnScroll.jsx";
import meDarker from "../../assets/meDarker.png";
import {
  ArrowDownIcon,
  GithubIcon,
  Laptop2,
  LinkedinIcon,
  Sparkles,
} from "lucide-react";

const Home = ({ isLoaded }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20">
          <div className="text-start z-10 px-4 flex flex-col justify-center space-y-6 sm:space-y-10">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide  ">
              <p className="text-base md:text-xl font-mono text-white text-shadow-sm text-shadow-blue-400 mb-3 ">
                Hello, I'm
              </p>
              <h1
                className={`text-blue-500 ${
                  isLoaded
                    ? "border-r-2 overflow-hidden whitespace-nowrap animate-typing border-blue-500"
                    : ""
                }`}
              >
                Maithonkambou Abonmai
              </h1>
            </div>
            <div className="text-gray-400 text-base max-w-lg ">
              <p className="text-blue-400 pr-1 text-lg  font-semibold tracking-widest">
                MERN Stack Developer <Laptop2 className="inline-block mb-2" />
              </p>
              I craft fast, reliable, and scalable web apps focussed on
              building seamless user experiences with clean code and real-world
              performance <Sparkles className="inline-block text-blue-400" />.
            </div>
            <div className="flex justify-center gap-5 md:gap-10 flex-wrap">
              <a
                href="#project"
                className=" flex justify-center items-center bg-blue-500 text-white py-2 md:py-1 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
              >
                View Projects
              </a>
              <a
                href="#project"
                className=" flex justify-center items-center text-base border border-blue-500/50 text-blue-500 px-3 md:py-1 py-2 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 "
              >
                Contact Me
              </a>

              <div className=" flex justify-evenly items-center mb-10 md:my-0 gap-3">
                <a
                  href=""
                  className="bg-blue-500/10 text-blue-500 py-3 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition hover:-translate-y-0.5"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href=""
                  className="bg-blue-500/10 text-blue-500 py-3 px-3   rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition hover:-translate-y-0.5"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center px-4">
            <div className="w-full max-w-md flex justify-center items-center bg-white/40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]">
              <img
                src={meDarker}
                alt="Maithonkambou Abonmai"
                className="w-full aspect-square object-contain rounded-b-full"
              />
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="hidden sticky md:flex md:justify-center mt-10"
        >
          <ArrowDownIcon className="text-blue-500 animate-bounce" size={30} />
        </a>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
