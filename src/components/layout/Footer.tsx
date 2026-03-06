"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-restaurant py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Contacts</h4>
            <div className="space-y-3 font-body text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>Shop No. 5, Marina Pearl View Hotel Apt.,Waterfront Al Masara Street, Dubai Marina </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+971 54 339 2616</span>
                <span>+971 4 514 7066</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>director@rickyrestaurants.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Services</h4>
            <div className="flex flex-col gap-2 font-body text-sm text-white/70">
              <span>Yacht Party Catering In Dubai</span>
              <span>Birthday Party Catering</span>
              <span>Wedding Catering in dubai</span>
              <span>Business Party Catering</span>
              <span>Private Catering</span>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Reservation", "Privacy Policy", "Terms & Conditions"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-body text-sm text-white/70 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary mb-4">Opening Hours</h4>
            <div className="space-y-2 font-body text-sm text-white/70">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>11AM – 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10AM – 12AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10AM – 10PM</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-gold-dark transition-colors" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-gold-dark transition-colors" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-gold-dark transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Ricky Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
