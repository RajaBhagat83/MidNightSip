import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdTempleHindu } from "react-icons/md"
import Payments from "../../assets/Payemtns.png"
import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      viewport={{ once: true, amount: 0.6 }}
      className="w-full bg-Primary text-white mt-24
                 min-h-[550px] lg:h-[550px]
                 px-4 sm:px-10 lg:px-0"
    >
      <div className="flex flex-col lg:flex-row justify-between max-w-[1400px] mx-auto">

        {/* Coders Cafe */}
        <div className="p-6 sm:p-12 lg:p-12 text-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold">CODERS CAFE</h1>

          <h1 className="w-full sm:w-96 mt-6 sm:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            quibusdam qui dignissimos in quas, expedita labore, voluptate
            impedit aliquid consequuntur this is the lorem tezt that can be
            generated using loream
          </h1>

          <div className="flex mt-6 sm:mt-8 gap-3">
            <FaPhone className="mt-1" />
            <h1>+1 (23)456 7676</h1>
          </div>

          <div className="mt-4 flex gap-4">
            <MdTempleHindu className="mt-1" />
            <h1>Noida, Uttar Pradesh</h1>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-6 sm:p-12 lg:p-16 lg:ml-16">
          <h1 className="text-2xl sm:text-3xl font-semibold w-64">Quick Links</h1>

          <div className="ml-0 sm:ml-6 lg:ml-6 mt-6 sm:mt-10
                          cursor-pointer text-lg space-y-3">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
            <h1>Search Coffee</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>

        {/* Follow Us */}
        <div className="p-6 sm:p-12 lg:p-16 lg:ml-6 cursor-pointer">
          <h1 className="text-2xl sm:text-3xl font-semibold">Follow Us</h1>

          <div className="mt-6 sm:mt-8 flex gap-5 text-lg">
            <FaFacebookF size={30} className="hover:scale-125 transition" />
            <FaInstagram size={30} className="hover:scale-125 transition" />
            <FaTwitter size={30} className="hover:scale-125 transition" />
            <FaGoogle size={30} className="hover:scale-125 transition" />
          </div>

          <h1 className="text-xl sm:text-2xl mt-6 sm:mt-7">We Accept</h1>

          <img
            src={Payments}
            className="mt-6 sm:mt-8 w-full max-w-[400px] h-[100px] object-cover"
            alt="payments"
          />
        </div>

      </div>

      {/* Divider */}
      <div className="w-full max-w-[1350px] h-[2px] bg-white
                      mx-auto mt-8 sm:mt-12 lg:mt-6">
      </div>
    </motion.div>
  )
}

export default Footer
