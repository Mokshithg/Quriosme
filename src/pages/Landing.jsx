import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import search from "../assets/icons/search.svg";
import home1 from "../assets/images/homepage/home1.svg";
import img2 from "../assets/images/homepage/img2.svg";
import img3 from "../assets/images/homepage/img3.svg";
const images = [home1, img2, img3];
import classNames from "classnames";

export default function Landing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="px-[60px] overflow-hidden">
      <div className="flex h-screen ">
        <div className="flex w-[500px] mb-32 flex-col gap-1 justify-center">
          <h1 className="text-4xl text-nowrap font-bold text-yellow-300">
            What are you Qurios about today??
          </h1>
          <p className="flex gap-2 text-4xl  text-nowrap font-semibold">
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
          <div className="flex items-center my-4 w-[600px] bg-[#D9D9D9] rounded-full px-2 py-1">
            <input
              type="text"
              placeholder="search for the query"
              className="outline-none px-3 bg-[#D9D9D9] text-xl w-full text-black"
            />
            <div className="flex items-center justify-center left-shadow rounded-full p-1.5">
              <img src={search} className="relative h-8 w-8 top-1" alt="" />
            </div>
          </div>
          <div className="flex w-[700px] ml-3 items-center gap-3 text-lg">
            <p className="text-nowrap">Widely asked:</p>
            <div className="flex gap-4">
              {[
                "Photoshop",
                "Video Editing",
                "Logo Design",
                "Web Development",
              ].map((e, i) => (
                <p className="text-nowrap px-2 py-0.5 hover:bg-white hover:text-black cursor-pointer rounded-lg border border-slate-200">
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex-[1.5] relative left-20">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Image ${i + 1}`}
              className={classNames(
                "absolute transition-opacity duration-1000",
                {
                  "opacity-100": index === i,
                  "opacity-0": index !== i,
                }
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
