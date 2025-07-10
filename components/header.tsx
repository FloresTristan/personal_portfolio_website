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
        <div className="flex min-w-max justify-around items-center md:justify-start">
          <div className="avatar online pb-5">
            <div className="w-24 rounded-full">
              <img
                src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                alt="Profile"
              />
            </div>
          </div>
          <div className="md:pl-5">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Michael Flores
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
              Jr. Web Developer
            </h2>
          </div>
        </div>
        <p className="mt-4 max-w-xs leading-normal">
          I build modern web applications with kinda clean code and thoughtful
          design.
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
                        : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                    } motion-reduce:transition-none`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest ${
                      activeSection === href.slice(1)
                        ? "text-primary"
                        : "text-slate-500 group-hover:text-slate-200"
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
            className="block hover:text-slate-200"
            href="mailto:michaeltristanflores646@gmail.com"
          >
            <span className="sr-only">Gmail</span>
            <SiGoogle className="w-6 h-6" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/michael-tristan-flores"
          >
            <span className="sr-only">LinkedIn</span>
            <TiSocialLinkedinCircular className="w-9 h-9" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/FloresTristan"
          >
            <span className="sr-only">Github</span>
            <VscGithub className="w-7 h-7" />
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block hover:text-slate-200"
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