// import Image from "next/image";
import Header from "@/components/header";
import Main from "@/components/main";
import ThemeToggle from "@/components/toggle_themes";
import "./globals.css";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="sticky z-50 top-3 flex justify-end">
        <ThemeToggle/>
      </div>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}
