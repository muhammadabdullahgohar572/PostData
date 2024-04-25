import React from "react";
import Hero from "../../img/navbarimg/Mask group.png";

const Lesson = () => {
  return (
    <div className="relative">
      <img src={Hero} alt="This is a Hero Img" className="w-full" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <span className="text-2xl sm:text-4xl font-bold">Discover Your </span>
          <span className="text-2xl sm:text-4xl font-bold text-[#E93740]">Perfect Rental</span>
        <p className="md:font-bold text-lg">Rent Cars, Houses, and Items in Just a Few Clicks</p>
        </div>

      </div>
    </div>
  );
};

export default Lesson;
