// src/app/layout.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  display: "swap",
});

export const metadata = {
  title: "pawan-portfolio",
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