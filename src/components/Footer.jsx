import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1f24] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Pawan Prasad</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              MERN Stack Developer passionate about creating digital experiences 
              that solve real problems. Always learning, always building.
            </p>
            <div className="flex items-center text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              Available for new opportunities
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#resume" className="text-gray-400 hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">pawan.prasad@email.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
            
            {/* Copyright */}
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Pawan Prasad. Made with</span>
              <Heart size={16} className="mx-1 text-red-500" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
        
        {/* Additional Footer Note */}
        <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-500 text-sm">
            Open to freelance projects • Remote work friendly • Always learning something new
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;