import { GithubIcon, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-600">
      <div className="mx-auto px-4 max-w-5xl" >
        <div
        data-aos="fade-up"
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <a href="#home" className="text-xl font-bold">
              <span className="text-blue-500">MAI</span>
              <span className="text-white">THON</span>
            </a>
            <p className="text-xs text-gray-500  mt-1">
              &copy; {new Date().getFullYear()} Maithonkambou Abonmai. All
              rights reserved.
            </p>
          </div>

           <div className=" flex justify-evenly items-center gap-3">
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
    </footer>
  );
}

export default Footer;
