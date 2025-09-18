import React from "react";
import Navbar from "../components/Navbar";

const TheCourtyard = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-[200px] py-36">
        <span className=" leading-[65%]">Hoardings, Standees &</span>
        <span className="leading-[65%] mt-7">Socials for The Courtyard</span>
      </div>
      <div className="rounded-2xl pb-36">
        <img
          src="/Courtyard_Assets/COURTYARD_HOARDING_12-0.jpg"
          className="object-cover w-full"
        />
      </div>
      <div className="pb-36">
        <span className="text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-5xl font-semibold text-white py-10">
          The Courtyard – A Weekend Retreat, A Visual Journey
        </div>
        <div className="text-4xl text-white pt-2 pb-4">
          The Courtyard is a weekend villa brand, designed as an escape into comfort and calm.
          <br />
          To bring their vision to life, I created promotional hoardings and standees that adorned
          the streets of Ahmedabad—inviting
          <br />
          passersby to imagine their own retreat.
          <br />
          <br />
          Beyond the outdoors, I also managed their social media for several months.
          <br /> Each month carried a fresh concept, woven into visuals and stories that echoed the
          brand’s essence.
          <br />
          From billboards to timelines, the narrative of The Courtyard was crafted to feel both
          inviting and aspirational.
          <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
            Instagram
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-8">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_SM_JUNE.jpg"
            alt="Social Media Grid June 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Social Media Grid June 2024</p>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_SM_JULY.jpg"
            alt="Social Media Grid July 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Social Media Grid July 2024</p>
        </div>

        {/* Card 3 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_APRIL_GRID.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Social Media Grid April 2024</p>
        </div>

        {/* Card 4 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_MAY_SM.jpg"
            alt="Social Media Grid May 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Social Media Grid May 2024</p>
        </div>

        {/* Card 5 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_STANDEE-01.jpg"
            alt="Standee 01"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Standee 01</p>
        </div>

        {/* Card 6 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/COURTYARD_STANDEE-02.jpg"
            alt="Standee 02"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Standee 02</p>
        </div>
        {/* Card 7 */}
        <div className="col-span-12 md:col-span-7 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/Standee Mockup02.jpg"
            alt="Standee 02"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         <div className="col-span-12 md:col-span-5 flex flex-col h-full">
          <img
            src="/Courtyard_Assets/Standee Mockup_01.jpg"
            alt="Standee 02"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TheCourtyard;
