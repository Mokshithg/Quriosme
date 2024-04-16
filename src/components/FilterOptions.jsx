import React from "react";
import CheckBox from "./CheckBox";

export default function FilterOptions() {
  return (
    <div className="bg-[#ffffff4e] fixed top-[100px] text-sm right-2 text-black p-5 rounded-lg">
      <i className="fa-solid fa-sliders w-full text-right text-2xl text-yellow-400"></i>
      <div className="border-b border-[#ffffff86] p-2">
        <p className="font-semibold">Service Options:</p>
        <div className="flex gap-2">
          <CheckBox status={true} />
          <p>Paid Video Consultation</p>
        </div>
      </div>
      <div className="border-b flex flex-col gap-2 border-[#ffffff86] px-2">
        <h1 className="font-semibold">Seller Details:</h1>
        <p>Seller Level:</p>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Top Rated</p>
        </div>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Level 1</p>
        </div>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Level 2</p>
        </div>
        <p>Seller Language</p>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <CheckBox status={false} />
            <p>Telugu</p>
          </div>
          <div className="flex gap-2">
            <CheckBox status={false} />
            <p>English</p>
          </div>
          <div className="flex gap-2">
            <CheckBox status={false} />
            <p>Hindi</p>
          </div>
        </div>
        <p>Seller Availability:</p>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Online</p>
        </div>
      </div>
      <div className="border-b flex flex-col gap-2 border-[#ffffff86] p-2">
        <h1 className="font-semibold">Budget:</h1>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Low Range (1000 /-)</p>
        </div>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Low Range (1000 /-)</p>
        </div>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Low Range (1000 /-)</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <CheckBox status={false} />
            <p>custom</p>
          </div>
          <div className="flex border rounded border-black">
            <input
              type="text"
              className="bg-[#fff0] text-black w-28 px-1 "
              placeholder="Enter Budget"
            />
            <p>Rs</p>
          </div>
        </div>
      </div>
      <div className="border-b flex flex-col gap-2 border-[#ffffff86] p-2">
        <h1 className="font-semibold">Delivery:</h1>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>Express (24 Hours)</p>
        </div>
        <div className="flex gap-2">
          <CheckBox status={false} />
          <p>2 days</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <CheckBox status={false} />
            <p>custom</p>
          </div>
          <div className="flex border rounded border-black">
            <input
              type="text"
              className="bg-[#fff0] text-black w-28 px-1 "
              placeholder="Enter Budget"
            />
            <p>Rs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
