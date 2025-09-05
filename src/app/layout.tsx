import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { montserrat, playfair } from "@/app/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAPANALYSIS | Your Wealth Your Terms",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} h-full w-full`}
    >
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}