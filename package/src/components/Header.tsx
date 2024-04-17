"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-col w-full items-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-5xl font-bold"
      >
        Journey
        <Highlight className="text-black dark:text-white ml-2">Stickers</Highlight>
      </motion.h1>
        <motion.h2
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-lg text-muted-foreground font-semibold mt-6">
            AI-Driven Sticker Personalization Design Project
            </motion.h2>
    </div>
  );
}
