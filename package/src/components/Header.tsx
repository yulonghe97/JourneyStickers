"use client";
import React from "react";
import { Highlight } from "./ui/hero-highlight";
import Animated from "./Animated";

export default function Header() {
  return (
    <div className="flex-col w-full items-center hidden md:flex">
      <Animated className="text-5xl font-bold">
        Journey
        <Highlight className="text-black dark:text-white ml-2">Stickers</Highlight>
      </Animated>
      <Animated className="text-lg text-muted-foreground font-semibold mt-6">
        Don&lsquo;t just bring back souvenirs—bring home stories
      </Animated>
    </div>
  );
}
