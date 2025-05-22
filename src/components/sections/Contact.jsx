import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_key
      )
      .then((result) => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Ooops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 max-w-5xl">
        <h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right" data-aos-delay="100">
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to collaborate? Feel free to reach
              out! I'm always open to discuss new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <p className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 text-3xl text-blue-500">
                  &#9993;
                </p>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-300 text-[11px] sm:text-base md:text-sm lg:text-base ">
                    maithonkambouabonmai2018@gmail.com
                  </p>
                </div>
              </div>
              <div
                className="flex items-center"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-4 text-3xl text-blue-500">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-300 text-[11px] sm:text-base">
                    HSR Layout, Bangalore, Karnataka
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                required
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              data-aos="slide-up"
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
