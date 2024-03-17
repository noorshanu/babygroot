import React from "react";

function MemeCards() {
  return (
    <div className=" container-wrapper py-4 px-4 mx-auto">
      <h2 className=" text-2xl sm:text-5xl py-4 font-groot-one text-center ">
        Our Products
      </h2>

      <p className=" text-center text-base">
      Join us on this epic journey of growth and joy with GrootSol!
      </p>

      <div className=" flex items-center gap-4 justify-between flex-col sm:flex-row">
        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-2 border-none rounded-2xl overflow-hidden">
            <img src="images/MemesCardOne.webp" alt="" className="" />
          </div>
          <div>
            <p className="font-groot-one text-xl">Groot NFTs</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap  justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-2 border-none rounded-2xl overflow-hidden">
          <img src="images/MemesCardFour.webp" alt="" className="" />
          </div>
          <div>
            <p className="font-groot-one text-xl">Groot Gaming</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] h-[250px] mb-2 border-none rounded-2xl overflow-hidden ">
            <img
              src="images/MemesCardThree.webp"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div>
            <p className=" font-groot-one text-xl">Trading Bot</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl  w-[270px] h-auto sm:h-[500px]">
          <div className="w-[250px] mb-2 border-none rounded-2xl overflow-hidden">
           
            <img src="images/MemesCardTwo.webp" alt="" className="" />
          </div>
          <div>
            <p className=" font-groot-one text-xl ">Groot Staking</p>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default MemeCards;
