"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "15+",
    label: "Students Guided",
  },
  {
    value: "4+",
    label: "Years Teaching",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-tutor-primary-soft/50 overflow-hidden">
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 70% 40%, rgba(40, 99, 68, 0.04), transparent)",
        }}
      />

      <div className="container-tutor relative">
        <motion.div
          className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-tutor-surface)] border border-[var(--color-tutor-border)] shadow-[var(--shadow-2)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:px-14 lg:py-16">
            
            {/* ── Left: Content ── */}
            <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-tutor-primary-soft)] px-3.5 py-1.5">
                <User
                  className="h-3.5 w-3.5 text-[var(--color-tutor-primary-700)]"
                  strokeWidth={2.25}
                  aria-hidden
                />
                <span className="text-[var(--text-xs)] font-semibold tracking-[var(--tracking-label)] text-[var(--color-tutor-primary-800)] uppercase">
                  Meet Your Tutor
                </span>
              </div>

              {/* Heading */}
              <h2 className="pt-6 text-h2 md:text-[var(--text-h1)] font-display font-bold text-[var(--color-tutor-headings)] tracking-[var(--tracking-heading)] leading-[var(--leading-heading)] max-w-[16ch]">
                Expert Guidance Built on Years of Results
              </h2>

              {/* Quote */}
              <blockquote className="mt-6 relative pl-5">
                <div
                  aria-hidden
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-[var(--color-tutor-primary-700)]"
                />
                <p className="text-[15px] md:text-[var(--text-base)] font-medium italic leading-[1.6] text-[var(--color-tutor-text-secondary)]">
                  “My goal is not just to help students pass, but to inspire an
                  intuition for Science that lasts a lifetime.”
                </p>
              </blockquote>

              {/* Body */}
              <p className="pt-6 text-[var(--text-sm)] md:text-[15px] leading-[1.7] text-[var(--color-tutor-text-secondary)] max-w-[48ch]">
                I combine academic rigor with a patient, student-first approach.
                Whether it’s mastering Calculus or understanding Quantum Physics,
                I provide the roadmap to your success.
              </p>

              {/* Stats */}
              <div className="mt-9 md:mt-10 flex flex-wrap gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col w-full sm:w-auto justify-center items-center min-w-[140px] px-5 py-4 rounded-[var(--radius-lg)] border border-[var(--color-tutor-border)] bg-[var(--color-tutor-surface)] shadow-[var(--shadow-1)]"
                  >
                    <span className="text-[22px] md:text-[24px] font-bold tracking-tight text-[var(--color-tutor-primary-700)] leading-none">
                      {stat.value}
                    </span>
                    <span className="mt-1.5 text-[11px] font-semibold tracking-[0.04em] uppercase text-[var(--color-tutor-muted)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Floating Portrait ── */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                {/* Floating image container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--shadow-2)] ring-1 ring-[var(--color-tutor-border)]/50">
                  <Image
                    src="https://i.ibb.co.com/wrZmf2Gs/profile.jpg"
                    alt="Tutor portrait"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 400px"
                    priority={false}
                  />
                </div>

                {/* Soft decorative glow behind the floating card */}
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-[var(--radius-2xl)] bg-[var(--color-tutor-primary-soft)] blur-2xl opacity-60"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}