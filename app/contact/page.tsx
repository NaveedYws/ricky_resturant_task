"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(
            "Reservation request submitted! We'll get back to you shortly."
        );
        setForm({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "",
            message: "",
        });
    };

    const inputClass =
        "w-full bg-background border border-border px-4 py-3 rounded font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors";

    return (
        <>
            <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Contact Header Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 overlay-dark" />
                <div className="relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-restaurant">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <SectionHeading
                                subtitle="Reservation"
                                title="Book a Table"
                                centered={false}
                            />
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        required
                                        className={inputClass}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        required
                                        className={inputClass}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={form.phone}
                                        onChange={(e) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                        className={inputClass}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Number of Guests"
                                        value={form.guests}
                                        onChange={(e) =>
                                            setForm({ ...form, guests: e.target.value })
                                        }
                                        min="1"
                                        className={inputClass}
                                    />
                                    <input
                                        type="date"
                                        value={form.date}
                                        onChange={(e) =>
                                            setForm({ ...form, date: e.target.value })
                                        }
                                        className={inputClass}
                                    />
                                    <input
                                        type="time"
                                        value={form.time}
                                        onChange={(e) =>
                                            setForm({ ...form, time: e.target.value })
                                        }
                                        className={inputClass}
                                    />
                                </div>
                                <textarea
                                    placeholder="Special Requests"
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                    rows={4}
                                    className={`${inputClass} resize-none`}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
                                >
                                    Submit Reservation
                                </button>
                            </form>
                        </div>

                        <div>
                            <SectionHeading
                                subtitle="Get in Touch"
                                title="Visit Us"
                                centered={false}
                            />
                            <div className="space-y-6 mb-10">
                                {[
                                    {
                                        icon: MapPin,
                                        label: "Address",
                                        value: "Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina",
                                    },
                                    {
                                        icon: Phone,
                                        label: "Phone",
                                        value: "+971 54 339 2616 / +971 4 514 7066",
                                    },
                                    {
                                        icon: Mail,
                                        label: "Email",
                                        value: "director@rickyrestaurants.com",
                                    },
                                    {
                                        icon: Clock,
                                        label: "Hours",
                                        value: "7:30 AM  | 12:00 Midnight",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <div className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="font-body text-foreground">
                                                {item.value}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182919!2d-73.987844!3d40.757975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ricky Restaurant Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
