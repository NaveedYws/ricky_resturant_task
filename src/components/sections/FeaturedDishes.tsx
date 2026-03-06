"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import Link from "next/link";

import { dishes } from "@/data/dishes";

const FeaturedDishes = () => {
  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container-restaurant">
        <SectionHeading subtitle="Catering Menu" title="Grill Feast" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {dishes.map((dish) => (
            <DishCard key={dish.name} {...dish} horizontal />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
          >
            More Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
