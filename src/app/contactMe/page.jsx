"use client"

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showToast("⚠️ Please fill in all fields", "error");
      return;
    }
    
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      showToast("✅ Message sent successfully!", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      showToast("⚠️ Network error. Try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1b1f24] text-white flex items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
          {/* Left Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              Let's Connect
            </h2>
            <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full w-20 sm:w-24 md:w-32 mb-8 sm:mb-10"></div>

            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10">
              {[
                {
                  icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />,
                  title: "Email",
                  info: "pawanprasad2322@gmail.com",
                  sub: "I'll respond within 24 hours",
                },
                {
                  icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />,
                  title: "Phone",
                  info: "+91-8794479172",
                },
                {
                  icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />,
                  title: "Location",
                  info: "Noida, UP, India",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-gray-800 p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 break-words">
                      {item.info}
                    </p>
                    {item.sub && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5">
                Follow Me
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/pawanprasad2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 sm:p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pawanprasad2l/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2.5 sm:p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="order-1 lg:order-2 bg-gray-800/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-700/60 shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">
              Send a Message
            </h2>
            
            <div className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Hiring Opportunity"
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors text-sm sm:text-base resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-white text-[#1b1f24] font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg flex justify-center items-center gap-2 hover:bg-gray-200 active:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full px-4">
          <div
            className={`px-4 sm:px-6 py-3 rounded-lg shadow-lg text-sm sm:text-base text-center ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contactpage;