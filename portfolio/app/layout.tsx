import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ReactNode } from "react";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#240231] text-gray-900 antialiased`}>
        <CustomCursor/>
        {children}
      </body>
    </html>
  );
}
