// "use client";

// import SectionHeading from "@/components/ui/SectionHeading";
// import DishCard from "@/components/ui/DishCard";
// import Link from "next/link";

// const dishes = [
//   { image: "/images/cat-1.jpg", name: "Wedding Catering", description: "Herb-crusted prime beef with rosemary jus and roasted vegetables", price: "$48" },
//   { image: "/images/cat-4.png ", name: "special occasion", description: "Handmade spaghetti with fresh black truffle, parmesan, and basil", price: "$36" },
//   { image: "/images/cat-3.jpg", name: "Birthday Party Catering", description: "Atlantic salmon with honey-soy glaze, lemon, and fresh herbs", price: "$42" },
//   { image: "/images/kidsparty.avif", name: "Kids Party Catering", description: "Belgian chocolate mousse with gold leaf, berries, and coulis", price: "$18" },
//   { image: "/images/cat-5.jpg", name: "STAFF PARTY", description: "Herb-crusted prime beef with rosemary jus and roasted vegetables", price: "$48" },
//   { image: "/images/cat-6.png", name: "Yacht Party Catering", description: "Handmade spaghetti with fresh black truffle, parmesan, and basil", price: "$36" },

// ];

// const FeaturedDishes = () => {
//   return (
//     <section className="section-padding bg-cream">
//       <div className="container-restaurant">

//         <SectionHeading subtitle="Catering" title="Organising Private & Corporate Parties" />
//         <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
//           Are you planning a private party, birthday, small or large event, wedding or outdoor food catering? Treat your friends and your clients with one of the best restaurant food available in Dubai. We do more than catering services, we create a holiday atmosphere and deliver the freshest and finest food to your place.

//           Any time of the day, promptly and at the highest quality, we cater the best for you. You can be rest assured that your event and especially – food – is in the right hands. We administer everything right on time, which is as important as the food itself.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {dishes.map((dish) => (
//             <DishCard key={dish.name} {...dish} />
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link
//             href="/menu"
//             className="inline-block bg-primary text-primary-foreground px-10 py-3.5 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-gold-dark"
//           >
//             More Menu
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedDishes;
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  { src: "/images/cat-1.jpg", alt: "Wedding Catering", label: "WEDDING CATERING" },
  { src: "/images/cat-4.png", alt: "Stags & Doekeys", label: "STAGS & DOEKEYS" },
  { src: "/images/cat-3.jpg", alt: "Birthday Party Catering", label: "BIRTHDAY PARTY CATERING" },
  { src: "/images/kidsparty.avif", alt: "Kids Party Catering", label: "KIDS PARTY CATERING" },
  { src: "/images/cat-5.jpg", alt: "Staff Party", label: "STAFF PARTY" },
  { src: "/images/cat-6.png", alt: "Yacht Party Catering", label: "YACHT PARTY CATERING" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-restaurant">
        <SectionHeading subtitle="Catering" title="Organising Private & Corporate Parties" />
        <p className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Are you planning a private party, birthday, small or large event, wedding or outdoor food catering? Treat your friends and your clients with one of the best restaurant food available in Dubai. We do more than catering services, we create a holiday atmosphere and deliver the freshest and finest food to your place.

          Any time of the day, promptly and at the highest quality, we cater the best for you. You can be rest assured that your event and especially – food – is in the right hands. We administer everything right on time, which is as important as the food itself.        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-lg group aspect-square"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 flex items-end justify-center p-4">
                <span className="font-body text-xs sm:text-sm text-white tracking-wider uppercase font-semibold">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded font-body text-sm tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
