"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import Animated from "./Animated";

export default function Header() {
  return (
    <div className="flex flex-col w-full items-center">
      <Animated className="text-5xl font-bold">
        Journey
        <Highlight className="text-black dark:text-white ml-2">Stickers</Highlight>
      </Animated>
      <Animated className="text-lg text-muted-foreground font-semibold mt-6">
        AI-Driven Sticker Personalization Design Project
      </Animated>
    </div>
  );
}
