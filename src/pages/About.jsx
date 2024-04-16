import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import union from "../assets/icons/Union.svg";
import smilingman from "../assets/images/about/smilingman.png";
import suitman from "../assets/images/about/suitman.png";
import girl from "../assets/images/about/excitedgirl.png";

const images = [
  "https://img.freepik.com/free-photo/education-courses-university-concept-serious-looking-college-student-guy-with-notebooks-looking-determined-camera-casual-expression-as-heading-class-yellow-background_1258-60075.jpg?w=1060&t=st=1710305390~exp=1710305990~hmac=82b6fd122f8ab8013c09b2b6c04673ad07a04ddc7e4bc6856c5f11ae723e4520",
  "https://factorialab.com/wp-content/uploads/2020/09/vista-frontal-mujer-sonriente-auriculares-haciendo-firmar-bien_23-2148434736-e1600250329112.jpg",
  "https://img.freepik.com/premium-photo/young-woman-asian-happy-smiling-casual-white-cardigan-with-denim-jeans-while-her-using-laptop-sitting-white-chair-isolate-bright-blue-space_74952-887.jpg",
];

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ";

export default function About() {
  return (
    <div className="mx-[50px] flex gap-10 mt-[50px]">
      <div className="flex-1">
        <h1 className="mb-14 text-2xl">
          {" "}
          <FancyText gradient={{ from: "white", to: "yellow", type: "linear" }}>
            Advanced solutions and professional <br />
            talent for businesses
          </FancyText>
        </h1>
        {[1, 2, 2, 1].map((e, i) => (
          <div className="flex gap-5 font-medium text-lg my-5">
            <img src={union} alt="" className="h-8" />
            <p>{loremIpsum.repeat(e)}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 flex -mt-10">
        <div className="flex flex-col items-end">
          <img
            src={images[0]}
            className="w-[250px] rounded-2xl m-2 object-cover h-[225px]"
            alt=""
          />
          <div className="flex">
            <img src={smilingman} className="m-2 h-[240px]" alt="" />
            <img
              src={girl}
              className=" h-72 object-cover m-2 rounded-xl"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <img src={images[1]} className="rounded-xl h-64 m-2" alt="" />
          <img src={suitman} alt="" className="m-4 object-cover h-64" />
        </div>
      </div>
    </div>
  );
}
