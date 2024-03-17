import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 ">
        <h2 className="font-groot-one text-5xl my-2 text-[#ffffff] text-center">
          Our Products
        </h2>

        <div className=" big-info__inner px-4 border-[#fff] border py-2 ">
          <div className=" max-w-xl">
            <p className="font-medium font-groot-one text-3xl text-white  py-2">
              Introducing Baby Groot Coin: The Rootin'-Tootin' Crypto Companion
              Inspired by the Guardian of the Galaxy!
            </p>
            <h1 className=" text-2xl py-3  font-groot-one text-white  font-medium">
              Groot NFTs: Step into the cosmic realm with our exclusive
              collection of Groot NFTs. Each one as unique and endearing as our
              beloved Baby Groot himself!
            </h1>

            <h1 className=" text-2xl py-3 font-groot-one  text-white font-medium">
              GrootBot: Our trusty GrootBot is here to assist you in navigating
              the crypto universe. Stay on top of market trends while grooving
              to the beats of Groot's tunes!
            </h1>

            <h1 className=" text-2xl py-3 font-groot-one text-white font-medium">
              24/7 Galactic Community: Join our intergalactic community and
              let's grow together as we protect the galaxy and spread Groot's
              message of unity and friendship! We are Groot!
            </h1>
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
