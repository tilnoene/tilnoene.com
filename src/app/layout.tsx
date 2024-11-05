import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const biotif = localFont({
  src: "./fonts/Biotif-RegularItalic.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Victor Santos",
  description: "Programming goes far beyond syntax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${biotif.variable} antialiased`}>
        <div className="max-w-[760px] bg-blue-100 ml-auto mr-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
