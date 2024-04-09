import React from "react";
import "../styles/Botbar.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

// React Icons Import
import { FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { RxExternalLink } from "react-icons/rx";

// Project Images Import
import pades from "../assets/workImages/actual-project-5.png";
import nike from "../assets/workImages/actual-project-7.png";
import todo from "../assets/workImages/actual-project-1.png";
import pokedex from "../assets/workImages/actual-project-2.png";
import techdocu from "../assets/workImages/actual-project-4.png";
import tribute from "../assets/workImages/actual-project-3.png";
import brainwave from "../assets/workImages/actual-project-8.png";
import apple from "../assets/workImages/actual-project-9.png";

const projectList = [
  {
    id: 1,
    title: "PADES Printing Website",
    category: "Freelance Work",
    desc: "",
    imgUrl: `${pades}`,
    imgAlt: "Pades Printing Website",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: true,
        bootstrap: true,
        tailwind: false,
      },
    ],
    link: "https://padesprinting.com/",
  },
  {
    id: 2,
    title: "Nike Website Simple Rebuild",
    category: "Study Project",
    desc: "",
    imgUrl: `${nike}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: false,
        bootstrap: false,
        tailwind: false,
      },
    ],
    link: "https://shoes-website.onrender.com/",
  },
  {
    id: 3,
    title: "To-Do List Web Application",
    category: "Capstone Project / Udemy",
    desc: "",
    imgUrl: `${todo}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: true,
        bootstrap: true,
        tailwind: false,
      },
    ],
    link: "https://to-do-list-capstone.onrender.com/",
  },
  {
    id: 4,
    title: "Static PokeDex Website",
    category: "Study Project",
    desc: "",
    imgUrl: `${pokedex}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: false,
        bootstrap: false,
        tailwind: false,
      },
    ],
    link: "https://pokedex-learning-apis.onrender.com/index.html",
  },
  {
    id: 5,
    title: "Technical Docu Page",
    category: "Capstone Project",
    desc: "",
    imgUrl: `${techdocu}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: false,
        bootstrap: true,
        tailwind: false,
      },
    ],
    link: "https://freecodecamp-technical-documentation-page.onrender.com/",
  },
  {
    id: 6,
    title: "Tribute Webpage",
    category: "Capstone Project",
    desc: "",
    imgUrl: `${tribute}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: true,
        javascript: true,
        reactJS: false,
        bootstrap: true,
        tailwind: false,
      },
    ],
    link: "https://freecodecamp-tribute-page.onrender.com/",
  },
  {
    id: 7,
    title: "Brainwave",
    category: "ReactJS Tutorial from YouTube",
    desc: "",
    imgUrl: `${brainwave}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: false,
        javascript: true,
        reactJS: true,
        bootstrap: false,
        tailwind: true,
      },
    ],
    link: "https://brainwave-89h0.onrender.com/",
  },
  {
    id: 8,
    title: "Apple Website",
    category: "ReactJS Tutorial from YouTube",
    desc: "",
    imgUrl: `${apple}`,
    imgAlt: "",
    stack: [
      {
        html: true,
        css: false,
        javascript: true,
        reactJS: true,
        bootstrap: false,
        tailwind: true,
      },
    ],
    link: "https://apple-website-zatw.onrender.com/",
  },
];

const WorkSlider = () => {
  const isMobile = window.innerWidth <= 430;

  return (
    <Swiper
      slidesPerView={isMobile ? 1 : 3}
      spaceBetween={isMobile ? 0 : 30}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {projectList.map((val, i) => (
        <SwiperSlide key={i}>
          <div className="project-slide">
          <a href={val.link}><RxExternalLink className="external-link" size="2em" /></a>
            <h4 className="project-title">{val.title}</h4>
            <div className="project-detail">
              <div className="project-tools-container">
                {val.stack.map((tech, index) => (
                  <span className="project-tools" key={index}>
                    {tech.html && <FaHtml5 />}
                    {tech.css && <IoLogoCss3 />}
                    {tech.javascript && <IoLogoJavascript />}
                    {tech.reactJS && <FaReact />}
                    {tech.bootstrap && <FaBootstrap />}
                    {tech.tailwind && <SiTailwindcss />}
                  </span>
                ))}
              </div>
              <p className="project-category">{val.category}</p>
            </div>
            <p className="project-desc">{val.desc}</p>
            <div className="project-image-container">
              <img
                src={val.imgUrl}
                alt={val.imgAlt}
                className="project-image"
              ></img>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
