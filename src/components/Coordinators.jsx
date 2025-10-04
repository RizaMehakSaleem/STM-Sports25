import React from "react";
import ADARSH from "../assets/images/adharshsir.jpeg";
import VARUN from "../assets/images/varunsir.jpg";
import Muralidharan from "../assets/images/Muralidharansir.jpeg";
import { motion } from "framer-motion";

const Coordinators = () => {
  const coordinators = [
    {
      name: "Muralidharan P T",
      title: "Assistant Professor",
      department: "Department of Physical Education",
      phone: "+919447688876",
      image: Muralidharan,
    },
    {
      name: "ADARSH MADHU",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919995028016",
      image: ADARSH,
    },
    {
      name: "VARUN P V",
      title: "Assistant Professor",
      department: "Mechanical Department",
      phone: "+919495124062",
      image: VARUN,
    },
    
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center text-black">
        OUR COORDINATORS
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25 }}
      >
        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {coordinators.map((coordinator, index) => (
            <div
              key={index}
              className="bg-black w-80 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-6 border border-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-32 h-32 rounded-full mb-6 object-cover border-2 border-white"
                  />
                  <h2 className="text-2xl font-semibold text-white text-center mb-2">
                    {coordinator.name}
                  </h2>
                  <p className="text-white text-center text-lg mb-2">
                    {coordinator.title}
                  </p>
                  <p className="text-white text-center text-lg mb-2">
                    {coordinator.department}
                  </p>
                  <a
                    href={`tel:${coordinator.phone}`}
                    className="text-white font-semibold mt-4 text-center block text-lg hover:text-cyan-900"
                  >
                    {coordinator.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Coordinators;


