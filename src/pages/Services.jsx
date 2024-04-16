import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import DM from "../assets/icons/services/DM.svg";
import DM1 from "../assets/icons/services/DM1.svg";
import GD from "../assets/icons/services/GD.svg";
import graphicDesign from "../assets/icons/services/graphicsDesign.svg";
import Group9 from "../assets/icons/services/Group 9.svg";
import Group11 from "../assets/icons/services/Group 11.svg";
import music from "../assets/icons/services/music.svg";
import VA from "../assets/icons/services/VA.svg";
import VA1 from "../assets/icons/services/VA1.svg";
import WT from "../assets/icons/services/WT.svg";

const data = [
  {
    name: "Graphic Design",
    img: graphicDesign,
  },
  {
    name: "Digital Marketing",
    img: DM,
  },
  {
    name: "Writing and Translating",
    img: WT,
  },
  {
    name: "Video and Animation",
    img: VA,
  },
  {
    name: "Music and Audio",
    img: music,
  },
  {
    name: "Graphic Design",
    img: graphicDesign,
  },
  {
    name: "Digital Marketing",
    img: DM,
  },
  {
    name: "Writing and Translating",
    img: WT,
  },
  {
    name: "Video and Animation",
    img: VA,
  },
  {
    name: "Music and Audio",
    img: music,
  },
];

export default function Services({ color }) {
  return (
    <div
      className={
        color === "white" ? "mx-[100px] my-20 text-black" : "mx-[100px] my-20"
      }
    >
      <div>
        <h1 className="text-3xl font-semibold">
          {color !== "white" ? (
            <FancyText
              gradient={{ from: "yellow", to: "white", type: "linear" }}
            >
              Qurios about something ?
            </FancyText>
          ) : (
            <p>Qurios about something ?</p>
          )}
          <span className="font-medium">
            Feel free to reach out, we’re here to help !!
          </span>
        </h1>
      </div>

      <div className="mx-[60px] grid grid-cols-5 gap-20 my-16">
        {data.map((e, i) => (
          <div
            key={i}
            className="cursor-pointer flex items-center flex-col justify-center gap-6"
          >
            <img src={e.img} alt="" className="h-[40%]" />
            <p className="text-center text-nowrap">{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
