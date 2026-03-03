import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const categories = ["All", "Starters", "Main Course", "Seafood", "Desserts"];

const menuItems = [
  { image: dish5, name: "Bruschetta Classica", description: "Toasted sourdough with fresh tomato, basil, and mozzarella", price: "$14", category: "Starters" },
  { image: dish6, name: "Garden Fresh Salad", description: "Mixed greens, grilled chicken, avocado, cherry tomatoes", price: "$16", category: "Starters" },
  { image: dish1, name: "Grilled Filet Mignon", description: "Herb-crusted prime beef with rosemary jus and vegetables", price: "$48", category: "Main Course" },
  { image: dish2, name: "Truffle Pasta", description: "Handmade spaghetti with fresh black truffle and parmesan", price: "$36", category: "Main Course" },
  { image: dish3, name: "Glazed Salmon", description: "Atlantic salmon with honey-soy glaze and fresh herbs", price: "$42", category: "Seafood" },
  { image: dish4, name: "Chocolate Mousse", description: "Belgian chocolate with gold leaf, berries, and coulis", price: "$18", category: "Desserts" },
  { image: dish1, name: "Lamb Rack", description: "New Zealand lamb rack with mint pesto and roasted garlic", price: "$52", category: "Main Course" },
  { image: dish3, name: "Lobster Thermidor", description: "Classic French lobster with gruyère and brandy cream", price: "$62", category: "Seafood" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((d) => d.category === active);

  return (
    <Layout>
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-foreground"
          >
            Our Menu
          </motion.h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-restaurant">
          <SectionHeading subtitle="Curated Selection" title="Explore Our Dishes" />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 font-body text-sm tracking-widest uppercase border transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
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
    </Layout>
  );
};

export default MenuPage;
