"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger & close icons

import logo from "../../../public/images/logo.png"; // adjust path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-14 flex justify-between items-center p-4">
        {/* Logo */}
        <Image
          src={logo}
          alt="logo"
          className="w-[104px] md:w-[170px] h-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-[18px] font-semibold text-[#A9A9A9]">
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 mx-[-40px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col  items-end px-4 py-3 space-y-2 text-gray-700 font-semibold">
          <Link href="#" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
