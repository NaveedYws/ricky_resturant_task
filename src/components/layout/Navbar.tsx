"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../public/images/rickylogo-2048x459.png"
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="container-restaurant flex items-center justify-between h-20">
        {/* <Link href="/" className="font-display text-2xl font-bold tracking-wider text-primary">
          SAVORIA
        </Link> */}
<div className="flex items-center">
 <Image src={img1} alt="logo" width={140} height={60} />
</div>        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 hover:text-primary ${pathname === link.to
                  ? "text-primary"
                  : scrolled ? "text-foreground/80" : "text-white/90"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 bg-primary px-6 py-2.5 rounded text-sm font-body tracking-widest uppercase text-primary-foreground transition-all duration-300 hover:bg-gold-dark"
          >
            Reservation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden shadow-lg"
          >
            <div className="container-restaurant py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className={`font-body text-sm tracking-widest uppercase py-2 transition-colors duration-300 hover:text-primary ${pathname === link.to ? "text-primary" : "text-foreground/80"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 bg-primary px-6 py-3 rounded text-sm font-body tracking-widest uppercase text-primary-foreground text-center transition-all duration-300 hover:bg-gold-dark"
              >
                Reservation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
