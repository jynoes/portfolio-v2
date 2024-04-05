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

// Project Images Import
import pades from "../assets/workImages/actual-project-5.png";
import nike from "../assets/workImages/actual-project-7.png";
import todo from "../assets/workImages/actual-project-1.png";
import pokedex from "../assets/workImages/actual-project-2.png";
import techdocu from "../assets/workImages/actual-project-4.png";
import tribute from "../assets/workImages/actual-project-3.png";

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
      },
    ],
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
      },
    ],
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
      },
    ],
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
      },
    ],
  },
  {
    id: 5,
    title: "Technical Documentation Page",
    category: "Capstone Project / freeCodeCamp",
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
      },
    ],
  },
  {
    id: 6,
    title: "Tribute Webpage",
    category: "Capstone Project / freeCodeCamp",
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
      },
    ],
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
