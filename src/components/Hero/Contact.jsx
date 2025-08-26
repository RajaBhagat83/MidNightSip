import React from "react";
import worldMap from "../../assets/worldmap.png";
import HpImage from "../../assets/HpImage.png";
import {motion} from "framer-motion"

function Headers() {
  return (
    <div className="h-[1150px] w-full">
      <div className="text-5xl border-x-8 font-bold text-black flex justify-between">
        <motion.div 
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.8, ease:"easeOut"}}
        viewport={{once:true,amount:0.6}}
        className="block m-32">
          <h1>Buy our </h1>
          <h1>products from</h1> anywhere
          <div className="mt-12">
            <input
              type="text"
              placeholder="Name"
              className="border-4 border-gray-300 text-lg p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-4 border-gray-300 text-lg p-3 ml-5 rounded-lg"
            />
          </div>
          <div className="mt-7">
            <input
              type="text"
              placeholder="Country"
              className="border-4 border-gray-300 text-lg p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="border-4 border-gray-300 text-lg p-3 ml-5 rounded-lg"
            />
          </div>
          <div className="border-2 border-black rounded-xl mt-6 h-14 flex justify-center bg-Primary">
            <button className="text-2xl text-white ">Order Now </button>
          </div>
        </motion.div>
        <div className="ml-44">
          <img src={worldMap} height={200} width={1000} />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={HpImage} style={{width:"1100px", height:"300px" ,objectFit:"cover"}}/>
      </div>
    </div>
  );
}

export default Headers;
