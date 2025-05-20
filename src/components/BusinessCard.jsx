import React from "react";
import { Phone, Globe, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const BusinessCard = () => {
  return (
    <motion.div
      className="flex w-[336px] h-[192px] bg-white shadow-xl rounded-xl overflow-hidden font-sans border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 12px 24px rgba(0,0,0,0.1)" }}
    >
      {/* Left Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-800">Chukwuka Erondu</h1>
          <p className="text-xs text-red-600 font-medium mb-2">
            Founder / Full Stack Developer
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700 text-xs">
            <Phone className="w-4 h-4 text-red-500 mr-2" />
            <span>+234 811 278 0944</span>
          </div>
          <div className="flex items-center text-gray-700 text-xs">
            <Globe className="w-4 h-4 text-red-500 mr-2" />
            <span>oriontechhub.com</span>
          </div>
          <div className="flex items-center text-gray-700 text-xs">
            <MapPin className="w-4 h-4 text-red-500 mr-2" />
            <span>Ikeja, Lagos</span>
          </div>
          <div className="flex items-center text-gray-700 text-xs">
            <Mail className="w-4 h-4 text-red-500 mr-2" />
            <span>oriontechhub@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Section (Brand Mark) */}
      <motion.div
        className="w-1/3 relative bg-gray-900 flex flex-col items-center justify-center text-white"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          animate={{
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-red-600 opacity-70"></div>
          <div className="absolute w-10 h-10 rounded-full bg-red-500 opacity-90"></div>
          <span className="relative z-10 font-bold text-sm">CE</span>
        </motion.div>
        {/* <div className="text-[10px] absolute bottom-2 text-gray-300">#001</div> */}
      </motion.div>
    </motion.div>
  );
};

export default BusinessCard;
