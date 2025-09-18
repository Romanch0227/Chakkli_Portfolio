import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SelectedWork = forwardRef((_props, ref) => {
  const images = [
    {
      src: "/Home_Assets/06d17a73732294692701b63223e4e18ec1a3cbb5.jpg",
      label: "Brouchure",
      path: "/musicWorkShop",
    },
    {
      src: "/Home_Assets/ab7b0642f108f2faaafb2f335e30dcad2aa26fa2.jpg",
      label: "SOCIAL MEDIA",
      path: "/advertisingAgency",
    },
    {
      src: "/Home_Assets/45396e96ae9431fc253d63a4508846eb1eb0c0c8.jpg",
      label: "Ecosaa",
      path: "/ecosaa",
    },
  ];

  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.4 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div ref={ref} className="px-4 sm:px-8 md:px-10 text-[#D9D7CB] bg-[#3E3C3C]">
      {/* Section Title */}
      <img
        src="/Home_Assets/SELECTED WORK.png"
        alt="Selected Work"
        className="w-full  object-contain py-10 sm:py-16 md:py-20"
      />

      {/* Grid of Work Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4">
        {images.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            data-index={index}
            className={`flex flex-col items-start transform transition-all duration-700 ease-out ${
              visibleIndexes.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[500px] xl:h-[600px] object-cover rounded-2xl shadow-lg"
            />
            <div className="mt-3 sm:mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* More Work Button */}
      <div className="flex justify-center pt-12 pb-8 sm:pt-16 sm:pb-12">
        <Link
          to="/work"
          className="bg-[#D9D7CB] text-black px-4 sm:px-6 py-2 sm:py-3 text-lg sm:text-xl md:text-2xl rounded-3xl sm:rounded-4xl transition hover:bg-[#c4c2b6]"
        >
          MORE WORK
        </Link>
      </div>
    </div>
  );
});

export default SelectedWork;
