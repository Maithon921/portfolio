import { DownloadIcon, SunMediumIcon } from "lucide-react";
import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
      data-aos="slide-down"
      data-aos-delay="100"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono font-bold text-2xl text-white ">
            MAI<span className="text-blue-500 text-balance">THON</span>
          </a>

          <a
            href=""
            className="flex justify-center items-center text-sm md:text-base gap-0.5 bg-blue-500 text-white py-0.5 px-1.5 rounded font-medium transition  overflow-hidden hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
            download={16}
          >
            Resume <DownloadIcon size={17} />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center font-bold space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors "
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <button >
              <SunMediumIcon className="h-8 w-8 rounded-full bg-blue-500/20 p-1" /> 
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
