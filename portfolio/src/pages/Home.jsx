import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SelectedWork from "../components/SelectedWork";
import MeetTheMaker from "../components/MeetTheMaker";
import LetUsConnect from "../components/LetUsConnect";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const selectedWorkRef = useRef(null);
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (!selectedWorkRef.current) return;

      const rect = selectedWorkRef.current.getBoundingClientRect();

      // Add threshold logic to prevent flicker on small screens
      const isVisible = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
      const scrollY = window.scrollY;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (isVisible || scrollY > 400) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="me-5 bg-[#D9D7CB]">
        {/* Hero Image */}
        <img
          src="/Home_Assets/heading.png"
          alt="Heading"
          className="w-full max-h-[70vh] object-cover hidden sm:block sm:mb-50 sm:mt-8"
        />

        {/* Mobile Screens */}
        <img
          src="/Home_Assets/Group_54.png"
          alt="Heading"
          className="w-full max-h-[70vh] object-cover block sm:hidden pb-25"
        />

        <img
          src="/Home_Assets/img.png"
          alt="Heading"
          className="ms-3 w-[60%] max-h-[70vh] object-cover block sm:hidden pb-45"
        />

        {/* Navbar */}
        <div
          className={`
            z-50 flex justify-center fixed bottom-6 left-0 right-0
            transition-all duration-500
            ${showNavbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          `}
        >
          <div
            className="
              flex gap-4 text-base sm:text-lg md:text-xl
              bg-[#71706A] max-w-fit
              px-4 sm:px-6 py-2 sm:py-3
              rounded-3xl items-center text-white shadow-lg
              mx-auto mt-4 sm:mt-0
            "
          >
            <Link to="/" className="text-xl sm:text-2xl italic">
              BK
            </Link>
            <span>|</span>
            <Link to="/work">Work</Link>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();

                if (window.location.pathname === "/") {
                  const section = document.getElementById("meet-the-maker");
                  section?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.history.pushState({}, "", "/");
                  setTimeout(() => {
                    const section = document.getElementById("meet-the-maker");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }
              }}
            >
              About
            </Link>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();

                if (window.location.pathname === "/") {
                  // Already on home, scroll directly
                  const section = document.getElementById("let-us-connect");
                  section?.scrollIntoView({ behavior: "smooth" });
                } else {
                  // Navigate to home, then scroll after page load
                  window.history.pushState({}, "", "/");
                  setTimeout(() => {
                    const section = document.getElementById("let-us-connect");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }
              }}
            >
              Contact
            </Link>

          </div>
        </div>

        {/* Hero Text */}
        <div className="flex justify-center pb-45 sm:my-16">
          <div className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-center px-4">
            <span className="text-[#3E3C3C]">Design with personality,</span>
            <br />
            made just for you
          </div>
        </div>
      </div >

      <SelectedWork ref={selectedWorkRef} />
      <div id="meet-the-maker">
        <MeetTheMaker />
      </div>

      <div id="let-us-connect">
        <LetUsConnect />
      </div>
    </>
  );
};

export default Home;
