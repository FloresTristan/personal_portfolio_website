"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "A clean, responsive portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/projects/portfolioNext.png",
  },
  {
    title: "CITE Vehicle Registration App",
    description: "A simple vehicle registration app for CITE Technical Institute Inc.",
    tech: ["Java", "MySQL", "JavaFX"],
    image: "/projects/vehicleReg.png",
  },
  {
    title: "Mock Online Store",
    description: "A mock Online Store for Taylor Swift",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/projects/mockOnlineStore.png",
  },
  {
    title: "Create-Server-App library",
    description: "A dedicated python library to create a server side for a project (used during my internship in Pustanan)",
    tech: ["Python"],
    image:"/projects/createSrvApp.png"
  },
  {
    title: "Employee Management System",
    description: "A dedicated web app for Employee Management in Pustanan",
    tech: ["NextJS", "MongoDB", "Python"],
    image: "/projects/employeeMgmt.png"
  },
];

export default function ProjectsSection() {
  return (
    <section className="mx-auto my-12 max-w-5xl px-4 grid gap-8 md:grid-cols-2">
      {projects.map((project, i) => (
        <ProjectCard project={project} i={i} key={project.title} />
      ))}
    </section>
  );
}

function ProjectCard({ project, i }: { project: Project; i: number }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      viewport={{ amount: 0.6 }}
      className="overflow-hidden"
    >
      <motion.div
        variants={cardVariants}
        className="bg-base-300 rounded-xl p-6 flex flex-col"
      >
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-4 w-full object-cover"
        />
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-base-600 mb-2">{project.description}</p>
        <small className="">{project.tech.join(", ")}</small>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};