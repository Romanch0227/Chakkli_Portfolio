import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // simple icons

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({ to, label, onClick }) => {
    const isActive = currentPath === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`relative font-medium transition-colors duration-300 ${
          isActive && currentPath !== "/" ? "underline" : "hover:text-primary"
        }`}
      >
        <span className="relative z-10 text-3xl sm:text-2xl md:text-3xl lg:text-4xl">{label}</span>
      </Link>
    );
  };

  return (
    <div className="relative w-full h-[80px] flex items-center px-6 sm:px-8">
      {/* Logo on left */}
      <div className="text-2xl sm:text-3xl font-bold">
        <NavItem to="/" label="BK" />
      </div>

      {/* Desktop Menu centered */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 gap-8 text-lg sm:text-xl">
        <NavItem to="/work" label="Work" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
      </div>

      {/* Mobile Menu Button (right side) */}
      <button
        className="sm:hidden text-2xl ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#3E3C3C] text-[#D9D7CB] flex flex-col items-center gap-6 py-6 sm:hidden shadow-md z-50">
          <NavItem to="/work" label="Work" onClick={() => setIsOpen(false)} />
          <NavItem to="/about" label="About" onClick={() => setIsOpen(false)} />
          <NavItem
            to="/contact"
            label="Contact"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
