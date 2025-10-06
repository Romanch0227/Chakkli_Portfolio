import React from "react";
import { Link } from "react-router-dom";

const MeetTheMaker = () => {
  const handleDownload = (e) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "/Binjal_Resume.pdf";
    link.download = "Binjal_Resume.pdf";
    link.click();
  };
  return (
    <div className="px-4 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20">
      {/* Section Header Image */}
      <img
        src="/Home_Assets/Meet the Maker.png"
        alt="Meet the Maker"
        className="w-full  mb-8 sm:mb-12 md:mb-16  object-contain"
      />

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Left: Profile Image */}
        <div className="flex justify-center items-center basis-1/3 h-[50%] ">
          <img
            src="/WhatsApp_Image.jpeg"
            alt="Profile"
            className="w-full aspect-square object-cover rounded-2xl shadow-xl transition-transform duration-300 "
          />
        </div>

        {/* Right: Text + CTA */}
        <div className="flex flex-col basis-2/3 text-[#3E3C3C] justify-start">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            I’m a design enthusiast obsessed with turning wild ideas into stunning visuals.
            From playful illustrations to vibrant brand worlds, I mix creativity with strategy
            to make your vision unforgettable. Whether it’s a bold logo, a colorful campaign,
            or something totally out-of-the-box, I’ll bring it to life with style and energy.
          </p>

          <Link
            to="/#"
            onClick={handleDownload}
            className="bg-[#71706A] hover:bg-[#5a5954] transition-colors text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-medium mt-6 sm:mt-8 md:mt-10 
               self-center sm:self-start"
          >
            View My Resume
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MeetTheMaker;
