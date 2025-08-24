import React, { useState } from "react";
import Bgimage from "../../assets/black and white image.jpg";
import MenuIcon from "../../assets/Menu.svg"
import coffee from "../../assets/realcoffee.png"
import {motion} from "framer-motion"

import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"

const bgimage = {
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const coffeeCup = {
  backgroundImage:`url(${coffee})`,
  backgroundSize:"cover",
  backgroundPosition: "center",
  backgroundRepeat:"no-repeat"
}
const Hero = () => {
  const [sidebar,setSideBar] = useState(false);
  return (
    <main style={bgimage}>
      <section className=" relative min-h-[720px] w-full">
        <div className="container">
         {/* navbar section */}
         <div className="flex justify-between items-center  px-8 py-4 cursor-pointer pt-5">
          <div >
            <motion.p 
            initial={{opacity:0,y:100}}
            animate={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.2
            }}
            className="text-3xl">
            <span className="text-lightOrange">CODERS </span>
            <span className="text-white ">CAFE.</span>
            </motion.p>
          </div>
          <motion.div 
           initial={{opacity:0,y:100}}
            animate={{opacity:1, y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.2
            }}
          className="ml-32">
             <img src={MenuIcon} onClick={() => setSideBar(!sidebar)} className="h-8 w-8 bg-white absolute top-0 right-24 mt-5 z-30" />
          </motion.div>
         </div>
         {/* Hero section */}
        <div className="grid grid-cols-1 mid:grid-cols-2 min-h-[750px] lg:grid-cols-3">
          {/* text content section */}
          <div>
          <div className="text-lightOrange">
            <motion.h1
             initial={{opacity:0,y:-100}} 
             animate={{opacity:1, y:0}}
             transition={{
              type:"spring",
              stiffness:100,
              damping:10,
              delay:0.8}}
             className="text-7xl font-bold leading-tight ml-24 mt-48">Blvck<br></br> Tumbler</motion.h1>
          </div>
          <motion.div 
          initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{
              type:"spring",
              stiffness:100,
              daming:10,
              delay:1
            }}className="border-3 border-black shadow-2xl w-56 h-44 mt-12 pl-7 bg-lightGray pt-4 rounded-xl">
           <div className="mr-44">
              <h1 className="text-2xl text-lightOrange mb-6 w-80">Black Lifestyle Lovers, </h1>
              <h1 className="text-wrap w-80 text-lightOrange">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente voluptas natus amet officiis! Iure fuga repudiandae nihil libero abter which cna be aas im? </h1>
            </div>
          </motion.div>
          </div>
          {/* hero image section */}
          <div className="relative"> 
            <motion.main
             initial={{opacity:0, scale:0}}
             animate={{opacity:1,scale:1}}
             transition={{
              type:"spring",
              stiffness:100,
              daming:10,
              delay:0.4
             }}
            style={coffeeCup} className="relative z-40 h-[800px]" />
              {/* circle for the image */}
           <motion.div 
           initial={{opacity:0,y:100}}
           animate={{opacity:1,y:0}}
           transition={{
            type:"spring",
            stiffness:100,
            daming:10,
            delay:1
           }}
           className="h-[180px] w-[180px] rounded-full border-[20px] absolute top-24 right-7 border-Primary  ">

          </motion.div>
          </div>

          {/* third div section */}
          <motion.div
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{
            type:"spring",
            stiffness:100,
            daming:10,
            delay:1
          }}
           className="border-3 border-black shadow-2xl w-96 mr-32 h-44 mt-[420px]  bg-darkGray pt-4 rounded-xl">
            <div className="mr-44">
              <h1 className="text-2xl text-lightOrange mb-6 w-80  ">The Design, </h1>
              <h1 className="text-wrap w-96 text-lightOrange pr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere aliquam explicabo nulla dignissimos ut at, aliquid consequatur illum qui ipsum </h1>
            </div>
          </motion.div>

        </div>
        </div>
        {/* SideBar Section */}
        {
          sidebar &&
           <motion.div 
           initial={{x:"100%"}}
           whileInView={{x:0}}
           className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-Primary/80 to-primaryDark/80 backdrop-blur-sm z-10 cursor-pointer">
          <div className="w-full h-full flex justify-center items-center gap-6">
            <div className="w-[1px] h-[70px] bg-white"> </div>
            {/* {Search icons} */}
            <div className="block ">
            <FaFacebookF className="mb-3 hover:scale-125" size={20} />
            <FaTwitter className="mb-3 hover:scale-125" size={20} />
            <FaInstagram  className="mb-3 hover:scale-125"size={20} />
            </div>
            
            <div className="w-[1px] h-[70px] bg-white"> </div>
          </div>
        </motion.div>
        }
       
      </section>
    </main>

  );
};

export default Hero;
