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

import { FaReact, FaCss3 } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    title: "PADES Printing Website",
    category: "Freelance Work",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
  {
    id: 2,
    title: "Nike Website Simple Rebuild",
    category: "Study Project",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
  {
    id: 3,
    title: "To-Do List Web Application",
    category: "Capstone Project / Udemy",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
  {
    id: 4,
    title: "Static PokeDex Website",
    category: "Study Project",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
  {
    id: 5,
    title: "Technical Documentation Webpage",
    category: "Capstone Project / freeCodeCamp",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
  {
    id: 6,
    title: "Tribute Webpage",
    category: "Capstone Project / freeCodeCamp",
    desc: "",
    imgUrl: "",
    imgAlt: "",
    stack: [
      {
        reactJS: true,
        css: false,
      },
    ],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {projectList.map((val, i) => (
        <SwiperSlide key={i}>
          <div className="project-slide">
            <h4 className="project-title">{val.title}</h4>
            <div>
              <p className="project-category">{val.category}</p>
              <div>
                <strong>Tech Stack:</strong>{" "}
                {val.stack.map((tech, index) => (
                  <span key={index}>
                    {tech.reactJS && <FaReact />}
                    {tech.css && <FaCss3 />}
                    {/* Add more conditions for other technologies */}
                  </span>
                ))}
              </div>
            </div>
            <p className="project-desc">{val.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
