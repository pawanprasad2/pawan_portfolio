"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/project" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contactMe" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-[60] max-w-5xl transition-all duration-500 ${
        scrolled ? "top-4 w-[95%] md:w-[90%]" : "top-8 w-[90%] md:w-[85%]"
      }`}
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.9)",
          boxShadow: scrolled
            ? "0px 4px 25px rgba(0,0,0,0.6)"
            : "0px 2px 10px rgba(0,0,0,0.4)",
        }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-500"
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-5">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-xl md:text-2xl font-sans text-white">
              pawan
            </span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-white ml-1"
            >
              .
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center font-sans gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium py-2 px-1 transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <motion.span
                      layoutId="activeLine"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full ${
                        isActive ? "block" : "hidden"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-[70]">
            <button
              className="relative p-2 rounded-lg bg-white/5 backdrop-blur-lg transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed left-1/2 -translate-x-1/2 top-[100%] w-[90%] bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl z-[50] mx-auto mt-3 shadow-xl shadow-black/40"
          >
            <ul className="py-4">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="px-6 py-3"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white translate-x-2"
                          : "text-white/60 hover:text-white hover:translate-x-2"
                      }`}
                    >
                      <span className="flex items-center">
                        {isActive && (
                          <span className="w-2 h-2 bg-white rounded-full mr-3 transition-all duration-300" />
                        )}
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
