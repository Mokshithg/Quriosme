import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import CC from "../assets/images/queries/CC.svg";
import DL from "../assets/images/queries/DL.svg";
import LD from "../assets/images/queries/LD.svg";
import marketing from "../assets/images/queries/marketing.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    name: "Logo Designing",
    img: LD,
  },
  {
    name: "Deep Learning",
    img: DL,
  },
  {
    name: "Marketing",
    img: marketing,
  },
  {
    name: "Content Creationg",
    img: CC,
  },
  {
    name: "Logo Designing",
    img: LD,
  },
  {
    name: "Deep Learning",
    img: DL,
  },
  {
    name: "Marketing",
    img: marketing,
  },
  {
    name: "Content Creationg",
    img: CC,
  },
];

export default function Queries() {
  return (
    <div className="mx-[50px] mt-[40px]">
      <h1 className="text-2xl font-semibold mb-10">
        <FancyText gradient={{ from: "white", to: "yellow", type: "linear" }}>
          Complex queries solved on QuriosMe.
        </FancyText>
      </h1>
      <div>
        <div className="rounded-2xl bg-[#ffffff3f] p-5">
          <Swiper
            slidesPerView={4}
            centeredSlidesBounds={true}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper px-20 overflow-hidden"
          >
            {data.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center rounded-2xl overflow-hidden">
                  <img src={e.img} className="h-96" alt="" />
                  <p className="bg-[#0D1717] w-full text-center py-3 -mt-16 rounded-b-2xl">
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
