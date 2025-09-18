// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Work = () => {
  const workDetail = [
    {
      leftContent: {
        title: "MUSIC WORKSHOP",
        subTitles: ["Brochure", "Illustrations"],
      },
      path: "/musicWorkShop",
      image: "/Work_Assets/5d79f1920a0d93db8eb08d5dd099929dd38a76db.png",
    },
    {
      leftContent: {
        title: "ADVERTISING AGENCY",
        subTitles: ["Mix Media", "Social Media"],
      },
      path: "/advertisingAgency",
      image: "/Work_Assets/ab7b0642f108f2faaafb2f335e30dcad2aa26fa2.jpg",
    },
    {
      leftContent: {
        title: "THE COURTYARD",
        subTitles: ["Hoardings", "Standee", "Social Media"],
      },
      path: "/theCourtyard",
      image: "/Work_Assets/6f25c45ca6ee0b6f887f6b77e8278fd233539654.jpg",
    },
    {
      leftContent: {
        title: "ECOSAA",
        subTitles: ["Social Media", "Website Banners", "Amazon Listing"],
      },
      path: "/ecosaa",
      image: "/Work_Assets/45396e96ae9431fc253d63a4508846eb1eb0c0c8.jpg",
    },
    {
      leftContent: {
        title: "BRITANIA BE YOU",
        subTitles: ["Social Media"],
      },
      path: "/britaniaBeYou",
      image: "/Work_Assets/2c26dc1eeadd67ca5387eeb391c517fdf11ea887.jpg",
    },
    {
      leftContent: {
        title: "JIVRAJ 9",
        subTitles: ["Social Media", "Blog cover"],
      },
      path: "/jivraj9",
      image: "/Work_Assets/09fb0225775fdb688b2574f5bcf775d1bd58ad8e.jpg",
    },
    {
      leftContent: {
        title: "SURESH ZAVERI",
        subTitles: ["Social Media"],
      },
      path: "/sureshZaveri",
      image: "/Work_Assets/fdfcf67acbfd313632f240545c1f6757397564cf.jpg",
    },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#3E3C3C] text-[#D9D7CB]">
      <Navbar />

      {/* Header */}
      <div className="px-6 sm:px-8 py-12 sm:py-20">
        <img
          src="/Work_Assets/Crafted Collection.png"
          alt="Crafted Collection"
          className="w-full rounded-xl"
        />
      </div>

      {workDetail.map((element, index) => (
        <div key={index}>
          <motion.section
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 lg:gap-24 px-6 sm:px-8 pb-12 sm:pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
          >
            {/* Left Text */}
            <div className="md:col-span-4 flex flex-col gap-4 order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                {element.leftContent.title}
              </h2>
              <div className="flex flex-wrap gap-2 text-sm sm:text-base md:text-lg">
                {element.leftContent.subTitles.map((x, subIndex) => (
                  <span
                    key={subIndex}
                    className="border border-white py-1 px-3 rounded-xl hover:bg-[#D9D7CB] hover:text-[#3E3C3C] transition duration-300"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-4 flex justify-center order-2">
              <img
                src={element.image}
                alt={element.leftContent.title}
                className="w-full max-w-md md:max-w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Link */}
            <div className="md:col-span-4 flex items-start justify-start md:justify-end order-3">
              <Link
                to={element.path}
                className="text-lg sm:text-xl md:text-2xl border border-white py-2 px-4 rounded-xl hover:bg-[#D9D7CB] hover:text-[#3E3C3C] transition duration-300"
              >
                VIEW MY PROJECT
              </Link>
            </div>
          </motion.section>

          {/* Divider */}
          {index !== workDetail.length - 1 && (
            <div className="h-1 border-t border-[#D9D7CB] pb-12 sm:pb-16 mx-6 sm:mx-8"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Work;
