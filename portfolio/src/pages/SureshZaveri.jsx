import Navbar from "../components/Navbar";

const SureshZaveri = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-[200px] py-36">
        <span className=" leading-[65%]">Digital Storytelling</span>
        <span className="leading-[65%] mt-7">for Suresh Zaveri</span>
      </div>
      <div className="rounded-2xl pb-36">
        <img
          src="/Suresh_Zaveri_Assets/Image--.jpg"
          className="object-cover w-full"
        />
      </div>
      <div className="pb-36">
        <span className="text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-5xl font-semibold text-white py-10">
          Suresh Zaveri – Crafting Timeless Elegance
        </div>
        <div className="text-4xl text-white pt-2 pb-4">
          Suresh Zaveri is a jewelry brand that celebrates every facet of adornment—from the
          grandeur
          <br />
          of bridal pieces to the subtle charm of daily wear.
          <br />
          <br />
          I had the opportunity to shape their digital story through social media. The result was a
          blend of tradition and
          <br />
          innovation, where every jewel told its own tale of beauty.
          <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
            Instagram
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 items-stretch pb-4">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-7 flex flex-col">
          <div className="flex-1">
            <img
              src="/Suresh_Zaveri_Assets/SZ_SM_OCT.jpg"
              alt="Social Media Grid — October 2024"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Social Media Grid — October 2024
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-5 flex flex-col">
          <div className="flex-1">
            <img
              src="/Suresh_Zaveri_Assets/SZ_SM_SEP.jpg"
              alt="Social Media Grid — September 2024"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mt-4">
            Social Media Grid — September 2024
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-span-12 md:col-span-4 flex">
          <img
            src="/Suresh_Zaveri_Assets/SZ_SM_DIWALI_03.jpg"
            alt="Social Media Grid — Diwali 2024 (Design 3)"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="col-span-12 md:col-span-4 flex">
          <img
            src="/Suresh_Zaveri_Assets/SZ_SM_DIWALI_02.jpg"
            alt="Social Media Grid — Diwali 2024 (Design 2)"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 5 */}
        <div className="col-span-12 md:col-span-4 flex">
          <img
            src="/Suresh_Zaveri_Assets/SZ_SM_DIWALI_01.jpg"
            alt="Social Media Grid — Diwali 2024 (Design 1)"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <p className="text-xl md:text-2xl lg:text-3xl text-white pb-8">
        Social Media Grid — September 2024
      </p>
    </div>
  );
};

export default SureshZaveri;
