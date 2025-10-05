import Navbar from "../components/Navbar";

const MusicWorkShop = () => {
  return (
    <div className="bg-[#3E3C3C]  text-[#D9D7CB] px-8">
      <Navbar />

      <div className="px-6 sm:px-8 py-12 sm:py-20">
        <img
          src="/Music_Assets/img.png"
          alt="Crafted Collection"
          className="w-full"
        />
      </div>

      <div className="rounded-2xl pb-10 md:pb-20 lg:pb-36">
        <img src="/Music_Assets/06d17a73732294692701b63223e4e18ec1a3cbb5.jpg" className="rounded-lg" />
      </div>
      <div className="pb-10 md:pb-20 lg:pb-36 px-4 sm:px-6 md:px-10">
        <span className="sm:text-xl md:text-2xl px-4 py-2 bg-[#D9D9D9] text-black rounded-2xl inline-block">
          Details
        </span>
        <div className="text-3xl md:text-5xl font-semibold text-white py-2 sm:py-4 md:my-6 lg:my-8 break-words">
          A Hypothetical Project, Crafted Down to the Last Detail
        </div>

        <div className="text-xl md:text-4xl text-white break-words">
          This project may have been hypothetical, but every detail was deliberate.<br />
          Each illustration carries a story, and the color palette?<br />
          Borrowed from the warm whispers of a wooden guitar.<br />
          Every page of this brochure was hand-crafted by yours truly—<br />
          from the tiniest linework to the soft hum of sound waves dancing in the background.<br />
          Even the words you’re reading now were spun straight from my own pen.<br />
          Call it design, call it storytelling— Let’s just say, I enjoyed every minute of making it.
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 pb-12">
        {/* First Row: Left stacked, Right single */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <img
            src="/Music_Assets/BROCHURE_MOCKUP.jpg"
            alt="Music Mockup 1"
            className="w-full rounded-lg object-cover"
          />
          <img
            src="/Music_Assets/BROCHURE_MOCKUP01.jpg"
            alt="Music Mockup 2"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <img
            src="/Music_Assets/BROCHURE_MOCKUP_02.jpg"
            alt="Music Main Visual"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Full-width highlight image */}
        <div className="col-span-12">
          <img
            src="/Music_Assets/Image.jpg"
            alt="Music Full Width"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Second Row: Left stacked with proportions, Right single */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <div className="flex-2">
            <img
              src="/Music_Assets/BROCHURE_MOCKUP_03.jpg"
              alt="Music Mockup 3"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <img
              src="/Music_Assets/BROCHURE_MOCKUP_04.jpg"
              alt="Music Mockup 4"
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <img
            src="/Music_Assets/brochure 2-04.png"
            alt="Music Main Brochure"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicWorkShop;
