import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/menu", label: "MENU" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/contact", label: "CONTACT US" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-restaurant flex items-center justify-between h-20">
        <Link to="/" className="font-display text-2xl font-bold tracking-wider text-primary">
          SAVORIA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-widest transition-colors duration-300 hover:text-gold-dark ${
                location.pathname === link.to ? "text-primary font-bold" : "text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-primary text-primary-foreground px-7 py-2.5 text-sm font-body tracking-widest transition-all duration-300 hover:bg-gold-dark"
          >
            Reservation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2"
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
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container-restaurant py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm tracking-widest py-2 transition-colors duration-300 hover:text-gold-dark ${
                    location.pathname === link.to ? "text-primary font-bold" : "text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-body tracking-widest text-center transition-all duration-300 hover:bg-gold-dark"
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
