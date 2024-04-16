import React from "react";
import StarRatings from "react-star-ratings";
import FancyText from "@carefully-coded/react-text-gradient";

export default function Profile() {
  return (
    <div className="flex p-7 gap-20">
      <div className="flex-[0.7]">
        <div>
          <FancyText
            gradient={{ from: "yellow", to: "white", type: "linear" }}
            className="text-2xl  font-semibold"
          >
            I Will Deisgn the ui ux of your website or <br />
            mobile application
          </FancyText>
        </div>
        <div className="flex m-10 gap-10 items-center">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/97216c4846693dd72399f9a346a5f079-1691470259078/c6a26f40-45f8-46b3-bb36-5256054e81a9.jpg"
            alt=""
            className="rounded-full h-44"
          />
          <div>
            <p className="text-yellow-400 text-xl font-semibold">
              Sai Tharak Reddy
            </p>
            <div className="flex gap-2 items-center">
              <StarRatings
                starRatedColor="#FFC107"
                starSpacing="1px"
                numberOfStars={4}
                rating={4}
                starDimension="13px"
              />
              <p>(550)</p>
            </div>
            <p>
              Queries Solved: <span className="font-semibold">250+</span>
            </p>
            <p>
              Complexity of the queries solved:{" "}
              <span className="font-semibold">Hard</span>
            </p>
            <p>
              Currently Solving Queries:{" "}
              <span className="font-semibold">5</span>
            </p>
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-2">
                <i class="fa-solid fa-thumbs-up"></i> <p>980</p>
              </div>
              <button className="flex gap-2 items-center bg-yellow-300 rounded px-1 py-0.5 text-black">
                <i class="fa-solid fa-share-nodes"></i>
                Share Profile
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-lg font-semibold text-yellow-300">
          About the Seller.
        </h1>
        <div className="ml-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            similique nostrum, illum numquam sunt aliquid sit eius excepturi
            minus labore magni esse fugiat ut quo voluptate. Quae maxime earum
            ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            similique nostrum, illum numquam sunt aliquid sit eius excepturi
            minus labore magni esse fugiat ut quo voluptate. Quae maxime earum
            ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            similique nostrum, illum numquam sunt aliquid sit eius excepturi
            minus labore magni esse fugiat ut quo voluptate. Quae maxime earum
            ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            similique nostrum, illum numquam sunt aliquid sit eius excepturi
            minus labore magni esse fugiat ut quo voluptate. Quae maxime earum
            ea.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            similique nostrum, illum numquam sunt aliquid sit eius excepturi
            minus labore magni esse fugiat ut quo voluptate. Quae maxime earum
            ea.
          </p>
        </div>
      </div>
      <div className="flex-[0.5] flex flex-col gap-4 items-center">
        <div className="flex gap-5 rounded-lg bg-[#ffffff86] p-4">
          <div>
            <img
              className="h-16 rounded-full"
              src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/97216c4846693dd72399f9a346a5f079-1691470259078/c6a26f40-45f8-46b3-bb36-5256054e81a9.jpg"
              alt=""
            />
            <div className="w-4 h-4 -mt-4 relative left-11 rounded-full bg-green-600"></div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold text-yellow-300 text-xl">
              Chat Sai Tharak Reddy
            </p>
            <div className="flex gap-5">
              <p>Online.</p>
              <p>Average Response Time: 3hrs</p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-1 h-full flex-col ">
          <div className="flex gap-1">
            <p className="flex-1 flex items-center bg-yellow-300 text-black h-20 justify-center">
              Starter
            </p>
            <p className="flex-1 flex items-center justify-center bg-[#ffffff86]">
              Standard
            </p>
            <p className="flex-1 flex items-center justify-center bg-[#ffffff86]">
              Pro
            </p>
          </div>
          <div className="h-[70%] flex flex-col items-center px-5 bg-[#ffffff86] py-2 justify-end">
            <button className="flex bg-gradient-to-r from-white to-yellow-300 w-full text-black justify-center items-center gap-10 py-1 rounded-lg text-lg">
              Continue
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="mt-2 px-2 py-1 bg-black rounded-md">
              Contact Me.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
