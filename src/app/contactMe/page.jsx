"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

function Contactpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#1b1f24] border-t border-gray-700 text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Header */}
   

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Let's Connect</h2>
             <div className=" h-1 w-[50%] border mb-8 border-yellow-500 sm:w-[19%] md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 md:w-[25%] rounded-full" />
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Mail className="text-gray-300" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">pawanprasad2322@gmail.com</p>
                  <p className="text-sm text-gray-400">I'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <Phone className="text-gray-300" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+91-8413085139</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 p-3 rounded-lg">
                  <MapPin className="text-gray-300" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Noida,UP,India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Github className="text-gray-300" size={24} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Linkedin className="text-gray-300" size={24} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <Twitter className="text-gray-300" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="your name "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                    placeholder="yourmail@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-[#1b1f24] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contactpage;