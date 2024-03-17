function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full  bg-[#851B2C] bg-opacity-50 border rounded-lg p-5 shadow-lg">
              <h1 className=" font-groot-one text-4xl my-4 text-[#fff]">
                Welcome to the Groot NFT Universe! :
              </h1>

              <p className="font-groot-one  text-xl text-white">
                Embark on an adventure with Baby Groot Coin, where whimsical
                charm, cosmic wonder, and crypto excitement collide! This
                pint-sized hero isn't just any sprout;
              </p>

              <p className=" font-groot-one text-xl text-white py-1">
                Baby Groot is here to plant the seeds of growth and joy,
                sprouting prosperity with every transaction! As Baby Groot
                dances his way through the crypto galaxy, our community grows
                stronger, united by a love for all things adorable and
                out-of-this-world! Join us as we journey through the cosmos,
                spreading Groot's message of friendship, resilience, and
                infinite possibilities. Let's grow together, one leaf at a time,
                and create a galaxy where everyone can shine like the stars! We
                are Groot! 🌱✨
              </p>

              <div className=" py-2">
                <a
                  href="https://solscan.io/token/Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3"
                  target="_blank"
                  className="my-2 font-groot-one flex justify-start text-base  text-white  sm:text-xl"
                >
                  {" "}
                  Contract : Ft5kV9VpmNuFawoGLhbHKTsWDUKUraa43GKdQBf8zdV3
                </a>
              </div>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/FJky1Wejuou2Gr9bB16tiNiWjNCBLg7crZ9s9mttE58w?t=1710608652588"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  buy now
                </a>
                <a
                  href="https://t.me/sushicatso"
                  target="_blank"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#e47369] to-[#f1a3ff] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  join telegram
                </a>

                <a
                  href="https://www.dextools.io/app/en/solana/pair-explorer/FJky1Wejuou2Gr9bB16tiNiWjNCBLg7crZ9s9mttE58w?t=1710608652588"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  Dex Tool
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                {/* <img src="images/hero.png" alt="" className=" mx-auto" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
