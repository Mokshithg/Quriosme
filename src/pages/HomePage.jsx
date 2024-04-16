// import React from "react";
// import Landing from "./Landing";
import Typewriter from "typewriter-effect";
import search from "../assets/icons/search.svg";
import PopularServices from "./PopularServices";
import web from "../assets/images/popularServices/web.svg";
import content from "../assets/images/popularServices/content.svg";
import graphic from "../assets/images/popularServices/graphic.svg";
import logo from "../assets/images/popularServices/logo.svg";
import video from "../assets/images/popularServices/videoEditing.svg";
import Services from "./Services";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Footer from "./Footer";

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

export default function HomePage() {
  return (
    <div className="">
      <section className="flex justify-center items-center">
        <div className="flex w-[500px] mb-32 flex-col items-center gap-1 justify-center">
          <h1 className="text-4xl text-nowrap mt-32 font-bold text-yellow-300">
            What are you Qurios about today?
          </h1>
          <p className="flex gap-2 text-3xl  text-nowrap font-semibold">
            Get help in any field you are{" "}
            <span>
              <Typewriter
                options={{
                  strings: [
                    " Qurios.",
                    " Stuck.",
                    " Having any trouble.",
                    " Having Problem.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="flex items-center my-4 w-[750px] bg-[#D9D9D9] rounded-full px-2 py-1">
            <input
              type="text"
              placeholder="search for the query"
              className="outline-none px-3 bg-[#D9D9D9] text-xl w-full text-black"
            />
            <div className="flex items-center justify-center bg-black left-shadow rounded-full p-1.5">
              <img src={search} className="relative h-8 w-8 top-1" alt="" />
            </div>
          </div>
          <div className="flex w-[700px] ml-1 items-center gap-2 text-base">
            <p className="text-nowrap">Widely asked:</p>
            <div className="flex gap-4">
              {[
                "Photoshop",
                "Video Editing",
                "Logo Design",
                "Web Development",
              ].map((e, i) => (
                <p className="text-nowrap px-2 py-0.5 hover:bg-white hover:text-black cursor-pointer rounded-lg border border-slate-200" key={i}>
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-white">
        <section className="h-screen flex justify-center items-center">
          <PopularServices color={"white"} />
        </section>
        <section className="h-screen flex justify-center items-center">
          <PopularServices color={"white"} />
        </section>
        <section className="mx-32 text-black my-10 h-screen flex items-center">
          <div>
            <h1 className="text-3xl mb-10">
              The <span className="font-bold">Best</span> Part about{" "}
              <span className="font-bold">QuriousMe?</span>
            </h1>
            <div className="my-7 text-lg">
              <h2 className="text-xl font-semibold">Lorem ipsum dolor</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
            <div className="my-7">
              <h2 className="text-xl font-semibold">Lorem ipsum dolor</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
            <div className="my-7">
              <h2 className="text-xl font-semibold">Lorem ipsum dolor</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
          </div>
        </section>
        <section className="h-screen">
          <Services color={"white"} />
        </section>
      </div>
      <section className="h-screen bg-none">
        <Footer />
      </section>
    </div>
  );
}
