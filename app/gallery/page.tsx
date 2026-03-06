"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const images = [
    {
        src: "/images/gallery-1.jpg",
        alt: "Chef preparing dishes",
        span: "md:col-span-2 md:row-span-2",
    },
    { src: "/images/dish-1.jpg", alt: "Filet Mignon", span: "" },
    { src: "/images/dish-2.jpg", alt: "Truffle Pasta", span: "" },
    {
        src: "/images/gallery-2.jpg",
        alt: "Bar area",
        span: "md:col-span-2",
    },
    { src: "/images/dish-3.jpg", alt: "Glazed Salmon", span: "" },
    {
        src: "/images/about-bg.jpg",
        alt: "Restaurant interior",
        span: "md:col-span-2",
    },
    { src: "/images/dish-4.jpg", alt: "Chocolate Mousse", span: "" },
    {
        src: "/images/gallery-3.jpg",
        alt: "Terrace dining",
        span: "md:col-span-2",
    },
    { src: "/images/dish-5.jpg", alt: "Bruschetta", span: "" },
    { src: "/images/dish-6.jpg", alt: "Fresh salad", span: "" },
];

export default function GalleryPage() {
    return (
        <>
            <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Gallery Header Background"
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
                        Gallery
                    </motion.h1>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-restaurant">
                    <SectionHeading
                        subtitle="Visual Journey"
                        title="A Feast for the Eyes"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end p-4">
                                    <span className="font-body text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {img.alt}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
