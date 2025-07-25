"use client";

import { useEffect, useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { LiaFacebook } from "react-icons/lia";
import { SiGoogle } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex flex-col md:flex-row min-w-max justify-around md:items-center items-center md:justify-start">
          <div className="avatar w-36 md:w-36 online pb-3 md:pb-4 md:pl-2 md:mr-5">
            <div className="rounded-full bg-base-300 border border-primary">
              <img
                // src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                src="./profile/profile.png"
                alt="Profile"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Michael Flores
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              Jr. Web Developer
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-xl md:max-w-xs leading-normal text-center md:text-start">
          I build modern web applications with known technologies like ReactJs/NextJs, Python and its libraries.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max space-y-2">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`group flex items-center py-3 ${
                    activeSection === href.slice(1) ? "text-primary font-bold" : ""
                  }`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px w-8 transition-all ${
                      activeSection === href.slice(1)
                        ? "w-16 bg-primary"
                        : "group-hover:w-16 group-hover:bg-primary"
                    } motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === href.slice(1)
                        ? "text-primary"
                        : "text-tertiary group-hover:text-primary"
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
          </div>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-primary"
            href="mailto:michaeltristanflores646@gmail.com"
          >
            <span className="sr-only">Gmail</span>
            <SiGoogle className="w-6 h-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-primary"
            href="https://www.linkedin.com/in/michael-tristan-flores"
          >
            <span className="sr-only">LinkedIn</span>
            <TiSocialLinkedinCircular className="w-9 h-9" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-primary"
            href="https://github.com/FloresTristan"
          >
            <span className="sr-only">Github</span>
            <VscGithub className="w-7 h-7" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-primary"
            href="https://facebook.com/michaeltristan.flores"
          >
            <span className="sr-only">FaceBook</span>
            <LiaFacebook className="w-9 h-9" />
          </a>
        </li>
      </ul>
    </header>
  );
}