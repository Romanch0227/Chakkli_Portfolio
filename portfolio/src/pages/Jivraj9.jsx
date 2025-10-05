import Navbar from "../components/Navbar";

const Jivraj9 = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />

      <div className="px-6 sm:px-8 py-12 sm:py-20">
        <img
          src="/Jivraj9_Assets/img.png"
          alt="Crafted Collection"
          className="w-full"
        />
      </div>
      <div className="rounded-2xl pb-10 md:pb-20 lg:pb-36">
        <img src="/Jivraj9_Assets/Image 00.jpg" className="object-cover w-full" />
      </div>
      <div className="pb-10 md:pb-20 lg:pb-36">
        <span className="sm:text-xl md:text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-3xl md:text-5xl font-semibold text-white py-2 sm:py-4 md:my-6 lg:my-8 break-words">
          Jivraj9 – Brewing Stories Beyond the Cup
        </div>
        <div className="text-xl md:text-4xl text-white break-words">
          <p>
            Jivraj9 is a tea brand celebrated for its wide range of flavors—from robust blends to
            soothing brews,
            <br />
            each crafted to delight every kind of tea lover.
            <br />
          </p>
          <p>
            <br />
            I had the pleasure of working on their digital presence—shaping social media campaigns,
            blog banners,
            <br />
            Amazon creatives, and digital designs that echoed the warmth and richness of the brand.
            Every creative
            <br />
            was brewed with the same care and authenticity as their tea.
          </p>
          <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
            Instagram
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 items-stretch pb-8">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-5 flex flex-col">
          <div className="flex-1">
            <img
              src="/Jivraj9_Assets/JIV_MAY_SM.jpg"
              alt="Social Media Grid - May 2024"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Social Media Grid — May 2024
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <div className="flex-1">
            <img
              src="/Jivraj9_Assets/JIV_SM_JUNE.jpg"
              alt="Social Media Grid - June 2024"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Social Media Grid — June 2024
          </p>
        </div>

        {/* Card 3 (stacked images) */}
        <div className="col-span-12 md:col-span-5 flex flex-col">
          <div className="flex flex-col flex-1 gap-4">
            <div className="flex-1">
              <img
                src="/Jivraj9_Assets/Image.jpg"
                alt="Social Media Grid Extra 1"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src="/Jivraj9_Assets/Image-1.jpg"
                alt="Social Media Grid Extra 2"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src="/Jivraj9_Assets/Image-2.jpg"
                alt="Social Media Grid Extra 3"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Blog Banners
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <div className="flex-1">
            <img
              src="/Jivraj9_Assets/JIV_JULY_SM.jpg"
              alt="Social Media Grid - July 2024"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Social Media Grid July 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jivraj9;
