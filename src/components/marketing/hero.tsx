"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center start"],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, 0]), {
    stiffness: 100,
    damping: 20,
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.95, 1]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start w-full min-h-[90vh] pt-8 sm:pt-10 lg:pt-12 pb-10 scroll-mt-16 snap-start"
    >
      {/* Glow for mobile */}
      <div className="absolute flex size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10" />

      {/* Orbiting Circles */}
      <Container
        className="pointer-events-none absolute inset-0 w-full h-full -z-10 flex flex-col items-center justify-center mt-[-5rem] sm:mt-0"
      >
        <OrbitingCircles speed={0.5} radius={260}>
          <Icons.circle1 className="size-4 text-white/20" />
          <motion.div
            className="size-1 rounded-full bg-white/30 animate-pulse"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </OrbitingCircles>
        <OrbitingCircles speed={0.25} radius={340}>
          <Icons.circle2 className="size-1 text-white/20" />
        </OrbitingCircles>
        <OrbitingCircles speed={0.1} radius={420}>
          <Icons.circle2 className="size-1 text-white/10" />
        </OrbitingCircles>
      </Container>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
        className="flex flex-col items-center justify-center text-center gap-y-6 snap-always snap-center"
      >
        {/* Explore Badge */}
        <Container className="relative block overflow-hidden">
          <motion.button
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
              visible: { opacity: 1, scale: 1, rotateX: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto"
          >
            <span className="spark mask-gradient absolute inset-0 w-full h-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
              <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 text-[9px] font-medium mr-2 text-white">
                NEW
              </span>
              Explore Cody AI
            </span>
          </motion.button>
        </Container>

        {/* Headings */}
        <Container delay={0.15}>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center font-bold tracking-tight max-w-5xl mx-auto"
          >
            <span className="block text-[3.2rem] sm:text-[4.8rem] lg:text-[6rem] font-extrabold text-[#B9B9FF] leading-[1.1] mb-2">
              Accelerate
            </span>
            <span className="block text-[2.2rem] sm:text-[3.2rem] lg:text-[4.5rem] font-bold text-white leading-[1.2]">
              your software <br /> development
            </span>
          </motion.h1>
        </Container>

        {/* Subheading */}
        <Container delay={0.25}>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed tracking-tight"
          >
            cody revolutionizes development through a series of prompts
            that deliver high-quality, thoroughly tested code.
          </motion.p>
        </Container>
      </motion.div>
    </section>
  );
};

export default Hero;
