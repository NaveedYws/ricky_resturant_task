import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import { Link } from "react-router-dom";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { image: dish1, name: "Grilled Filet Mignon", description: "Herb-crusted prime beef with rosemary jus and roasted vegetables", price: "$48" },
  { image: dish2, name: "Truffle Pasta", description: "Handmade spaghetti with fresh black truffle, parmesan, and basil", price: "$36" },
  { image: dish3, name: "Glazed Salmon", description: "Atlantic salmon with honey-soy glaze, lemon, and fresh herbs", price: "$42" },
  { image: dish4, name: "Chocolate Mousse", description: "Belgian chocolate mousse with gold leaf, berries, and coulis", price: "$18" },
];

const FeaturedDishes = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-restaurant">
        <SectionHeading subtitle="Catering Menu" title="Grill Feast" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/menu"
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
