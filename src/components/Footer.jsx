"use client";
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1f24] border-t border-gray-800 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Pawan Prasad
            </motion.h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              MERN Stack Developer passionate about creating digital experiences
              that solve real problems. Always learning, always building.
            </p>
            <div className="flex items-center text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="animate-bounce-slow">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-400 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span className="text-sm">pawanprasad2322@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span className="text-sm">+91-8413085139</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span className="text-sm">Noida, UP, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[
                {
                  icon: Github,
                  href: "https://github.com/pawanprasad2",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pawanprasad2l/",
                },
                {
                  icon: Mail,
                  href: "mailto:pawanprasad2322@gmail.com",
                },
              ].map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all hover:shadow-[0_0_12px_#facc15] group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    size={20}
                    className="text-gray-400 group-hover:text-yellow-400 transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Pawan Prasad. Made with</span>
              <Heart size={16} className="mx-1 text-red-500 animate-pulse" />
              <span>and lots of coffee ☕</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
