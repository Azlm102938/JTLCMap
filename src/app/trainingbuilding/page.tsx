'use client';

import { useInactivityTimer } from "@/app/components/Timer";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TrainingBuilding = () => {
  useInactivityTimer();
   
  return (
    (
      <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
        {/* Back Button */}
        <div className="absolute bottom-45 left-6  flex flex-col items-center text-black group">
          <Link href="/dashboard" className="flex flex-col items-center">
            <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
              <ArrowLeft className="w-6 h-6" />
            </div>
          </Link>
          <span className="text-sm font-semibold">Back</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">TRAINING BUILDING</h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* LG Button */}
          <Link
            href="/trainingbuilding/LG"
            className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative w-full h-4/5">
              <Image
                src="/lg.png"
                alt="LG"
                fill
                className="object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="w-full h-1/5 flex items-center justify-center bg-white">
              <span className="text-xl font-semibold text-gray-800">LOWER GROUND</span>
            </div>
          </Link>

          {/* GF Button */}
          <Link
            href="/trainingbuilding/GF"
            className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative w-full h-4/5">
              <Image
                src="/gf.png"
                alt="GF"
                fill
                className="object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="w-full h-1/5 flex items-center justify-center bg-white">
              <span className="text-xl font-semibold text-gray-800">GROUND FLOOR</span>
            </div>
          </Link>

          {/* UG Button */}
          <Link
            href="/trainingbuilding/UG"
            className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative w-full h-4/5">
              <Image
                src="/ug.png"
                alt="UG"
                fill
                className="object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="w-full h-1/5 flex items-center justify-center bg-white">
              <span className="text-xl font-semibold text-gray-800">UPPER GROUND</span>
            </div>
          </Link>

          {/* Auditorium Button */}
          <Link
            href="/trainingbuilding/auditorium"
            className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative w-full h-4/5">
              <Image
                src="/auditorium.png"
                alt="Auditorium"
                fill
                className="object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="w-full h-1/5 flex items-center justify-center bg-white">
              <span className="text-xl font-semibold text-gray-800">AUDITORIUM</span>
            </div>
          </Link>

          {/* Amphitheater Button */}
          <Link
            href="/trainingbuilding/amphitheater"
            className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="relative w-full h-4/5">
              <Image
                src="/amphitheater.png"
                alt="Amphitheater"
                fill
                className="object-cover transition duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="w-full h-1/5 flex items-center justify-center bg-white">
              <span className="text-xl font-semibold text-gray-800">AMPHITHEATER</span>
            </div>
          </Link>
        </div>
      </div>
    )
  );
};

export default TrainingBuilding;
