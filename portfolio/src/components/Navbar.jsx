import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  // ---- Scroll Handlers ----
  const handleScrollToSection = (id) => {
    if (currentPath === "/") {
      // Already on home → just scroll smoothly
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  // ---- Reusable Nav Item ----
  const NavItem = ({ to, label, onClick, scrollId }) => {
    const isActive = currentPath === to;
    return (
      <button
        onClick={() => {
          if (scrollId) {
            handleScrollToSection(scrollId);
          } else if (onClick) {
            onClick();
          }
          setIsOpen(false);
        }}
        className={`relative font-medium transition-colors duration-300 ${
          isActive && currentPath !== "/"
            ? "underline"
            : "hover:text-primary"
        }`}
      >
        <span className="relative z-10 text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
          {label}
        </span>
      </button>
    );
  };

  return (
    <div className="relative w-full h-[80px] flex items-center px-6 sm:px-8">
      {/* Logo */}
      <div className="text-2xl sm:text-3xl font-bold">
        <Link to="/">BK</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 gap-8 text-lg sm:text-xl">
        <NavItem to="/work" label="Work" onClick={() => navigate("/work")} />
        <NavItem label="About" scrollId="meet-the-maker" />
        <NavItem label="Contact" scrollId="let-us-connect" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-2xl ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#3E3C3C] text-[#D9D7CB] flex flex-col items-center gap-6 py-6 sm:hidden shadow-md z-50">
          <NavItem to="/work" label="Work" onClick={() => navigate("/work")} />
          <NavItem label="About" scrollId="meet-the-maker" />
          <NavItem label="Contact" scrollId="let-us-connect" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
