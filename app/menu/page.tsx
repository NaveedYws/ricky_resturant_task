"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import { motion } from "framer-motion";

const categories = ["All", "Starters", "Main Course", "Seafood", "Desserts"];

import { dishes as menuItems } from "@/data/dishes";

export default function MenuPage() {
    const [active, setActive] = useState("All");
    const filtered =
        active === "All"
            ? menuItems
            : menuItems.filter((d) => d.category === active);

    return (
        <>
            <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Menu Header Background"
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
                        Our Menu
                    </motion.h1>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-restaurant">
                    <SectionHeading
                        subtitle="Curated Selection"
                        title="Explore Our Dishes"
                    />

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-5 sm:px-6 py-2 font-body text-xs sm:text-sm tracking-widest uppercase rounded transition-all duration-300 ${active === cat
                                    ? "bg-primary text-primary-foreground"
                                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filtered.map((dish, i) => (
                            <DishCard key={`${dish.name}-${i}`} {...dish} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
