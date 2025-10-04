import React, { useEffect, useState } from "react";
import ADHERA from "../assets/images/Adhera.jpg"
import KALHAAR from "../assets/images/Kalhaar.jpg"
import ASSA from "../assets/images/Assa.jpg"
import CRUS from "../assets/images/crus2.jpg"

const Scoreboard = () => {

 
  const teams = [
    { id: 1, name: "Adhera", logo: ADHERA, score: 42 },
    { id: 2, name: "Kalhaar", logo: KALHAAR, score: 78 },
    { id: 3, name: "Assassins", logo: ASSA, score: 56 },
    { id: 4, name: "Crusaders", logo: CRUS, score: 64 },
  ];

  return (
    <div className="scoreboard-container h-screen bg-white py-20 px-6">
      {/* Scoreboard Heading */}
      <h1 className="text-4xl font-bold mb-12 text-center text-black">SCORE BOARD</h1>

      {/* Grid Layout for Teams */}
      
      <iframe
              src="https://stthomaskannur.ac.in/ignite/statistics/"
              className=" w-full h-full border-0"
              title="Statistics"
              allowFullScreen
            />
      
    </div>
  );
};

export default Scoreboard;



