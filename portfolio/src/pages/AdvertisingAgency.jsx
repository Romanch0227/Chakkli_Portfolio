import Navbar from "../components/Navbar";

const AdvertisingAgency = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />

      <div className="flex flex-col items-center justify-center text-[200px] py-36">
        <span className=" leading-[65%]">Social Media for</span>
        <span className="leading-[65%] mt-7">Advertising Agency</span>
      </div>
      <div className="rounded-2xl pb-36">
        <img
          src="/Advertising_Assets/Branding.jpg"
          className="rounded-lg object-cover"
        />
      </div>
      <div className="pb-36">
        <span className="text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-5xl font-semibold text-white py-10">
          Bridging Brands Across the Chasm
        </div>
        <div className="text-4xl text-white">
          This social media grid was created for an advertising agency with one big, bold concept:
          the chasm.
          <br />
          The idea? Helping brands leap from obscurity to recognition, from “just another name” to
          “can’t stop scrolling.”
          <br />
          <br />
          <p>
            o capture that leap, I embraced neon green and deep purple—a striking duo that feels
            both futuristic and fearless.
            <br /> The theme was mixed media, blending digital illustration, typography, and
            abstract visuals into a single scroll-stopping narrative.
            <br />
            The concept and the theme was given by the agency.
          </p>
          <br />
          very tile was thoughtfully designed to spark curiosity, guide the eye, and whisper (or
          shout) a message: creativity is a bridge,
          <br /> not a wall. The result is a bold, cohesive feed that feels alive, daring, and
          entirely bespoke.
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {/* First Row */}
        <div className="col-span-12 md:col-span-6">
          <img
            src="/Advertising_Assets/Artboard 1 copy 4.jpg"
            alt="Advertising Visual 1"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <img
            src="/Advertising_Assets/Artboard 1 copy 5.jpg"
            alt="Advertising Visual 2"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Second Row */}
        <div className="col-span-12 md:col-span-6">
          <img
            src="/Advertising_Assets/Artboard 1 copy 6.jpg"
            alt="Advertising Visual 3"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <img
            src="/Advertising_Assets/Artboard 1 copy 8.jpg"
            alt="Advertising Visual 4"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Full Width Image */}
        <div className="col-span-12">
          <img
            src="/Advertising_Assets/ZGC-GRID.jpg"
            alt="Advertising Grid"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="text-4xl pt-4 pb-8">Social Media Grid</div>
    </div>
  );
};

export default AdvertisingAgency;
