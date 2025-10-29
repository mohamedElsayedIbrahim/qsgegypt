import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper.css";
import { projects } from "../../static/projectData";
import ProjectSlide from "./ProjectSlide";



const ProjectCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      spaceBetween={40}
      slidesPerView={1}
      className="max-w-6xl mx-auto"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <ProjectSlide project={project} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
