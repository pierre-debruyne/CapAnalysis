import type { Metadata } from "next";
import "./globals.css"; 
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "CAPANALYSIS | Your Wealth Your Terms",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
