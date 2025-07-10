import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/toggle_themes";

export const metadata: Metadata = {
  title: "Michael Flores",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="luxury">
      <body
        className={`antialiased`}
      >
        <div className="sticky z-50 top-2 px-4 md:top-5 md:px-10 flex justify-end md:justify-start">
          <ThemeToggle/>
        </div>
        {children}
      </body>
    </html>
  );
}
