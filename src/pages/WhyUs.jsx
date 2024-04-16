// import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import union from "../assets/icons/Union.svg";
import whyusimg from "../assets/images/whyusimg.svg";
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ";

export default function WhyUs() {
  return (
    <div className="mx-[50px] mt-[40px]">
      <div className="flex gap-20">
        <div className="flex-1">
          <h1 className="mb-14 text-2xl">
            why{" "}
            <span className="font-bold">
              <FancyText
                gradient={{ from: "yellow", to: "white", type: "linear" }}
              >
                QuriosME.
              </FancyText>
            </span>
            ?
          </h1>
          {[1, 2, 2, 1].map((e, i) => (
            <div className="flex gap-5 font-medium text-lg my-5">
              <img src={union} alt="" className="h-8" />
              <p>{loremIpsum.repeat(e)}</p>
            </div>
          ))}
        </div>
        <div className="flex-[0.5]">
          <img src={whyusimg} alt="" />
        </div>
      </div>
    </div>
  );
}
