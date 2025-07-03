'use client';

import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

// Place coordinates and keys must match placeDetails
const places = [
  { name: "lobby", x: 1095, y: 300, width: 80, height: 90 },
  { name: "trainingbuilding", x: 825, y: 410, width: 290, height: 80 },
  { name: "cafetaria", x: 865, y: 375, width: 80, height: 32 },
  { name: "dorm-A", x: 455, y: 190, width: 205, height: 90 },
  { name: "dorm-B", x: 780, y: 510, width: 350, height: 145 },
  { name: "ballroom", x: 930, y: 315, width: 160, height: 60 },
  { name: "mosque", x: 300, y: 265, width: 130, height: 85 },
  { name: "entranceGate", x: 20, y: 270, width: 65, height: 65 },
  { name: "eastparking", x: 665, y: 245, width: 170, height: 70 },
  { name: "westparking", x: 215, y: 415, width: 275, height: 80 },
  { name: "sportcenter", x: 235, y: 510, width: 235, height: 110 },
  { name: "courtyard", x: 950, y: 375, width: 135, height: 32 },
];

// Place details with name and image
const placeDetails: Record<string, { name: string; image: string }> = {
  "lobby": {
    name: "Lobby",
    image: "/lobby1.png",
  },
  "trainingbuilding": {
    name: "Training Building",
    image: "/trainingbuilding.jpg",
  },
  "cafetaria": {
    name: "Cafetaria",
    image: "/cafetaria1.png",
  },
  "dorm-A": {
    name: "Dormitory A",
    image: "/dormA1.png",
  },
  "dorm-B": {
    name: "Dormitory B",
    image: "/dormB.png",
  },
  "ballroom": {
    name: "Ballroom",
    image: "/ballroom1.png",
  },
  "mosque": {
    name: "Mosque",
    image: "/mosque1.png",
  },
  "entranceGate": {
    name: "Entrance Gate",
    image: "/entrance1.png",
  },
  "eastparking": {
    name: "Parking",
    image: "/eastParking.png",
  },
  "westparking": {
    name: "Parking",
    image: "/westParking1.png",
  },
  "sportcenter": {
    name: "Sport Center",
    image: "/sportCenter1.png",
  },
  "courtyard": {
    name: "Courtyard",
    image: "/courtyard.png",
  },
};

const Dashboard = () => {
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);
  const router = useRouter();

  const handleDirection = () => {
    if (selectedPlace) router.push(`/${selectedPlace}/direction`);
  };

  const handleInfo = () => {
    if (selectedPlace) router.push(`/${selectedPlace}`);
  };

  useEffect(() => {
    if (selectedPlace) {
      const timeout = setTimeout(() => {
        setSelectedPlace(null);
      }, 30000); // 30,000ms =  30 seconds

      return () => clearTimeout(timeout); // Clear timer if modal is closed or place changes
    }
  }, [selectedPlace]);

  return (
  <div className="flex flex-col w-full min-h-screen bg-white">
    <div className="fixed top-0 left-0 w-full">
      <Navbar />
    </div>

    {/* Spacer under navbar */}
    <div className="h-[60px]" />

    {/* SVG Map */}
    <div className="w-full top-5 px-4 py-8">
      <svg
        viewBox="0 0 1500 900"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href="/JTLC.png" x="0" y="0" width="100%" height="100%" />
        {places.map(({ name, x, y, width, height }) => (
          <rect
            key={name}
            x={x}
            y={y}
            width={width}
            height={height}
            fill="transparent"
            rx="5"
            ry="5"
            onClick={() => setSelectedPlace(name)}
            className="cursor-pointer"
          >
            <title>{placeDetails[name]?.name || name.replace(/-/g, ' ')}</title>
          </rect>
        ))}
      </svg>
    </div>

    {/* Map Legend */}
    <div className="w-full px-4 pb-6">
      <h2 className="text-xl  md:text-3xl font-semibold text-gray-900 mb-4">
        Map Legend
      </h2>
      <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm">
        {[
          { name: <span className="font-semibold">Lobby</span>, color: "#ff0f00" },
          { name: (
            <>
              <span className="font-semibold">Training Building</span>
              <br />
              <span className="text-xs text-gray-600">(Front office, classroom, auditorium, etc)</span>
            </>
          ), color: "#000000" },
          { name: <span className="font-semibold">Cafetaria</span>, color: "#c1ff72" },
          { name: <span className="font-semibold">Dormitory A</span>, color: "#5ce1e6" },
          { name: <span className="font-semibold">Ballroom</span>, color: "#ff66c4" },
          { name: <span className="font-semibold">Dormitory B</span>, color: "#cb6ce6" },
          { name: <span className="font-semibold">Entrance Gate</span>, color: "#a44f30" },
          { name: <span className="font-semibold">Mosque</span>, color: "#ffde59" },
          { name: <span className="font-semibold">Parking Area</span>, color: "#ff7a00" },
          { name: <span className="font-semibold">Sport Center</span>, color: "#0ed837" },
          { name: <span className="font-semibold">Courtyard</span>, color: "#5e17eb" },
        ].map(({ name, color }, index) => (
          <div key={index} className="flex items-center gap-2">
            <MapPin className="w-6 h-6" fill={color} stroke={color} />
            <span className="text-sm leading-snug">{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xl text-gray-500">
        <p>Click on the map to navigate to different sections or scan the QR below.</p>
      </div>
    </div>

    {/* QR Code */}
    <div className="w-full flex justify-end pb-10 mt-4">
      <img 
        src="/QR_JTLC.png" 
        alt="QR Code JTLC"
        className="w-36 h-36 object-contain"
      />
    </div>

    {/* Modal */}
        <AnimatePresence>
          {selectedPlace && (
            <>
              {/* Clickable transparent overlay */}
              <motion.div
                className="fixed inset-0 bg-black/20 z-10"
                onClick={() => setSelectedPlace(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white rounded-xl shadow-lg p-4 pb-10 z-20"
                onClick={(e) => e.stopPropagation()} 
              >
                <h3 className="text-lg font-bold text-black capitalize mb-3">
                  {placeDetails[selectedPlace]?.name || selectedPlace.replace(/-/g, ' ')}
                </h3>

                {placeDetails[selectedPlace]?.image && (
                  <img
                    src={placeDetails[selectedPlace].image}
                    alt={placeDetails[selectedPlace].name}
                    className="w-full h-32 object-cover rounded mb-4"
                  />
                )}

                <div className="flex flex-col gap-1.5">
                  {selectedPlace !== "lobby" && (
                  <button
                    className="bg-white text-black font-semibold px-4 py-2 rounded"
                    onClick={handleDirection}
                  >
                    Direction
                  </button>
                  )}
                  <button
                    className="bg-white text-black font-semibold px-4 py-2 rounded"
                    onClick={handleInfo}
                  >
                    Information
                  </button>
                </div>

                <button
                  className="absolute bottom-3 left-4 text-xs text-gray-500 hover:underline"
                  onClick={() => setSelectedPlace(null)}
                >
                  Cancel
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
);
}

export default Dashboard;
