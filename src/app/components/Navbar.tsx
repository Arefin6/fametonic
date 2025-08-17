"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Image src={logo} alt="logo" />
        <nav className="space-x-6 hidden md:flex">
          <Link href="#" className="text-grey-600">
            About Us
          </Link>
          <Link href="#" className="text-grey-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
Navbar;
