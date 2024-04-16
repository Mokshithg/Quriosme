// import React from "react";
import dropdown from "../assets/icons/dropdown.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex px-[80px] justify-between items-center">
      <div>
        <h1 className="font-k2d font-bold text-3xl">
         <a href="/">QuriosMe.</a>
        </h1>
      </div>
      <div className="flex justify-between gap-14 items-center text-[20px]">
        <div className="flex items-center gap-2">
          <p>Explore</p>
          <img src={dropdown} alt="" className="h-2" />
        </div>
        <p>Become a Seller</p>
        <div className="bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
          <NavLink to="/login">
            <button className="px-3 py-1 bg-[#0D1717] rounded-md">Sign in</button>
          </NavLink>
        </div>

        <div>
          <img
            src="https://t3.ftcdn.net/jpg/06/50/24/56/360_F_650245616_WUPkDzObkPLVyegasDCeNhQXvFVVJoKn.jpg"
            alt=""
            className="h-16 rounded-full w-16 object-cover"
          />
        </div>
      </div>
    </div>
  );
}