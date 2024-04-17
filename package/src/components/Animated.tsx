"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Animated({ children, className, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
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
      className={cn(className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
