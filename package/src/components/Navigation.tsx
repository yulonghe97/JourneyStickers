"use client";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const router = useRouter();

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
      className="flex w-full justify-center mt-10 items-center"
    >
      <Button variant="ghost" onClick={() => router.push("/")}>
        Home
      </Button>
      <span className="mx-4">|</span>
      <Button variant="ghost" onClick={() => router.push("/about")}>
        About
      </Button>
    </motion.div>
  );
}
