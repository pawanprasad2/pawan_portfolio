// src/app/layout.js
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
});
const baseUrl =
 "https://www.builtbypawan.site"  || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "Pawan Prasad | MERN Stack & Full Stack Developer Portfolio",
  description:
    "Hi, I'm Pawan Prasad — a passionate MERN Stack and Full Stack Developer specializing in building modern, scalable, and responsive web applications using MongoDB, Express, React, and Node.js. Explore my projects, skills, and experience in full-stack development.",
  keywords: [
    "Pawan Prasad",
    "MERN Stack Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Express",
    "Software Developer Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website"
  ],
  authors: [{ name: "Pawan Prasad" }],
  creator: "Pawan Prasad",
  publisher: "Pawan Prasad",
  openGraph: {
    title: "Pawan Prasad | MERN Stack & Full Stack Developer Portfolio",
    description:
      "Explore the portfolio of Pawan Prasad — a full stack software developer skilled in React, Node.js, Express, and MongoDB. Building clean, scalable, and high-performing web apps.",
    url: "https://www.builtbypawan.site", // replace with your actual domain
    siteName: "Pawan Portfolio",
    images: [
      {
        url: "/favicon/pawanimg.png",
        width: 1200,
        height: 630,
        alt: "Pawan Prasad Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Prasad | MERN Stack & Full Stack Developer",
    description:
      "Full Stack Developer skilled in MERN stack (MongoDB, Express, React, Node.js). Check out my portfolio and projects.",
    
    images: ["/favicon/pawanimg.png"],
  },
  icons: {
    icon: "/favicon/pawanimg.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* roboto.className will inject font into body */}
      <body className={roboto.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}