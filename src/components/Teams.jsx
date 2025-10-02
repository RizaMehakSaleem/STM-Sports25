import React from "react";
import KALHAAR from "../assets/images/Kalhaar.jpg";
import ASSA from "../assets/images/Assa.jpg";
import CRUS from "../assets/images/crus2.jpg";
import ADHERA from "../assets/images/Adhera.jpg";
import { motion } from "framer-motion";

const Teams = () => {
  const sweepVariants = {
    rest: { x: -200, opacity: 0, transition: { opacity: { duration: 0.2 }, x: { duration: 0, delay: 0.2 } } },
    hover: { x: 400, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
  };
  const vignetteVariants = { rest: { opacity: 0 }, hover: { opacity: 0.6, transition: { duration: 0.3 } } };

  const cardClasses =
    "relative block p-6 bg-gray-100 text-black rounded-lg " +
    "shadow-[0_0_15px_rgba(192,192,192,0.5)] " + // subtle silver glow always
    "transform transition-transform duration-700 " +
    "hover:scale-110 hover:-translate-y-2 hover:rotate-1 " +
    "hover:shadow-[0_0_50px_rgba(192,192,192,0.95),0_0_80px_rgba(220,220,220,0.8)] " + // thick silver hover
    "overflow-hidden ring-1 ring-gray-200 hover:ring-2 hover:ring-gray-400/60";

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-20 text-center text-black tracking-wide">
        OUR TEAMS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 justify-items-center">
        {/* Team 1 */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.75 }}>
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={cardClasses}
            style={{ height: "400px", width: "300px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ADHERA})`, borderRadius: "inherit" }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)" }}
              variants={vignetteVariants}
            />
            <motion.div
              className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
              variants={sweepVariants}
            />
          </motion.div>
        </motion.div>

        {/* Team 2 */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <motion.a
            initial="rest"
            whileHover="hover"
            animate="rest"
            href="https://stthomaskannur.ac.in/ignite/dpoints/team/red.php"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
            style={{ height: "400px", width: "300px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${KALHAAR})`, borderRadius: "inherit" }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)" }}
              variants={vignetteVariants}
            />
            <motion.div
              className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
              variants={sweepVariants}
            />
          </motion.a>
        </motion.div>

        {/* Team 3 */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.25 }}>
          <motion.a
            initial="rest"
            whileHover="hover"
            animate="rest"
            href="https://stthomaskannur.ac.in/ignite/dpoints/team/blue.php"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
            style={{ height: "400px", width: "300px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ASSA})`, borderRadius: "inherit" }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)" }}
              variants={vignetteVariants}
            />
            <motion.div
              className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
              variants={sweepVariants}
            />
          </motion.a>
        </motion.div>

        {/* Team 4 */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <motion.a
            initial="rest"
            whileHover="hover"
            animate="rest"
            href="https://stthomaskannur.ac.in/ignite/dpoints/team/yellow.php"
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
            style={{ height: "400px", width: "300px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${CRUS})`, borderRadius: "inherit" }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)" }}
              variants={vignetteVariants}
            />
            <motion.div
              className="absolute inset-y-0 w-1/3 -left-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none blur-sm"
              variants={sweepVariants}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;
