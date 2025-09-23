import React from "react";
import KALHAAR from "../assets/images/Kalhaar.jpg";
import ASSA from "../assets/images/Assa.jpg";
import CRUS from "../assets/images/crus2.jpg";
import ADHERA from "../assets/images/Adhera.jpg";
import { motion } from "framer-motion";

const Teams = () => {
  const sweepVariants = {
    rest: {
      x: -200,
      opacity: 0,
      transition: { opacity: { duration: 0.2 }, x: { duration: 0, delay: 0.2 } },
    },
    hover: { x: 400, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const vignetteVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 0.6, transition: { duration: 0.3 } },
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 px-8 py-12">
      <h1 className="text-4xl font-bold mb-20 text-center text-cyan-700 tracking-wide">
        OUR TEAMS
      </h1>
      {/* To try other fonts quickly, replace font-sport with one of:
          font-sportRusso | font-sportGraduate | font-sportBebas */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Team 1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.75 }}
         >
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_0_25px_rgba(0,255,200,0.8),0_0_60px_rgba(0,128,255,0.7)] overflow-hidden ring-1 ring-white/5 hover:ring-2 hover:ring-cyan-400/60"
          style={{
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${ADHERA})`,
              borderRadius: "inherit",
            }}
          ></div>
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
            }}
            variants={vignetteVariants}
          />
          
          <motion.div
            className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
            variants={sweepVariants}
          />
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </motion.div>
        </motion.div>

        {/* Team 2 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
         >
        <motion.a
          initial="rest"
          whileHover="hover"
          animate="rest"
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/red.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_0_25px_rgba(0,255,200,0.8),0_0_60px_rgba(0,128,255,0.7)] overflow-hidden ring-1 ring-white/5 hover:ring-2 hover:ring-cyan-400/60"
          style={{
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${KALHAAR})`,
              borderRadius: "inherit",
            }}
          ></div>
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
            }}
            variants={vignetteVariants}
          />
          
          <motion.div
            className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
            variants={sweepVariants}
          />
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </motion.a>
        </motion.div>

        {/* Team 3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity:1,  y: 0 }} 
          transition={{ duration: 1.25 }}
         >
        <motion.a
          initial="rest"
          whileHover="hover"
          animate="rest"
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/blue.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_0_25px_rgba(0,255,200,0.8),0_0_60px_rgba(0,128,255,0.7)] overflow-hidden ring-1 ring-white/5 hover:ring-2 hover:ring-cyan-400/60"
          style={{
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 0.7s ease, transform 0.7s ease", // Slower transition with smooth ease
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${ASSA})`,
              borderRadius: "inherit",
            }}
          ></div>
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
            }}
            variants={vignetteVariants}
          />
          
          <motion.div
            className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
            variants={sweepVariants}
          />
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </motion.a>
        </motion.div>

        {/* Team 4 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
         >
        <motion.a
          initial="rest"
          whileHover="hover"
          animate="rest"
          href="https://stthomaskannur.ac.in/ignite/dpoints/team/yellow.php"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-6 bg-gray-800 text-white rounded-lg shadow-md transform transition-transform duration-700 hover:scale-110 hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_0_25px_rgba(0,255,200,0.8),0_0_60px_rgba(0,128,255,0.7)] overflow-hidden ring-1 ring-white/5 hover:ring-2 hover:ring-cyan-400/60"
          style={{
            height: "400px",
            width: "300px",
            filter: "brightness(0.85)",
            transition: "filter 1.0s ease, transform 0.7s ease",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${CRUS})`,
              borderRadius: "inherit",
            }}
          ></div>
          <motion.div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
            }}
            variants={vignetteVariants}
          />
          
          <motion.div
            className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
            variants={sweepVariants}
          />
          <h2 className="relative z-10 mt-4 text-center text-lg font-bold"></h2>
        </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;

