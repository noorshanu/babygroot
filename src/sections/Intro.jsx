import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#ffffff] text-center">
          About Us 
        </h2>

        <div className="  px-4  py-2 flex justify-between flex-col sm:flex-row items-center ">
          <div className=" max-w-xl">
            <p className="font-medium font-groot-one text-xl sm:text-3xl text-white  py-2">
            Fellow adventurers, let's enter the GrootSol universe – where fun meets finance, and memes meet money!
            </p>
            <h1 className=" text-xl sm:text-2xl py-3  font-groot-one text-white  font-medium">
            GrootSol is the ultimate crypto adventure inspired by the iconic figure of growth and innocence. As Grootsol grows larger, it produces profits for its community, known for its groot glory, sprout revolution, and personalized adventures.
            </h1>

            <h1 className=" text-xl sm:text-2xl py-3 font-groot-one  text-white font-medium">
            Join us on this epic journey of growth and joy with GrootSol!
            </h1>

            {/* <h1 className=" text-xl sm:text-2xl py-3 font-groot-one text-white font-medium">
              24/7 Galactic Community: Join our intergalactic community and
              let's grow together as we protect the galaxy and spread Groot's
              message of unity and friendship! We are Groot!
            </h1> */}
          </div>

          <div className=" w-full sm:w-[500px]">
            <RoadmapCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
