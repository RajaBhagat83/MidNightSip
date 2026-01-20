import React from "react";
import worldMap from "../../assets/worldmap.png";
import HpImage from "../../assets/HpImage.png";
import { motion } from "framer-motion";

function Headers() {
  return (
    <div className="w-full min-h-screen lg:h-[1150px] overflow-x-hidden">
      <div
        className="
          text-3xl sm:text-4xl lg:text-5xl
          border-x-8 font-bold text-black
          flex flex-col lg:flex-row justify-between
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="
            flex-10 block
            px-6 sm:px-12
            lg:m-4
            mt-12 lg:mt-0
          "
        >
          <h1>Buy our</h1>
          <h1>products from</h1>
          <h1>anywhere</h1>

          <div className="flex-1 block">
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border-4 border-gray-300 text-lg p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-4 border-gray-300 text-lg p-3 rounded-lg w-full"
              />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Country"
                className="border-4 border-gray-300 text-lg p-3 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Zipcode"
                className="border-4 border-gray-300 text-lg p-3 rounded-lg w-full"
              />
            </div>
          </div>

          <div
            className="
              border-2 border-black rounded-xl mt-6 h-14
              flex justify-center items-center
              bg-Primary max-w-xs
            "
          >
            <button className="text-xl sm:text-2xl text-white">
              Order Now
            </button>
          </div>
        </motion.div>

        <div
          className="
            flex justify-center lg:justify-end
            px-6 sm:px-12
            lg:ml-44
            mt-10 lg:mt-0
          "
        >
          <img
            src={worldMap}
            className="w-full max-w-[1000px] h-auto"
            alt="world map"
          />
        </div>
      </div>

      <div className="flex justify-center px-6 mt-72">
        <img
          src={HpImage}
          className="
            w-full max-w-[1100px]
            h-[180px] sm:h-[240px] lg:h-[300px]
            object-cover
          "
          alt="product"
        />
      </div>
    </div>
  );
}

export default Headers;
