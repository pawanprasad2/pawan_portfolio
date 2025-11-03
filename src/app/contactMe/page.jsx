"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Refs for animation
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const infoItemsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title + Line animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "25%",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Contact Info Stagger
      gsap.fromTo(
        infoItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Form fade-in from right
      gsap.fromTo(
        formRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "❌ Failed to send message!");
      }
    } catch {
      toast.error("⚠️ Failed to send email. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-[#1b1f24] border-t border-gray-700 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 ref={titleRef} className="text-3xl font-bold mb-2">
              Let's Connect
            </h2>
            <div
              ref={lineRef}
              className="h-1 w-[50%] border mb-8 border-yellow-500 sm:w-[19%] md:mx-0 bg-gradient-to-r from-yellow-500 to-yellow-400 md:w-[25%] rounded-full"
            />

            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <Mail className="text-gray-300" size={24} />,
                  title: "Email",
                  info: "pawanprasad2322@gmail.com",
                  sub: "I'll respond within 24 hours",
                },
                {
                  icon: <Phone className="text-gray-300" size={24} />,
                  title: "Phone",
                  info: "+91-8413085139",
                },
                {
                  icon: <MapPin className="text-gray-300" size={24} />,
                  title: "Location",
                  info: "Noida, UP, India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (infoItemsRef.current[i] = el)}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gray-800 p-3 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300">{item.info}</p>
                    {item.sub && (
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pawanprasad2"
                  target="_blank"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="text-gray-300" size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/pawanprasad2l/"
                  target="_blank"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="text-gray-300" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Hiring Opportunity or Project Discussion"
                required
              />

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  required
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#1b1f24] px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
            textAlign: "center",
            fontSize: "16px",
          },
        }}
      />
    </div>
  );
}

// Reusable Input Component
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      {...props}
      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-gray-500 transition-colors"
    />
  </div>
);

export default Contactpage;
