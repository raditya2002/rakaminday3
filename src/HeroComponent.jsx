// import React from "react";

const HeroComponent = () => {
  return (
    <div className="flex justify-between items-center mb-8 px-6">
      {/* Section Kiri */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Good Morning, Tyo</h1>
        <p className="text-gray-600">
          Check all your incoming and outgoing transactions here
        </p>
      </div>

      {/* Section Kanan */}
      <div className="flex items-center gap-4">
        <div>
          <p className="text-right font-semibold text-gray-800">
            Ahmad Raditya
          </p>
          <p className="text-gray-600 text-sm">Personal Account</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default HeroComponent;
