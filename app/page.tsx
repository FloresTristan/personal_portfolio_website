// import Image from "next/image";
import Header from "@/app/components/header";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}
