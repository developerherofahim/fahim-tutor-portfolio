"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home", labelBn: "হোম" },
  { href: "#subject", label: "Subjects", labelBn: "বিষয়সমূহ" },
  { href: "#methodology", label: "Methodology", labelBn: "পদ্ধতি" },
  { href: "#about", label: "About", labelBn: "সম্পর্কে" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-tutor-surface)]/90 backdrop-blur-md shadow-[var(--shadow-1)] border-b border-[var(--color-tutor-border)]"
            : "bg-[var(--color-tutor-background)]/80 backdrop-blur-sm"
        }`}
      >
        <nav className="container-tutor">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* ── Logo ── */}
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

            {/* ── Desktop Nav Links ── */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-3.5 py-2 text-sm font-medium tracking-[0.04em] uppercase transition-colors duration-200 rounded-[var(--radius-sm)] ${
                        active
                          ? "text-[var(--color-tutor-primary-800)]"
                          : "text-[var(--color-tutor-muted)] hover:text-[var(--color-tutor-headings)]"
                      }`}
                    >
                      {link.label}
                      {/* Active indicator */}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full bg-[var(--color-tutor-primary-700)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://wa.me/8801609362941"
                className="btn-primary !rounded-[var(--radius-pill)] !px-5 !py-2.5 gap-2 shadow-sm hover:shadow-md"
              >
                <BookOpen size={16} strokeWidth={2.25} />
                Book Trial
              </Link>
            </div>

            {/* ── Mobile Menu Toggle ── */}
            <button
              type="button"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-md)] text-[var(--color-tutor-headings)] hover:bg-[var(--color-tutor-primary-soft)] transition-colors duration-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} strokeWidth={2} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} strokeWidth={2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[var(--color-tutor-headings)]/40 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(100vw-3rem,320px)] bg-[var(--color-tutor-surface)] shadow-[var(--shadow-2)] md:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--color-tutor-border)]">
                <span className="font-display font-semibold text-[var(--color-tutor-headings)]">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)] hover:bg-[var(--color-tutor-primary-soft)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, i) => {
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i + 0.08, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`flex flex-col gap-0.5 px-4 py-3.5 rounded-[var(--radius-md)] transition-colors duration-200 ${
                            active
                              ? "bg-[var(--color-tutor-primary-soft)] text-[var(--color-tutor-primary-800)]"
                              : "text-[var(--color-tutor-text)] hover:bg-[var(--color-tutor-background)]"
                          }`}
                        >
                          <span className="font-medium text-base tracking-wide uppercase">
                            {link.label}
                          </span>
                          <span className="font-bengali text-sm text-[var(--color-tutor-muted)]">
                            {link.labelBn}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-[var(--color-tutor-border)]">
                <Link
                  href="/book-trial"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn-primary w-full !rounded-[var(--radius-pill)] !py-3 gap-2"
                >
                  <BookOpen size={18} strokeWidth={2.25} />
                  Book Trial
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content isn't hidden under fixed header */}
      <div className="h-16 md:h-[72px]" aria-hidden="true" />
    </>
  );
}