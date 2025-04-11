"use client";

import { motion } from "framer-motion";
import Particles from "../ui/particles";
import Container from "../global/container";

const CTA = () => {
  return (
    <section className="relative w-full py-24 sm:py-28 px-4 sm:px-6">
      <Container className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center justify-center py-16 sm:py-20 px-6 sm:px-10 lg:px-16 rounded-3xl bg-background/30 border border-border/30 overflow-hidden text-center backdrop-blur-md shadow-2xl"
        >
          {/* Particles */}
          <Particles
            refresh
            ease={80}
            quantity={70}
            color="#c9c9c9"
            className="absolute inset-0 z-0"
          />

          {/* Glow effect */}
          <motion.div
            className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-60 rounded-full blur-[120px] opacity-40 z-0"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #3b82f6, #8b5cf6, #0ea5e9)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight z-10">
            Join our <span className="text-primary">waitlist</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground z-10 max-w-xl">
            Be the first to experience next-gen AI workflows. No spam, just innovation.
          </p>

          {/* Email input form */}
          <form
            className="mt-8 w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-3 bg-card/10 border border-border/30 px-4 py-3 rounded-xl backdrop-blur-sm z-10"
            autoComplete="off"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full bg-transparent text-white placeholder:text-muted-foreground text-base sm:text-lg px-3 py-2 focus:outline-none font-medium"
              style={{
                WebkitBoxShadow: "0 0 0px 1000px transparent inset",
                WebkitTextFillColor: "white",
              }}
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-semibold px-6 py-2 sm:py-3 rounded-lg transition-all shadow-md shadow-primary/30"
            >
              SIGN UP
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
