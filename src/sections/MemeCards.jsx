import React from "react";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
      <h2 className=" text-2xl py-2 font-groot-one">A Meme Saga begins...</h2>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">Experience the Nature</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardOne.webp" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize font-groot-one">
              {" "}
              Explore a Universe where Crypto meets Cosmic Wonder. Dive into a
              Multiverse of Botanical Delights, from Enchanted Forests to
              Galactic Gardens, all under the watchful eye of Baby Groot
              himself.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className="font-ninja">Join the Sprout Revolution</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardTwo.webp" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize font-groot-one">
              Become a Guardian of Growth in the Baby Groot Community. Cultivate
              your own Crypto Garden, Trade Rare Flora, and Forge Connections
              with Fellow Nature Enthusiasts.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className=" font-ninja">Embrace the Groot Glory</p>
          </div>

          <div className="w-[250px] h-[250px] mb-10 border-none rounded-2xl overflow-hidden ">
            <img src="images/MemesCardThree.webp" alt="" className="w-full h-full" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize font-groot-one">
              Immerse yourself in the Heart of Nature's Majesty. Discover the
              Beauty of Groot-inspired Gardens and Eco-friendly Endeavors in our
              Vibrant Virtual Realm.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[270px] h-[500px]">
          <div>
            <p className=" font-ninja">Personalized Adventures</p>
          </div>

          <div className="w-[250px] mb-10 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardFour.webp" alt="" className="" />
          </div>

          <div className="ml-2 flex justify-center items-center">
            <p className="capitalize font-groot-one">
              Tailor your Journey in the Baby Groot Universe. From Botanical
              Themes to Green Innovations, Craft Every Moment to Reflect your
              Love for Nature and Crypto. With Infinite Possibilities, Your
              Green Adventure Awaits. We are Groot!
            </p>
          </div>
        </div>
        {/*         
        <img
          src="images/meme2.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        />
        <img
          src="images/meme3.jpeg"
          alt=""
          className=" rounded-xl border border-[#fed403] h-[350px]"
        /> */}
      </div>
    </div>
  );
}

export default MemeCards;
