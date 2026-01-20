import React, { useState } from "react";
import Bgimage from "../../assets/black and white image.jpg";
import MenuIcon from "../../assets/Menu.svg";
import coffee from "../../assets/realcoffee.png";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgimage = {
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const coffeeCup = {
  backgroundImage: `url(${coffee})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSideBar] = useState(false);

  return (
    <main style={bgimage} className="overflow-x-hidden">
      <section className="relative w-full min-h-screen">
        <div className="container mx-auto">
          {/* Navbar */}
          <div className="flex justify-between items-center px-4 sm:px-8 py-4 pt-5">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-2xl sm:text-3xl"
            >
              <span className="text-lightOrange">CODERS </span>
              <span className="text-white">CAFE.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
            >
              <img
                src={MenuIcon}
                onClick={() => setSideBar(!sidebar)}
                className="h-8 w-8 bg-white absolute top-5 right-5 lg:right-24 z-30 cursor-pointer"
                alt="menu"
              />
            </motion.div>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Left Content */}
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-lightOrange
                           text-center md:text-left mt-24 md:mt-32 lg:mt-48 md:ml-12 lg:ml-24"
              >
                Blvck <br /> Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="border-3 border-black shadow-2xl
                           w-full sm:w-80 lg:w-80
                           mt-8 lg:mt-12 px-5 py-4
                           bg-lightGray rounded-xl mx-auto md:ml-12 lg:ml-24"
              >
                <h1 className="text-xl sm:text-2xl text-lightOrange mb-4">
                  Black Lifestyle Lovers,
                </h1>
                <p className="text-sm sm:text-base text-lightOrange">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae sapiente voluptas natus amet officiis.
                </p>
              </motion.div>
            </div>

            {/* Center Image */}
            <div className="relative flex justify-center">
              <motion.main
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                style={coffeeCup}
                className="relative z-40
                           h-[320px] sm:h-[450px] md:h-[600px] lg:h-[800px]
                           w-full max-w-[400px]"
              />

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="absolute
                           h-[120px] w-[120px]
                           sm:h-[150px] sm:w-[150px]
                           lg:h-[180px] lg:w-[180px]
                           border-[14px] lg:border-[20px]
                           border-Primary rounded-full
                           top-10 sm:top-20 right-4 lg:right-7"
              />
            </div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="border-3 border-black shadow-2xl
                         w-full sm:w-[90%] lg:w-96 lg:h-44
                         mt-12 lg:mt-[420px]
                         bg-darkGray px-6 py-4 rounded-xl
                         mx-auto lg:mr-32"
            >
              <h1 className="text-xl sm:text-2xl text-lightOrange mb-4">
                The Design,
              </h1>
              <p className="text-sm sm:text-base text-lightOrange">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Magni facere aliquam explicabo nulla dignissimos ut.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Sidebar */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full
                       bg-gradient-to-b from-Primary/80 to-primaryDark/80
                       backdrop-blur-sm z-20"
          >
            <div className="w-full h-full flex justify-center items-center gap-6">
              <div className="w-[1px] h-[70px] bg-white" />
              <div className="flex flex-col">
                <FaFacebookF className="mb-3 hover:scale-125 transition" size={20} />
                <FaTwitter className="mb-3 hover:scale-125 transition" size={20} />
                <FaInstagram className="hover:scale-125 transition" size={20} />
              </div>
              <div className="w-[1px] h-[70px] bg-white" />
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
