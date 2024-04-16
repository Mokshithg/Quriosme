import React from "react";

export default function CheckBox({ status }) {
  return (
    <div
      className={`h-5 w-5 flex items-center justify-center rounded-sm ${
        status === false ? "border-2 border-black rounded-sm" : "bg-[#FFED48]"
      } `}
    >
      {status === true ? (
        <i className="fa-solid text-black fa-check"></i>
      ) : null}
    </div>
  );
}
