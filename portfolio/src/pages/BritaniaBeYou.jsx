import Navbar from "../components/Navbar";

const BritaniaBeYou = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />

      <div className="px-6 sm:px-8 py-12 sm:py-20">
        <img
          src="/Britania_Be_You_Assets/img.png"
          alt="Crafted Collection"
          className="w-full"
        />
      </div>
      <div className="rounded-2xl pb-10 md:pb-20 lg:pb-36">
        <img
          src="/Britania_Be_You_Assets/Image.jpg"
          className="object-cover w-full"
        />
      </div>
      <div className="pb-10 md:pb-20 lg:pb-36">
        <span className="sm:text-xl md:text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl">Details</span>
        <div className="text-3xl md:text-5xl font-semibold text-white py-10">
          Britannia Be You – Power in Every Post
        </div>
        <div className="text-xl md:text-4xl text-white">
          Britannia Be You is more than just a protein bar—it’s energy, confidence, and
          individuality wrapped
          <br />
          in every bite. I had the opportunity to shape its digital voice through social media,
          crafting content
          <br />
          that was as vibrant and dynamic as the brand itself. Each post was designed to inspire
          strength,
          <br />
          celebrate authenticity, and connect with an audience always on the move.
          <div className=" border border-[#D9D9D9] w-fit rounded-2xl p-2 sm:text-xl md:text-2xl mt-10 hover:bg-[#D9D9D9] hover:text-[#3E3C3C] transition duration-300">
            Instagram
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* Card 1 */}
        <div className="col-span-12 flex flex-col h-full pb-8">
          <img
            src="/Britania_Be_You_Assets/BU_SM_OCT.jpg"
            alt="BU_SM_OCT"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Britania_Be_You_Assets/BU_SM_OCT-08_02.jpg"
            alt="BU_SM_OCT-08_02"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 3 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Britania_Be_You_Assets/BU_SM_OCT-08_01.jpg"
            alt="BU_SM_OCT-08_01"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 4 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Britania_Be_You_Assets/BU_SM_OCT-01_02.jpg"
            alt="BU_SM_OCT-01_02"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Card 5 */}
        <div className="col-span-12 md:col-span-6 flex flex-col h-full">
          <img
            src="/Britania_Be_You_Assets/BU_SM_OCT-01_01.jpg"
            alt="BU_SM_OCT-01_01"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
      <p className="text-2xl md:text-3xl text-white pt-2 pb-8">Social Media Grid June 2024</p>
    </div>
  );
};

export default BritaniaBeYou;
