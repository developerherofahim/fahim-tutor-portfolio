"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    CalendarCheck,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Action() {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 18,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <section
            id="action"
            aria-labelledby="action-heading"
            className="py-14 sm:py-16 lg:py-20"
        >
            <div className="container-tutor">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    className="relative isolate overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-tutor-gold-light)] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-20 lg:py-16"
                >
                    {/* Decorative background */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-white/40 blur-3xl"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-[var(--color-tutor-primary-soft)] opacity-60 blur-3xl"
                    />

                    <div className="mx-auto flex flex-col gap-4 items-center max-w-3xl text-center">
                        {/* Icon */}
                     

                        {/* Heading */}
                        <motion.h2
                            id="action-heading"
                            variants={fadeUp}
                            className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--color-tutor-headings)] sm:text-[36px] lg:text-[42px]"
                        >
                            Ready to Transform{" "}
                            <span className="text-[var(--color-tutor-primary-700)]">
                                Your Learning?
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--color-tutor-text-secondary)] sm:text-base sm:leading-7"
                        >
                            Join hundreds of successful students and discover a
                            more effective way to learn.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="mt-1 text-sm font-medium text-[var(--color-tutor-text-secondary)]"
                        >
                            Your first{" "}
                            <span className="font-bold text-[var(--color-tutor-primary-800)]">
                                30-minute trial session is free.
                            </span>
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            variants={fadeUp}
                            className="mx-auto mt-8 flex w-full max-w-xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
                        >
                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/8801609362941"
                                target=""
                                rel="noopener noreferrer"
                                whileHover={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 1.02 }
                                }
                                whileTap={
                                    shouldReduceMotion
                                        ? undefined
                                        : { scale: 0.98 }
                                }
                                transition={{ duration: 0.18 }}
                                className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-[var(--color-tutor-primary-700)] px-5 text-sm font-semibold text-white shadow-[var(--shadow-1)] transition-[background-color,box-shadow] duration-200 hover:bg-[var(--color-tutor-primary-900)] hover:shadow-[var(--shadow-2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-tutor-primary-900)] sm:w-auto sm:min-w-[205px]"
                            >
                                <MessageCircle
                                    size={18}
                                    strokeWidth={2}
                                    className="shrink-0"
                                />

                                <span className="text-white">Chat on WhatsApp</span>

                                <ArrowRight
                                    size={16}
                                    strokeWidth={2}
                                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                                />
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}