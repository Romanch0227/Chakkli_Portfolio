import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SelectedWork from "../components/SelectedWork";
import MeetTheMaker from "../components/MeetTheMaker";
import LetUsConnect from "../components/LetUsConnect";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const selectedWorkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!selectedWorkRef.current) return;

      const rect = selectedWorkRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowNavbar(false);
      } else if (rect.top <= 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="me-5 bg-[#D9D7CB]">
        {/* Hero Image */}
        <img
          src="/Home_Assets/heading.png"
          alt="Heading"
          className="w-full max-h-[70vh] object-cover"
        />

        {/* Floating Navbar */}
        <div
          className={`fixed bottom-6 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
            showNavbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex gap-4 text-base sm:text-lg md:text-xl bg-[#71706A] max-w-fit px-4 sm:px-6 py-2 sm:py-3 rounded-3xl items-center text-white shadow-lg">
            <Link to="/" className="text-xl sm:text-2xl italic">
              BK
            </Link>
            <span>|</span>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Hero Text */}
        <div className="flex justify-center my-10 sm:my-16 md:my-80">
          <div className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-center px-4">
            <span className="text-[#3E3C3C]">Design with personality,</span>
            <br />
            made just for you
          </div>
        </div>
      </div>

      <SelectedWork ref={selectedWorkRef} />
      <MeetTheMaker />
      <LetUsConnect />
    </>
  );
};

export default Home;
