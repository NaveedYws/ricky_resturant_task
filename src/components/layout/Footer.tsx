import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown border-t border-border">
      <div className="container-restaurant py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">SAVORIA</h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(0 0% 75%)" }}>
              An exquisite culinary journey awaits. Experience the finest flavors crafted with passion and the freshest ingredients.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-gold-light transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="font-body text-sm hover:text-primary transition-colors"
                  style={{ color: "hsl(0 0% 75%)" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-primary">Opening Hours</h4>
            <div className="space-y-3 font-body text-sm" style={{ color: "hsl(0 0% 75%)" }}>
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM – 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3 font-body text-sm" style={{ color: "hsl(0 0% 75%)" }}>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>123 Gourmet Avenue, Downtown, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@savoria.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center" style={{ borderTop: "1px solid hsl(0 0% 25%)" }}>
          <p className="font-body text-xs" style={{ color: "hsl(0 0% 55%)" }}>
            © {new Date().getFullYear()} Savoria Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
