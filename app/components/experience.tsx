"use client";

import { motion } from "motion/react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Contract Web Developer",
    company: "DYRF Radio Fuerza",
    period: "2025 - 2025",
    description:
      "Built the company's website using CMS tools — specifically Weebly for their domain.",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Pustanan Printers",
    period: "2024 - 2025",
    description:
      "Worked on building responsive websites, optimizing workflows, and improving customer reach.",
  },
  {
    id: 3,
    role: "Technician",
    company: "Statech Repair Shop",
    period: "2022 - 2022",
    description:
      "Assisted in gadget repairs including mobile devices, laptops, and computers.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex flex-col gap-12">
        {experience.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center md:gap-8"
          >
            {/* Date Range */}
            <div className="md:w-1/4 text-sm text-gray-400 font-mono uppercase tracking-wide mb-2 md:mb-0">
              {item.period}
            </div>

            {/* Content */}
            <div className="md:w-3/4 bg-base-200 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-1">
                {item.role}{" "}
                <span className="text-primary-400 font-medium">
                  · {item.company}
                </span>
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
