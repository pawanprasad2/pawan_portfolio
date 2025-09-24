import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",   // create CSS variable
});


export const metadata = {
  title: "pawan-portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body  className={`${poppins.variable} font-sans`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
