"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <>
            <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center">
                <Image
                    src="/images/about-bg.jpg"
                    alt="About Us Header Background"
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
                        Our Story
                    </motion.h1>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-restaurant">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <SectionHeading
                                subtitle=""
                                title="RICKYS RESTAURANT"
                                centered={false}
                            />
                            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">

                                <p>
                                    Welcome to Ricky’s Restaurant, where culinary excellence meets unparalleled service. Situated in the vibrant heart of Dubai, Ricky’s Restaurant is renowned for its exquisite dining experiences, offering a diverse menu that caters to both local and international palates. Our commitment to quality and passion for food is reflected in every dish we serve.
                                </p>
                                <strong>Our Culinary Philosophy</strong>
                                <p>
                                    At Ricky’s Restaurant, we believe that great food starts with the finest ingredients. Our chefs are dedicated to sourcing the best produce, meats, and seafood from trusted suppliers. This commitment to quality ensures that every dish is prepared with care and precision. Whether you’re indulging in our signature dishes or exploring new flavors, you can expect a meal that is both delicious and nourishing.
                                </p>
                                <strong>Diverse Menu</strong>
                                <p>
                                    Our menu is a celebration of culinary diversity, offering a wide range of options to suit every taste. From rich, aromatic Asian delicacies and vibrant Middle Eastern specialties to classic Mediterranean fare and innovative international cuisine, we have something for everyone. Each dish is crafted to perfection, ensuring that your dining experience is nothing short of extraordinary.
                                </p>
                                <strong>Exceptional Catering Services</strong>
                                <p>
                                    In addition to our restaurant dining, Ricky’s Restaurant is proud to offer comprehensive catering services for all occasions. Whether you’re planning a corporate event, a wedding, or a private party, our catering team is here to make your event special. With tailored menus, impeccable service, and a focus on every detail, we bring the same level of excellence to our catered events as we do in our restaurant.</p>
                                <strong>Our Team</strong>
                                <p>
                                    Our team at Ricky’s Restaurant is our greatest asset. From our talented chefs to our friendly and professional staff, everyone is dedicated to making your visit enjoyable. We take pride in our warm hospitality and strive to create a welcoming environment where you can relax and savor every moment.    </p>
                                <strong>Commitment to Excellence</strong>
                                <p>
                                    At Ricky’s Restaurant, we are committed to maintaining the highest standards in everything we do. From the freshness of our ingredients to the elegance of our presentation and the attentiveness of our service, we aim to exceed your expectations every time you visit..</p>
                                <strong>Visit Us</strong>
                                <p>
                                    Join us at Ricky’s Restaurant and discover why we are a favorite among Dubai’s dining enthusiasts. Whether you’re looking for a casual meal with friends, a romantic dinner, or a place to celebrate a special occasion, Ricky’s Restaurant is the perfect choice. Come and experience the best of culinary artistry and hospitality in a setting that feels like home.

                                    Thank you for choosing Ricky’s Restaurant. We look forward to serving you soon!</p>


                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative h-[350px] sm:h-[450px]"
                        >
                            <Image
                                src="/images/gallery-1.jpg"
                                alt="Chef at work"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container-restaurant">
                    <SectionHeading subtitle="Our Values" title="What Drives Us" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Fresh Ingredients",
                                desc: "We source locally and seasonally, ensuring every dish bursts with authentic, natural flavors.",
                            },
                            {
                                title: "Culinary Excellence",
                                desc: "Our team of award-winning chefs brings decades of experience and a relentless pursuit of perfection.",
                            },
                            {
                                title: "Warm Hospitality",
                                desc: "From the moment you step in, our goal is to make you feel at home with attentive, genuine service.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-background p-8 rounded-lg shadow-md text-center"
                            >
                                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
