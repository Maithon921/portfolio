import { RevealOnScroll } from "../RevealOnScroll.jsx";
import Tasktify from "../../assets/tasktify.png";
import ViewTube from "../../assets/Viewtube.png";
import ShoppyGlobe from "../../assets/shoppyGlobe.png";
import Weather from "../../assets/Weather.png";
import { useState } from "react";
import ProjectCard from "../ProjectCard.jsx";

const Projects = () => {

  const Allprojects = [
    {
      id: 1,
      title: "Tasktify",
      description:
        "A role-based task management platform built for small teams to streamline task creation, assignment, and tracking — featuring granular permissions, real-time updates, and a clean, intuitive UI designed for daily operational efficiency.",
      img: Tasktify,
      techs: ["React", "Tailwindcss", "Mongodb", "Express", "Nodejs", "JWT"],
      link: "https://task-tify.vercel.app/",
    },
    {
      id: 2,
      title: "ViewTube",
      description:
        " YouTube-like video sharing platform where users can upload, watch, like, comment on videos, manage profiles, and more — with a modern, responsive UI and Cloudinary integration for media hosting.",
      img: ViewTube,
      techs: [
        "React",
        "Tailwindcss",
        "Mongodb",
        "Express",
        "Nodejs",
        "JWT",
        "Cloudinary",
        "Redux-toolkit",
      ],
      link: "https://github.com/Maithon921/Youtube-clone",
    },
    {
      id: 3,
      title: "ShoppyGlobe",
      description:
        "A basic e-commerce application which provides users with a seamless shopping experience, including product listing, product details, cart management, and checkout functionality",
      img: ShoppyGlobe,
      techs: [
        "React",
        "Tailwindcss",
        "Mongodb",
        "Express",
        "Nodejs",
        "JWT",
        "Redux-toolkit",
      ],
      link: "https://github.com/Maithon921/ShoppyGlobe",
    },
    {
      id: 4,
      title: "Weather-App",
      description:
        "A responsive web-based weather app that fetches real-time weather data by city using the OpenWeatherMap API. It features a clean UI, local storage for recent searches, and dynamic icons to represent current conditions..",
      img: Weather,
      techs: ["Javascript", "Tailwindcss", "HTML", "OpenWeatherMap API"],
      link: "https://github.com/Maithon921/Weather-App",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Allprojects.map((project) => (
             <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
