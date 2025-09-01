import React from 'react'
import {FaFacebookF, FaGoogle, FaInstagram, FaTwitter} from "react-icons/fa"
import { FaPhone } from "react-icons/fa";
import { MdTempleHindu } from "react-icons/md";
import Payments from "../../assets/Payemtns.png"
import {motion} from "framer-motion"

function Footer() {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8 , ease:"easeIn"}}
    viewport={{once:true,amount:0.6}}
     className='h-[550px] w-full bg-Primary text-white mt-24'>
      <div className='flex'>
        <div className='p-16 ml-32 text-lg'>
          {/* Coders Cafe */}
          <h1 className='text-3xl font-semibold'>CODERS CAFE</h1>
          <h1 className='w-96 mt-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quibusdam qui dignissimos in quas, expedita labore, voluptate impedit aliquid consequuntur this is the lorem tezt that can be generated using loream </h1>
          <div className='flex mt-8 gap-3'>
           <FaPhone className='mt-1' />
           <h1>+1 (23)456 7676</h1>
          </div>
          <div className='mt-4 flex gap-4 '>
            <MdTempleHindu className='mt-1' />
            <h1>Noida, Uttar Pradesh</h1>
          </div>
        </div>
         <div className='p-16 ml-44'>
          {/* QUICK LINKS*/}
          <h1 className='text-3xl font-semibold'>Quick Links</h1>
          <div className='ml-12 gap-y-12 cursor-pointer text-lg'>
           <h1 className='mt-10'>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Search Coffee</h1>
          <h1>Privacy Policy</h1>
          </div>
         
        </div>
        <div className='p-16 ml-44 cursor-pointer'>
          {/* FOLLOW US*/}
          <h1 className='text-3xl font-semibold'>Follow Us</h1>
          <div className='mt-8 gap-y-12 cursor-pointer text-lg flex gap-5 '>
           <FaFacebookF size={30} className='hover:scale-125' />
           <FaInstagram size={30}  className='hover:scale-125' />
           <FaTwitter size={30} className='hover:scale-125'  />
           <FaGoogle  size={30} className='hover:scale-125'  />
          </div>
          <h1 className='text-2xl mt-7'>We Accept </h1>
          <img src={Payments} style={{width: "400px",height:"100px" ,objectFit:"cover"}} className='mt-8' />
        </div>
        
        </div>
        <div className="w-[1350px] h-[2px] bg-white ml-72"> </div>
    </motion.div>
  )
}

export default Footer
