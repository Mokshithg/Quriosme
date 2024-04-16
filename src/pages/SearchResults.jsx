import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import FilterOptions from "../components/FilterOptions";
const suggested = [
  "figma",
  "Web Development",
  "Website Designing",
  "Wordpress",
  "Data Entry",
  "Marketing",
];

const data = {
  img: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/320292074/original/7a44f4eac057e6a3f980dc24f4bd73b00092c3b4.png",
  pfp: "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/5eb83e740d6a97a09d785ef4c4cf47c7-1684579027946/54b73799-6164-4e34-8b31-2f492dfcce1b.png",
  name: "Sai Tharak Reddy",
  desc: "I will design the ui ux of your website or mobile application",
  rating: 4,
  reviews: 550,
  startPrice: 1200,
};

export default function SearchResults() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <div className="absolute right-[350px] top-[180px] flex gap-3 items-start">
        <div className="flex items-center gap-2 mt-3">
          <div
            className={`bg-white w-10 h-5 rounded-full toggle-button ${
              isOn ? "on" : "off"
            }`}
          >
            <div
              onClick={() => setIsOn(!isOn)}
              className="h-4 w-4 m-0.5 bg-[#616161] rounded-full"
            ></div>
          </div>
          Pro Services
        </div>
        <FilterOptions />
      </div>
      <div className="bg-[#ffffff5c] py-5  px-7 flex gap-10 items-center">
        <p>Suggested:</p>
        {suggested.map((e, i) => (
          <p key={i} className="px-2 py-1.5 border-2 border-yellow-300">
            {e}
          </p>
        ))}
      </div>
      <div className="flex justify-between p-10">
        <div>
          <h1 className="text-xl">
            Results for <span className="font-semibold">UI UX Design</span>
          </h1>
          <p className="text-[#C1C1C1] text-sm mt-1">250+ results</p>
        </div>
      </div>
      <div className="grid grid-cols-4 mx-7 gap-10">
        {[...Array(15).keys()].map((e, i) => (
          <div key={i}>
            <img src={data.img} className="" alt="" />
            <div className="flex gap-3 items-center">
              <img src={data.pfp} className="h-10 rounded-full my-2" alt="" />
              <p className="font-semibold">{data.name}</p>
            </div>
            <p>{data.desc}</p>
            <div className="flex gap-3 items-center">
              <StarRatings
                rating={4}
                numberOfStars={4}
                starRatedColor="#FFC107"
                starDimension="15px"
                starSpacing="3px"
              />
              <p className="relative top-0.5 text-[#FFC107] font-semibold">
                ({data.reviews})
              </p>
            </div>
            <p className="text-lg font-semibold">From ₹ {data.startPrice} /-</p>
          </div>
        ))}
      </div>
    </div>
  );
}
