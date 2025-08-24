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
    >
      <img
        src={img}
        alt={text}
        height={150}
        width={150}
        className="cursor-pointer"
      ></img>
      <p className="text-3xl text-Primary font-bold cursor-pointer">{text}</p>
      <p className="text-lg w-60 mt-3">{quotes}</p>
    </motion.div>
  );
}

export default Juices;
