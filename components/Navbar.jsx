"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Navigation,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const numberToWord = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const MENU_DATA = {
    tariff: [
      {
        name: "Local Duty (Hour Basis)",
        href: "/package/local-duty-hour-basis",
      },
      { name: "One Way Drop (Fixed)", href: "/package/one-way-dropping-fixed" },
      {
        name: "Outstation (Day Basis)",
        href: "/package/out-station-duty-day-basis",
      },
      {
        name: "Outstation (KM Basis)",
        href: "/package/out-station-duty-km-basis",
      },
    ],
    tours: numberToWord.map((word, i) => ({
      name: `${i + 1} Day Tour Packages`,
      href: `/package/${word}-day-tour-packages`,
    })),
    temple: [
      {
        name: "Navagraha Temple Packages",
        href: "/package/navagraha-temple-packages",
      },
      {
        name: "Pilgrimage Tour Packages",
        href: "/package/pilgrimage-tour-packages",
      },
    ],
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-[110] group">
          {/* Icon Container */}
          <div className="relative rounded-xl flex items-center justify-center  group-hover:rotate-6 transition-transform duration-300 ">
            <Image
              src="/logo.png"
              alt="AK Tours Logo"
              width={38}
              height={38}
              className="object-contain rounded"
              priority // Ensures logo loads instantly
            />
          </div>

          {/* Text Container */}
          <div className="flex flex-col">
            <span className="font-black text-xl leading-none text-slate-900 tracking-tighter uppercase">
              AK TOURS
            </span>
            <span className="text-orange-600 text-[9px] font-extrabold tracking-[0.3em] uppercase mt-1">
              & Travels
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About Us" />

          <DesktopDropdown label="Tariff" items={MENU_DATA.tariff} />
          <DesktopDropdown
            label="Tour Packages"
            items={MENU_DATA.tours}
            columns={3}
          />
          <DesktopDropdown label="Temple Packages" items={MENU_DATA.temple} />

          <NavLink href="#testimonials" label="Testimonials" />

          <a
            href="https://wa.me/918190022220"
            className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center gap-2 shadow-lg"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-[110] p-2 text-slate-900 bg-slate-100 rounded-xl"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-white z-[100] lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full pt-28 px-8 overflow-y-auto">
          <div className="space-y-1">
            <MobileNavLink
              href="/"
              label="Home"
              onClick={() => setIsOpen(false)}
            />
            <MobileNavLink
              href="/about"
              label="About Us"
              onClick={() => setIsOpen(false)}
            />

            <MobileAccordion
              label="Tariff"
              active={activeMobileMenu === "tariff"}
              onToggle={() =>
                setActiveMobileMenu(
                  activeMobileMenu === "tariff" ? null : "tariff",
                )
              }
              items={MENU_DATA.tariff}
              onClose={() => setIsOpen(false)}
            />

            <MobileAccordion
              label="Tour Packages"
              active={activeMobileMenu === "tours"}
              onToggle={() =>
                setActiveMobileMenu(
                  activeMobileMenu === "tours" ? null : "tours",
                )
              }
              items={MENU_DATA.tours}
              onClose={() => setIsOpen(false)}
            />

            <MobileAccordion
              label="Temple Packages"
              active={activeMobileMenu === "temple"}
              onToggle={() =>
                setActiveMobileMenu(
                  activeMobileMenu === "temple" ? null : "temple",
                )
              }
              items={MENU_DATA.temple}
              onClose={() => setIsOpen(false)}
            />

            <MobileNavLink
              href="#testimonials"
              label="Testimonials"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="mt-auto pb-12 pt-10">
            <a
              href="https://wa.me/918190022220"
              className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] text-center block shadow-xl shadow-orange-100"
            >
              Direct WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// --- Desktop Components ---

const NavLink = ({ href, label }) => (
  <Link
    href={href}
    className="text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:text-orange-600 transition-colors"
  >
    {label}
  </Link>
);

const DesktopDropdown = ({ label, items, columns = 1 }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-orange-600 py-2">
        {label}{" "}
        <ChevronDown
          size={12}
          className={`transition-transform duration-300 ${show ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full left-0 bg-white shadow-2xl border border-slate-50 rounded-2xl p-3 grid gap-x-10 gap-y-3 z-[120] ${columns === 3 ? "w-[600px] grid-cols-3" : "w-64 grid-cols-1"}`}
          >
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[11px] font-bold text-slate-500 hover:text-orange-600 transition-colors flex items-center justify-between group/item hover:bg-slate-50 p-2 rounded hover:border border-slate-100"
              >
                {item.name}{" "}
                <ArrowRight
                  size={10}
                  className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all"
                />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Mobile Components ---

const MobileNavLink = ({ href, label, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-4 text-2xl font-black text-slate-900 tracking-tighter border-b border-slate-50"
  >
    {label}
  </Link>
);

const MobileAccordion = ({ label, active, onToggle, items, onClose }) => (
  <div className="border-b border-slate-50">
    <button
      onClick={onToggle}
      className={`w-full py-5 flex items-center justify-between text-2xl font-black tracking-tighter ${active ? "text-orange-600" : "text-slate-900"}`}
    >
      {label}
      <ChevronDown
        size={20}
        className={`transition-transform ${active ? "rotate-180" : ""}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${active ? "max-h-[500px] pb-6" : "max-h-0"}`}
    >
      <div className="grid grid-cols-1 gap-3">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="text-sm font-bold text-slate-500 bg-slate-50 p-4 rounded-xl flex items-center justify-between"
          >
            {item.name} <ArrowRight size={14} className="text-orange-600" />
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Navbar;
