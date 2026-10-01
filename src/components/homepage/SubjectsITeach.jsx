"use client";

import { motion } from "framer-motion";
import { Calculator, Atom, FlaskConical, ArrowRight } from "lucide-react";
import Link from "next/link";

const subjects = [
  {
    id: "mathematics",
    title: "Mathematics",
    description:
      "From foundational arithmetic to advanced calculus — building intuition and speed.",
    icon: Calculator,
    href: "/enquire?subject=mathematics",
  },
  {
    id: "physics",
    title: "Physics",
    description:
      "Mechanics, electromagnetism, and modern physics made tangible through examples.",
    icon: Atom,
    href: "/enquire?subject=physics",
  },
  {
    id: "chemistry",
    title: "Chemistry",
    description:
      "Organic, inorganic, and physical chemistry with structured notes and practice.",
    icon: FlaskConical,
    href: "/enquire?subject=chemistry",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SubjectsITeach() {
  return (
    <section id="subject" className="relative py-20 md:py-28 bg-tutor-primary-soft/50 overflow-hidden">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(40, 99, 68, 0.06), transparent)",
        }}
      />

      <div className="container-tutor relative">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center rounded-full bg-[var(--color-tutor-primary-soft)] px-3.5 py-1.5 text-[var(--text-xs)] font-semibold tracking-[var(--tracking-label)] text-[var(--color-tutor-primary-800)] uppercase">
            Expertise
          </span>

          <h2 className="pt-5 text-[28px] md:text-[var(--text-h1)] font-display font-bold text-[var(--color-tutor-headings)] tracking-[var(--tracking-heading)]">
            Subjects I Teach
          </h2>

          <p className="pt-4 text-xl text-center text-tutor-text-secondary mx-auto">
            Targeted coaching designed for IGCSE, A-Levels, and specialized board
            exams.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <motion.article
                key={subject.id}
                variants={itemVariants}
                className="group relative"
              >
                <div
                  className="card card-interactive flex h-full flex-col p-6 md:p-7 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-tutor-primary-soft)] text-[var(--color-tutor-primary-700)] transition-colors duration-[var(--duration-normal)] group-hover:bg-[var(--color-tutor-primary-700)] group-hover:text-white">
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--text-h4)] font-display font-bold text-[var(--color-tutor-headings)] tracking-[var(--tracking-heading)]">
                    {subject.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 flex-1 text-[var(--text-sm)] leading-[var(--leading-body)] text-[var(--color-tutor-text-secondary)]">
                    {subject.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}