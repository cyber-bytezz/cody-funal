"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { MagicCard } from "../ui/magic-card";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Senior Developer, NovaTech",
    quote: "Cody made development 10x faster with built-in AI prompts. It’s magical!",
    avatar: "/images/user.png",
  },
  {
    name: "Meera Iyer",
    role: "Product Designer, ByteFlow",
    quote: "We completely streamlined design-to-dev handoff with Cody. It’s a game changer.",
    avatar: "/images/user.png",
  },
  {
    name: "Dev Patel",
    role: "CTO, StackSync",
    quote: "Our team cut release time in half. Cody is the future of software workflows.",
    avatar: "/images/user.png",
  },
  {
    name: "Ananya Bose",
    role: "Engineer, CloudVerse",
    quote: "Elegant, fast, and powerful. The AI-driven tools feel like magic.",
    avatar: "/images/user.png",
  },
];

const TestimonialGrid = () => {
  return (
    <section className="w-full py-24 bg-transparent">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          What our users say
        </h2>
        <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Real impact. Real feedback. Powering the next-gen engineering teams.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <MagicCard
              gradientFrom="#6366f1"
              gradientTo="#3b82f6"
              className="rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-border/30 hover:border-border/100 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border border-white/10 shadow-md"
                  />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    “{item.quote}”
                  </p>
                  <div className="text-xs text-white font-semibold">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </div>
              </div>

              {/* Floating quote icon */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-4 right-4 text-primary/20 group-hover:text-primary transition duration-300"
              >
                <QuoteIcon className="size-5" />
              </motion.div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialGrid;
