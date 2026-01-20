import React from "react";
import coldCoffee from "../assets/coldCoffee.png";
import { motion } from "framer-motion";

function Juices({ img, text, quotes }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src={img}
        alt={text}
        className="
          cursor-pointer
          w-[120px] h-[120px]
          sm:w-[140px] sm:h-[140px]
          lg:w-[150px] lg:h-[150px]
        "
      />

      <p
        className="
          text-xl sm:text-2xl lg:text-3xl
          text-Primary font-bold cursor-pointer
          mt-4
        "
      >
        {text}
      </p>

      <p
        className="
          text-sm sm:text-base lg:text-lg
          max-w-[14rem] sm:max-w-[16rem]
          mt-3
        "
      >
        {quotes}
      </p>
    </motion.div>
  );
}

export default Juices;
