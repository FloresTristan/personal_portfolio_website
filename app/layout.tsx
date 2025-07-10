import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en" data-theme="dark">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
