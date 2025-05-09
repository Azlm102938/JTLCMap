'use client';

import { MapPin } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-white overflow-hidden">
  {/* Left - SVG Map */}
  <div className="w-full md:w-4/5 h-[60vh] md:h-full">
    <svg
      viewBox="0 0 1500 900"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href="/LahanJTLC.png" x="0" y="0" width="100%" height="100%" />
      {/* Your rect regions remain unchanged */}
      <a href="/lobby">
        <rect x="1075" y="365" width="90" height="65" fill="transparent" rx="5" ry="5">
          <title>Lobby</title>
        </rect>
      </a>
      <a href="/trainingbuilding">
        <rect x="950" y="510" width="110" height="60" fill="transparent" rx="5" ry="5">
          <title>Training Building</title>
        </rect>
      </a>
      <a href="/cafetaria">
        <rect x="880" y="425" width="70" height="75" fill="transparent" rx="5" ry="5">
          <title>Cafetaria</title>
        </rect>
      </a>
      <a href="/dorm-A">
        <rect x="455" y="30" width="220" height="145" fill="transparent" rx="5" ry="5">
          <title>Dormitory A</title>
        </rect>
      </a>
      <a href="/dorm-B">
        <rect x="825" y="630" width="250" height="125" fill="transparent" rx="5" ry="5">
          <title>Dormitory B</title>
        </rect>
      </a>
      <a href="/auditorium">
        <rect x="825" y="505" width="65" height="80" fill="transparent" rx="5" ry="5">
          <title>Auditorium</title>
        </rect>
      </a>
      <a href="/ballroom">
        <rect x="950" y="350" width="110" height="75" fill="transparent" rx="5" ry="5">
          <title>Ballroom</title>
        </rect>
      </a>
      <a href="/mosque">
        <rect x="320" y="165" width="130" height="155" fill="transparent" rx="5" ry="5">
          <title>Mosque</title>
        </rect>
      </a>
      <a href="/eastparking">
        <rect x="640" y="190" width="230" height="100" fill="transparent" rx="5" ry="5">
          <title>Parking Area</title>
        </rect>
      </a>
      <a href="/westparking">
        <rect x="310" y="445" width="240" height="120" fill="transparent" rx="5" ry="5">
          <title>Parking Area</title>
        </rect>
      </a>
      <a href="/sportcenter">
        <rect x="405" y="605" width="160" height="110" fill="transparent" rx="5" ry="5">
          <title>Sport Center</title>
        </rect>
      </a>
      <a href="/courtyard">
        <rect x="953" y="430" width="105" height="70" fill="transparent" rx="5" ry="5">
          <title>Courtyard</title>
        </rect>
      </a>
      <a href="/amphitheater">
        <rect x="895" y="510" width="50" height="75" fill="transparent" rx="5" ry="5">
          <title>Amphitheater</title>
        </rect>
      </a>
    </svg>
  </div>

  {/* Right - Labels */}
  <div className="w-full md:w-1/5 h-[40vh] md:h-full bg-white px-4 py-6 overflow-y-auto">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 text-left">
    Map Legend
  </h2>
  <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm">
    {[
      { name: "Lobby", color: "#000000" },
      { name: "Training Building (Classroom, Front Office)", color: "#5ce1e6" },
      { name: "Cafetaria", color: "#c1ff72" },
      { name: "Dormitory A", color: "#ff0f00" },
      { name: "Dormitory B", color: "#cb6ce6" },
      { name: "Auditorium", color: "#737373" },
      { name: "Ballroom", color: "#ff66c4" },
      { name: "Mosque", color: "#ffde59" },
      { name: "Parking Area", color: "#ff7a00" },
      { name: "Sport Center", color: "#0ed837" },
      { name: "Courtyard", color: "#5e17eb" },
      { name: "Amphitheater", color: "#d9d9d9" },
    ].map(({ name, color }) => (
      <div key={name} className="flex items-center gap-2">
        <MapPin className="w-6 h-6" fill={color} stroke={color} />
        <span className="text-s md:text-sm">{name}</span>
      </div>
    ))}
  </div>
  <div className="mt-4 text-xs text-gray-500 align-text-bottom">
    <p>Click on the map to navigate to different sections.</p>
  </div>
</div>
</div>
  );
}

export default Dashboard;
