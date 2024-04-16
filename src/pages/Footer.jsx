import React from "react";
import footerimg from "../assets/images/footer/footerimg.svg";

const links = {
  Categories: [
    "Digital Marketing",
    "Graphics & Design",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Fiverr Logo Maker",
    "Programming & Tech",
    "Data",
    "Business",
    "Lifestyle",
    "Photography",
    "End-to-End Projects",
    "Sitemap]",
  ],
  About: [
    "Careers",
    "Press & News",
    "Partnerships",
    "Privacy Policy",
    "Terms of Service",
    "Intellectual Property Claims",
    "Investor Relations",
  ],
  "Support and Education": [
    " Trust & Safety",
    "Selling on Fiverr",
    "Buying on Fiverr",
    "QuriosMe. Guides",
    "QuriosMe. Workspace",
    "Invoice Software",
    "Learn",
    "Online Courses",
  ],
};

export default function Footer() {
  return (
    <>
      <div className=" px-[30px] mx-14 my-20">
        <div className=" flex justify-between items-center bg-[#ffffff3a] py-4 px-10 rounded-3xl">
          <div>
            <h1 className="text-4xl">
              Technically ! everything feels{" "}
              <span className="font-grypen text-7xl font-semibold text-yellow-300">
                solved
              </span>
            </h1>
            <button className="my-10 px-2 py-1 rounded-[5px] bg-yellow-300 text-black">
              Join QuriosMe.
            </button>
          </div>
          <div>
            <img src={footerimg} className="h-64" alt="" />
          </div>
        </div>
        <div className="my-10 mx-20 flex justify-between">
          <div>
            <h1 className="font-semibold">Categories</h1>
            <ul className="list-disc ml-6">
              {links.Categories.map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">About</h1>
            <ul className="list-disc ml-6">
              {links.About.map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-semibold">Support and Education</h1>
            <ul className="list-disc ml-6">
              {links["Support and Education"].map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex px-[80px] bg-[#ffffff3a] p-8 justify-between">
        <h1 className="font-k2d font-bold text-3xl">
          QuriosMe.
        </h1>
        <div className="flex gap-10 text-lg items-center">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-globe"></i>
            <p>English</p>
          </div>
          <p>₹ INR</p>
        </div>
      </div>
    </>
  );
}
