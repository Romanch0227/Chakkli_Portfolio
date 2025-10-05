import React from "react";

const LetUsConnect = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 py-12 sm:py-16">
      {/* Section Title */}
      <img
        src="/Home_Assets/LET’S CONNECT.png"
        alt="Let's Connect"
        className="w-full  object-contain mb-10 sm:mb-16"
      />

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Name Field */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <label
            htmlFor="name"
            className="text-lg sm:text-xl md:text-2xl font-medium min-w-[80px] sm:min-w-[100px]"
          >
            NAME<span className="text-black">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-black rounded-xl w-full py-2 px-3 focus:outline-none text-base sm:text-lg"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <label
            htmlFor="email"
            className="text-lg sm:text-xl md:text-2xl font-medium min-w-[80px] sm:min-w-[100px]"
          >
            EMAIL<span className="text-black">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-black rounded-xl w-full py-2 px-3 focus:outline-none text-base sm:text-lg"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
          <label
            htmlFor="message"
            className="text-lg sm:text-xl md:text-2xl font-medium min-w-[80px] sm:min-w-[100px] mt-1 sm:mt-2"
          >
            MESSAGE<span className="text-black">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="border-2 border-black rounded-xl w-full py-2 px-3 focus:outline-none text-base sm:text-lg"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#71706A] text-white rounded-full px-6 py-2 hover:bg-gray-700 transition text-lg sm:text-xl md:text-2xl my-10 sm:my-14 self-center"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default LetUsConnect;
