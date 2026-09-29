"use client";

import Link from "next/link";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  return (
    <div className="w-full h-20 bg-white/70 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 h-full">
        <Logo title="Bloggers" className="text-black" />

        {/* Desktop menu */}
        <div className="hidden md:inline-flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-gray-500 hover:text-black duration-200 text-base font-semibold uppercase relative group overflow-hidden"
            >
              {item.title}
              <div className="absolute bottom-0 left-0 bg-blue-800 h-[1px] w-full -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>

        {/* Burger button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-2xl shadow-md
        flex flex-col transition-all duration-300 ease-in-out overflow-hidden
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {navigation.map((item) => (
          <Link
            href={item.href}
            key={item.title}
            onClick={() => setMenuOpen(false)}
            className={`px-6 py-4 text-base font-semibold uppercase border-b border-gray-100
            duration-200 relative group overflow-hidden
            ${pathname === item.href ? "text-black" : "text-gray-500 hover:text-black"}`}
          >
            {item.title}
            <div
              className={`absolute bottom-0 left-0 bg-blue-800 h-[1px] w-full transition-transform duration-200
              ${pathname === item.href ? "translate-x-0" : "-translate-x-full group-hover:translate-x-0"}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
