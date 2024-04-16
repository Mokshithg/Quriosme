import web from "../assets/images/popularServices/web.svg";
import content from "../assets/images/popularServices/content.svg";
import graphic from "../assets/images/popularServices/graphic.svg";
import logo from "../assets/images/popularServices/logo.svg";
import video from "../assets/images/popularServices/videoEditing.svg";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    name: "Video Editing",
    img: video,
  },
  {
    name: "Web Development",
    img: web,
  },
  {
    name: "Content Writing",
    img: content,
  },
  {
    name: "Logo Design",
    img: logo,
  },
  {
    name: "Graphic Designing",
    img: graphic,
  },
  {
    name: "Content Writing",
    img: content,
  },
  {
    name: "Logo Design",
    img: logo,
  },
  {
    name: "Graphic Designing",
    img: graphic,
  },
];

// ... (your imports)

export default function PopularServices({ color }) {
  return (
    <div className="mt-[14] overflow-x-hidden h-[500px]">
      <h1
        className={
          color === "white"
            ? "text-2xl px-[80px] text-black"
            : "text-2xl px-[80px]"
        }
      >
        Popular{" "}
        <span
          className={
            color === "white" ? "font-bold" : "text-yellow-300 font-bold"
          }
        >
          Qurios-ities based on topics
        </span>
      </h1>
      <div className="pt-10 ">
        <div className="bg-[#ffffff39] h-[350px] px-[40px]">
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper px-8"
            style={{ overflow: "visible" }} // Add overflow: visible to the Swiper container
          >
            {data.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="flex py-4 flex-col gap-8 items-center relative">
                  {" "}
                  {/* Use relative positioning */}
                  <img
                    src={e.img}
                    className="h-[320px] moveup-highlight " // Use absolute positioning
                    alt=""
                  />
                  <p className={color === "white" ? "text-black" : "text-xl"}>
                    {e.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
