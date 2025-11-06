"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/project" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contactMe" },
];

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleNavClick = (href) => {
    setCurrentPath(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 max-w-5xl transition-all duration-500 ${
        scrolled 
          ? "top-2 sm:top-3 md:top-4 w-[96%] sm:w-[95%] md:w-[90%]" 
          : "top-4 sm:top-6 md:top-8 w-[92%] sm:w-[90%] md:w-[85%]"
      }`}
    >
      <div
        style={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.9)",
          boxShadow: scrolled
            ? "0px 4px 25px rgba(0,0,0,0.6)"
            : "0px 2px 10px rgba(0,0,0,0.4)",
        }}
        className="relative rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-500"
      >
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/");
            }}
            className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-sans text-white">
              pawan
            </span>
            <span className="text-white ml-1 animate-pulse">.</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center font-sans gap-4 lg:gap-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative text-sm font-medium py-2 px-1 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-[70] mobile-menu-container">
            <button
              className="relative p-2 rounded-lg bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl z-40 mx-auto mt-2 sm:mt-3 shadow-xl shadow-black/40 mobile-menu-container"
          style={{
            animation: "slideDown 0.25s ease-out",
          }}
        >
          <ul className="py-2 sm:py-4">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li
                  key={item.name}
                  className="px-4 sm:px-6 py-2 sm:py-3"
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block text-sm sm:text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white translate-x-2"
                        : "text-white/60 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    <span className="flex items-center">
                      {isActive && (
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 transition-all duration-300" />
                      )}
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
      `}</style>
    </nav>
  );
}