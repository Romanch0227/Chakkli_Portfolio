import Navbar from "../components/Navbar";

const Ecosaa = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-[200px] py-36">
        <span className="leading-[65%]"> Ecosaa Online – From</span>
        <span className="leading-[65%] mt-7">Social Media to Amazon</span>
      </div>
      <div className="rounded-2xl pb-36">
        <img src="/Ecosaa_Assets/BANNER_02.jpg" className="object-cover w-full" />
      </div>
      <div className="pb-36">
        <span className="text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-5xl font-semibold text-white py-10">
          Ecosaa – Beauty in Every Imperfection{" "}
        </div>
        <div className="text-4xl text-white pt-2 pb-4">
          Ecosaa is a skincare brand rooted in the Japanese philosophy of Wabi-Sabi—the belief that
          nothing is perfect
          <br />
          and that beauty lives in imperfection. Just as nature carries its marks, so too does our
          skin. We are reflections
          <br />
          of the natural world, and authenticity is our truest form of beauty.
          <br />
          <br />
          Blending ecology and science, Ecosaa celebrates this harmony of nature and self. With this
          philosophy in mind,
          <br /> I crafted their digital presence—spanning social media, Amazon listings, digital
          ads, website banners, and every
          <br />
          creative touchpoint. Each piece was designed to echo the brand’s essence: raw, real, and
          beautifully imperfect.
          <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
            Instagram
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 pb-8">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_SM_SEP.jpg"
            alt="Social Media Grid June 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">
            Social Media Grid September 2024
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-6 flex flex-col">
          <img
            src="/Ecosaa_Assets/ECOSAA_SM_AUGUST.jpg"
            alt="Social Media Grid July 2024"
            className="w-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Social Media Grid August 2024</p>
        </div>

        {/* Card 3 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/BANNER_01.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        {/* Card 4 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/BANNER_03.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Website Banner</p>
        </div>
        {/* Card 5 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_CLEANSER.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         {/* Card 6 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_TONER.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         {/* Card 7 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_HYDRA-SERUM.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         {/* Card 8 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_BOOST-MOISTURISER.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         {/* Card 9 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_BOOST-SERUM.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
         {/* Card 10 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_ADS_SCRUB.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 pb-4">Few Digital Ads out of 16</p>
        </div>
         {/* Card 11 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-01.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
          {/* Card 12 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-04.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
           {/* Card 13 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-03.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
           {/* Card 14 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-06.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
           {/* Card 15 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-05.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
           {/* Card 16 */}
        <div className="col-span-12 flex flex-col h-full">
          <img
            src="/Ecosaa_Assets/ECOSAA_AMAZON-02.jpg"
            alt="Social Media Grid April 2024"
            className="w-full h-full rounded-lg object-cover"
          />
          <p className="text-2xl md:text-3xl text-white pt-2 ">Few Amazon Creatives out of 16</p>
          
        </div>
      </div>
    </div>
  );
};

export default Ecosaa;
