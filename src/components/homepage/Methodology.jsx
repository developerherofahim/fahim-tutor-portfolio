"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageSquare,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: "diagnose",
    title: "Diagnose",
    description: "Identify precise gaps in conceptual understanding.",
    icon: Search,
  },
  {
    id: "explain",
    title: "Explain",
    description: "Simplify complex topics into logical, visual steps.",
    icon: MessageSquare,
  },
  {
    id: "solidify",
    title: "Solidify",
    description: "Reinforce through targeted practice and feedback.",
    icon: RefreshCw,
  },
  {
    id: "advance",
    title: "Advance",
    description: "Continuous assessment to track exam readiness.",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Methodology() {
  return (
    <section id="methodology" className="relative py-24 md:py-32 bg-tutor-background overflow-hidden">
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 18% 50%, rgba(40, 99, 68, 0.045), transparent)",
        }}
      />

      <div className="container-tutor relative">
        {/* items-center = vertical middle alignment between image & content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Right: Content (vertically centered via items-center) ── */}
          <motion.div
            className="lg:col-span-6 order-2 lg:order-2 flex flex-col justify-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center rounded-full bg-[var(--color-tutor-primary-soft)] px-3.5 py-1.5 text-[var(--text-xs)] font-semibold tracking-[var(--tracking-label)] text-[var(--color-tutor-primary-800)] uppercase self-start">
              Methodology
            </span>

            {/* Primary heading */}
            <h2 className="pt-5 text-h2 md:text-[var(--text-h1)] font-display font-bold text-[var(--color-tutor-headings)] tracking-[var(--tracking-heading)] leading-[var(--leading-heading)] max-w-[18ch]">
              A Proven Arc of Learning
            </h2>

            {/* Supporting text */}
            <p className="pt-5 text-lead text-[var(--color-tutor-text-secondary)] max-w-[42ch] leading-[var(--leading-body)]">
              Every session follows a clear structure to ensure that time is spent
              effectively on building knowledge, not just memorizing facts.
            </p>

            {/* Step cards */}
            <motion.div
              className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    className="group relative flex gap-4 p-5 rounded-[var(--radius-lg)] bg-[var(--color-tutor-surface)] border border-[var(--color-tutor-border)] shadow-[var(--shadow-1)] transition-all duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-2)] hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-tutor-primary-700)] text-white transition-transform duration-[var(--duration-normal)] group-hover:scale-[1.04]">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-[15px] font-semibold text-[var(--color-tutor-headings)] tracking-[-0.01em] leading-tight">
                        {step.title}
                      </h3>
                      <p className="pt-1.5 text-[13px] leading-[1.55] text-[var(--color-tutor-text-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ── Left: Large Image ── */}
          <motion.div
            className="relative lg:col-span-6 order-1 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-2xl)] shadow-[var(--shadow-2)] ring-1 ring-[var(--color-tutor-border)]/60">
              <Image
                src="https://images.unsplash.com/photo-1761821170104-ccd3e3e21318?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tutor guiding two students through focused study"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              {/* Light brand tint */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-[var(--color-tutor-primary-900)]/8 via-transparent to-transparent"
              />
            </div>

            {/* Soft decorative accent */}
            <div
              aria-hidden
              className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[var(--color-tutor-primary-soft)] -z-10 blur-3xl opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}