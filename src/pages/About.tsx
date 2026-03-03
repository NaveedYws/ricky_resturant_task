import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }} />
        <div className="absolute inset-0 overlay-dark" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-foreground"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-restaurant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Since 2009" title="A Passion for Perfection" centered={false} />
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, Savoria began as a dream shared by two passionate chefs who believed that dining should be an experience that engages all the senses.
                </p>
                <p>
                  Over the years, we've grown from a small neighborhood bistro into one of the city's most celebrated fine dining destinations, earning multiple awards and the loyalty of discerning food lovers.
                </p>
                <p>
                  Our philosophy is simple: use the finest ingredients, honor culinary traditions, and never stop innovating. Every plate that leaves our kitchen is a testament to this commitment.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src={gallery1} alt="Chef at work" className="w-full h-[450px] object-cover rounded-lg" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-restaurant">
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fresh Ingredients", desc: "We source locally and seasonally, ensuring every dish bursts with authentic, natural flavors." },
              { title: "Culinary Excellence", desc: "Our team of award-winning chefs brings decades of experience and a relentless pursuit of perfection." },
              { title: "Warm Hospitality", desc: "From the moment you step in, our goal is to make you feel at home with attentive, genuine service." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card p-8 rounded-lg border border-border text-center"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
