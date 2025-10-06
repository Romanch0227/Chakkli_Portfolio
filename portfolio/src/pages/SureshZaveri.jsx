import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const SureshZaveri = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />
      <div className="px-6 sm:px-8 py-12 sm:py-20">
        <img
          src="/Suresh_Zaveri_Assets/img.png"
          alt="Crafted Collection"
          className="w-full"
        />
      </div>
      <div className="rounded-2xl pb-10 md:pb-20 lg:pb-36">
        <img
          src="/Suresh_Zaveri_Assets/Image--.jpg"
          className="object-cover w-full"
        />
      </div>
      <div className="pb-10 md:pb-20 lg:pb-36">
        <span className="sm:text-xl md:text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-3xl md:text-5xl font-semibold text-white py-2 sm:py-4 md:my-6 lg:my-8 break-words">
          Suresh Zaveri – Crafting Timeless Elegance
        </div>
        <div className="text-xl md:text-4xl text-white break-words">
          <p>
            Suresh Zaveri is a jewelry brand that celebrates every facet of adornment—from the
            grandeur
            <br />
            of bridal pieces to the subtle charm of daily wear.
            <br />
          </p>
          <p>
            <br />
            I had the opportunity to shape their digital story through social media. The result was a
            blend of tradition and
            <br />
            innovation, where every jewel told its own tale of beauty.
          </p>
          <Link to="https://www.instagram.com/sureshzaveri_ahmedabad?igsh=bjVjbm5jemx2NGNr" target="_blank">
            <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 sm:text-xl md:text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
              Instagram
            </div>
          </Link>
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
