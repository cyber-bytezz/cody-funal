"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MagicCard } from "../ui/magic-card";

const FeatureGallery = () => {
  return (
    <section className="w-full py-20 bg-transparent relative overflow-hidden">
      {/* Heading */}
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Build faster, smarter <br /> with Cody AI
        </h2>
      </div>

      {/* Refined Highlights */}
      <div className="flex justify-center items-center gap-6 sm:gap-10 text-sm sm:text-base text-muted-foreground mb-20 flex-wrap px-4 max-w-4xl mx-auto">
        {[
          {
            icon: "⚡",
            text: "Supercharge development with AI code suggestions.",
          },
          {
            icon: "🧠",
            text: "Smart workflows that understand your intent.",
          },
          {
            icon: "💬",
            text: "Seamless team communication meets intelligent prompts.",
          },
        ].map(({ icon, text }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx }}
            className="flex items-start gap-2 max-w-xs"
          >
            <span className="text-xl">{icon}</span>
            <span className="leading-relaxed">{text}</span>
          </motion.div>
        ))}
      </div>

      {/* Screenshots with polish */}
      <div className="flex justify-center items-end gap-6 flex-wrap">
        {[ // Don't change alignment, just polish UI
          {
            src: "/images/folder_strcture.png",
            alt: "Folder Structure",
            width: 317,
            height: 396,
          },
          {
            src: "/images/code_prompt.png",
            alt: "Code Prompt",
            width: 472,
            height: 562,
          },
          {
            src: "/images/team-chat.png",
            alt: "Team Chat with AI",
            width: 317,
            height: 396,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 * idx }}
            viewport={{ once: true }}
          >
            <MagicCard className="rounded-[6px] overflow-hidden bg-card/10 shadow-md hover:shadow-xl transition-all border border-border/10">
              <div
                className="relative"
                style={{
                  width: item.width,
                  height: item.height,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-[6px]"
                />
              </div>
            </MagicCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGallery;
