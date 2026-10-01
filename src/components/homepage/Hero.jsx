"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.25,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Hero section for tutor portfolio.
 *
 * Props:
 * - imageSrc   – path or URL for the tutor photo (required for real image)
 * - imageAlt   – alt text (default provided)
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-tutor-background">
      {/* Soft decorative blob (subtle depth) */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--color-tutor-primary-500) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-tutor">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center py-12 md:py-16 lg:py-20">
          {/* ── Left: Copy ── */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-[var(--radius-pill)] bg-[var(--color-tutor-primary-soft)] border border-[var(--color-tutor-primary-700)]/15"
            >
              <GraduationCap
                size={15}
                strokeWidth={2.25}
                className="text-[var(--color-tutor-primary-700)] shrink-0"
              />
              <span className="text-label text-[var(--color-tutor-primary-800)]">
                Professional Tutoring
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-display max-w-[16ch] pb-5"
            >
              <span className="block text-[var(--color-tutor-headings)]">
                Master the Core,
              </span>
              <span className="block text-[var(--color-tutor-primary-700)]">
                Achieve Excellence
              </span>
            </motion.h1>

            {/* Lead */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lead max-w-[42ch] pb-8"
            >
              Personalized academic growth in Science and Mathematics. Clear
              concepts, structured practice, and measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="https://i.ibb.co.com/SDRcgjQR/v1.jpg"
                className="btn-primary !w-full sm:!w-auto !text-white !rounded-[var(--radius-pill)] !px-6 !py-3 gap-2 shadow-sm hover:shadow-md"
              >
                <BookOpen size={17} strokeWidth={2.25} />
                View Resume
              </Link>

              <Link
                href="https://wa.me/8801609362941"
                className="btn-secondary !w-full sm:!w-auto !rounded-[var(--radius-pill)] !px-6 !py-3 gap-2"
              >
                Book a Trial Session
                <ArrowRight size={16} strokeWidth={2.25} />
              </Link>
            </motion.div>

            {/* Optional micro-trust row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-6 text-sm text-[var(--color-tutor-muted)]"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-tutor-success)]" />
                <span>1-on-1 sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-[var(--color-tutor-success)]" />
                <span>Science &amp; Math</span>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Image ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2"
          >
            {/* Soft glow behind image */}
            <div
              className="absolute inset-4 -z-10 rounded-[var(--radius-2xl)] blur-2xl opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-tutor-primary-soft), var(--color-tutor-gold-light))",
              }}
              aria-hidden="true"
            />

            <div className="relative aspect-4/5 sm:aspect-5/6 lg:aspect-4/5 max-h-130 w-full overflow-hidden rounded-[var(--radius-2xl)] shadow-[var(--shadow-2)] ring-1 ring-[var(--color-tutor-border)]">
              <Image
                src="https://i.ibb.co.com/9H6LJqgw/Whats-App-Image-2026-09-30-at-10-51-04-PM.jpg"
                alt="Tutor Image"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                className="object-cover object-top"
              />

              {/* Subtle bottom gradient for polish */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Floating accent card (optional visual interest) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 -left-2 sm:bottom-6 sm:-left-6 md:left-4 lg:-left-8"
            >
              <div className="flex items-center gap-3 rounded-[var(--radius-lg)] bg-[var(--color-tutor-surface)] px-4 py-3 shadow-[var(--shadow-2)] border border-[var(--color-tutor-border)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-tutor-primary-soft)]">
                  <GraduationCap
                    size={20}
                    className="text-[var(--color-tutor-primary-700)]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-tutor-headings)] leading-tight">
                    Expert Guidance
                  </p>
                  <p className="text-xs text-[var(--color-tutor-muted)]">
                    Clear concepts, real results
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}