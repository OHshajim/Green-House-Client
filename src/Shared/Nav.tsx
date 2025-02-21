"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  const path = usePathname().toLowerCase();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "shop" },
    { href: "/about-us", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/sign-up", label: "Sign Up" },
  ];

  return (
    <header className="bg-[#070707]">
      <div className="navbar max-w-[1800px] mx-auto p-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl text-[#bed6ff] uppercase font-bold"
        >
          Green House
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition duration-300 tracking-wide text-base ${
                    path.startsWith(href)
                      ? "text-[#bed6ff] font-bold scale-110"
                      : "text-white hover:scale-110 hover:text-[#bed6ff]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center pt-16 z-40"
          >
            <ul className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="py-2 text-center">
                  <Link
                    href={href}
                    className={`block py-2 transition duration-300 tracking-wide text-lg ${
                      path.startsWith(href)
                        ? "text-[#bed6ff] font-bold"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#bed6ff]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
