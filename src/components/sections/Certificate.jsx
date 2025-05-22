import { useState, useRef } from "react";
import { certificateData } from "../../utils/data.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Certificate() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * scrollWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % certificateData.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + certificateData.length) % certificateData.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-2 py-10 md:py-20">
      <div className="max-w-4xl w-full mx-auto relative">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          Certificates
        </h2>

        {/* Arrows */}
        <button
          data-aos="fade-right"
          data-aos-delay="100"
          className="absolute left-0 top-1/2  z-10 p-1 rounded-full shadow"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-6 h-6 text-blue-500 cursor-pointer" />
        </button>
        <button
          data-aos="fade-left"
          data-aos-delay="100"
          className="absolute right-0 top-1/2 z-10 p-1 rounded-full shadow"
          onClick={handleNext}
        >
          <ChevronRight className="w-6 h-6 text-blue-500 cursor-pointer" />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-hidden scroll-smooth transition-all duration-300"
          data-aos="slide-up"
          data-aos-delay="100"
        >
          {certificateData.map((data) => (
            <div
              key={data.id}
              className="min-w-full flex-shrink-1 flex justify-center items-center"
            >
              <a href={data.link} target="blank">
                <img
                  src={data.image}
                  alt={`${data.image} certificate`}
                  className="h-96 w-auto object-contain rounded-xl shadow-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
