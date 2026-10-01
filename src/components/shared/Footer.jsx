"use client";

import { LogoAndroid, LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";
import { motion } from "framer-motion";
import {
    ArrowUp
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Subjects",
        href: "#subjects",
    },
    {
        label: "Method",
        href: "#methodology",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com/",
        icon: LogoFacebook,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/",
        icon: LogoLinkedin,
    },
    {
        label: "Email",
        href: "mailto:hello@example.com",
        icon: LogoAndroid,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative border-t border-[var(--color-tutor-border)] bg-[var(--color-tutor-surface)]">
            <div className="container-tutor">
                {/* Main footer */}
                <div className="flex flex-col gap-8 py-10 sm:py-12 md:flex-row md:items-center md:justify-between">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex items-center gap-3"
                    >
                        {/* Name */}
                        <Link
                            href="/"
                            className="group flex items-center gap-2.5 shrink-0 focus-visible:outline-none"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <span
                                className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)] bg-[var(--color-tutor-primary-700)] text-white font-display font-bold text-lg shadow-sm transition-transform duration-200 group-hover:scale-105 group-active:scale-95"
                                aria-hidden="true"
                            >
                                F
                            </span>
                            <span className="font-display font-semibold text-[var(--color-tutor-headings)] text-base md:text-lg tracking-tight">
                                Fahim{" "}
                                <span className="text-[var(--color-tutor-primary-700)]">Miah</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Navigation */}
                    <nav
                        aria-label="Footer navigation"
                        className="order-3 md:order-2 md:hidden"
                    >
                        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            {footerLinks.map((link, index) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.35,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group relative text-xs font-medium text-[var(--color-tutor-muted)] transition-colors duration-150 hover:text-[var(--color-tutor-primary-700)]"
                                    >
                                        {link.label}

                                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-tutor-primary-700)] transition-all duration-200 group-hover:w-full" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social + Back to top */}
                    <div className="order-2 flex items-center gap-3 md:order-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={
                                        social.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        social.href.startsWith("mailto:")
                                            ? undefined
                                            : "noopener noreferrer"
                                    }
                                    aria-label={social.label}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.94 }}
                                    transition={{ duration: 0.15 }}
                                    className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-tutor-muted)] transition-colors duration-150 hover:bg-[var(--color-tutor-primary-soft)] hover:text-[var(--color-tutor-primary-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-tutor-primary-700)]"
                                >
                                    <Icon size={15} strokeWidth={2} />
                                </motion.a>
                            );
                        })}

                        {/* Divider */}
                        <span
                            aria-hidden="true"
                            className="mx-1 h-5 w-px bg-[var(--color-tutor-border)]"
                        />

                        {/* Back to top */}
                        <motion.button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Back to top"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.94 }}
                            transition={{ duration: 0.15 }}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-tutor-border)] text-[var(--color-tutor-muted)] transition-colors duration-150 hover:border-[var(--color-tutor-primary-700)] hover:bg-[var(--color-tutor-primary-soft)] hover:text-[var(--color-tutor-primary-700)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-tutor-primary-700)]"
                        >
                            <ArrowUp size={14} strokeWidth={2} />
                        </motion.button>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="flex flex-col gap-3 border-t border-[var(--color-tutor-border)] py-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] leading-5 text-[var(--color-tutor-muted)]">
                        © {currentYear} Fahim Miah Tutoring. All rights reserved.
                    </p>

                    <p className="text-[11px] leading-5 text-[var(--color-tutor-muted)] sm:text-right">
                        Excellence in education.
                    </p>
                </div>
            </div>
        </footer>
    );
}