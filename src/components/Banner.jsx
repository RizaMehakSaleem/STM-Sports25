import React from 'react';
import FOOTWHITE from "../assets/images/footwhite.mp4"; 
import LOGOM from "../assets/images/logomain.png";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";

const Banner = () => {
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full h-[90vh] sm:h-[90vh] md:h-[90vh] lg:h-screen bg-black overflow-hidden">
      {/* Background Video */}
      <video
        src={FOOTWHITE}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Event Logo Animation */}
        <motion.img
          src={LOGOM}
          alt="Event Logo"
          className="w-100 sm:w-100 md:w-100 lg:w-72 h-auto mb-8 object-contain" 
          // ⬆️ increased logo size
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        />

        {/* Event Name Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4" 
          // ⬆️ increased IGNITE 2025 text size
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          IGNITE 2025
        </motion.h1>

        <motion.h3
          className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-8" 
          // ⬆️ increased subtitle size
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          St. Thomas College of Engineering & Technology
        </motion.h3>

        {/* Register Now Button Animation */}
        <motion.a
          href="https://stthomaskannur.ac.in/ignite/"
          className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-lg md:text-xl transition-all duration-300 mb-12
             bg-transparent border-2 border-white shadow-lg 
             hover:bg-white/20 hover:backdrop-blur-md hover:shadow-2xl
             hover:from-cyan-700 hover:to-blue-700"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          REGISTER NOW
        </motion.a>
      </div>

      {/* Scroll Down Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="text-white text-center flex flex-col items-center"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          <span className="text-sm sm:text-base md:text-lg font-medium mb-2">
            Scroll Down
          </span>
          <BsMouse size={28} className="animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
