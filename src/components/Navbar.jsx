"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", className:"", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top + section.offsetHeight > 100) {
            setActive(item.name.toLowerCase());
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[60] max-w-5xl transition-all  duration-500 ${
        scrolled ? "top-4 w-[95%] md:w-[90%]" : "top-8 w-[90%] md:w-[85%]"
      }`}
    >
      <div
        className={`relative rounded-2xl border border-white/10 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-black/95 shadow-2xl shadow-black/50"
            : "bg-black/90 shadow-xl shadow-black/30"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-5">
          {/* Logo */}
          <div className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <span className="text-xl md:text-2xl font-sans text-white">
              pawan
            </span>
            <span className="text-white ml-1 animate-pulse">.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center font-sans gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActive(item.name.toLowerCase())}
                  className={`relative text-sm font-medium py-2  px-1 transition-colors duration-300 ${
                    active === item.name.toLowerCase()
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      active === item.name.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0"
                    } origin-left`}
                  />
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 rounded-full origin-left scale-x-0 hover:scale-x-100 transition-transform duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-[70]">
            <button
              className="relative p-2 rounded-lg bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isOpen ? (
                  <X className="text-white w-6 h-6" />
                ) : (
                  <Menu className="text-white w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[100%] left-0 right-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl z-[50] transition-all duration-300 mx-4 mt-2 ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.name} className="px-6 py-3">
              <a
                href={item.href}
                onClick={() => {
                  setActive(item.name.toLowerCase());
                  setIsOpen(false);
                }}
                className={`block text-base font-medium transition-all duration-300 ${
                  active === item.name.toLowerCase()
                    ? "text-white translate-x-2"
                    : "text-white/60 hover:text-white hover:translate-x-2"
                }`}
              >
                <span className="flex items-center">
                  {active === item.name.toLowerCase() && (
                    <span className="w-2 h-2 bg-white rounded-full mr-3 transition-all duration-300" />
                  )}
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
