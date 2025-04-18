import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StarFieldBackground from "../components/background/starFieldThreeJs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maduranga's Portfolio",
  description: "Maduranga Lakshan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative text-white`}
        style={{ backgroundColor: "#21282a" }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        ></ThemeProvider>
        <StarFieldBackground />
        <div className="relative z-10">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
