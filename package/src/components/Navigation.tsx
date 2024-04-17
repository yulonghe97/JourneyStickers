"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Animated from "./Animated";

export default function Navigation() {
  const router = useRouter();

  return (
    <Animated className="w-full justify-center mt-10 items-center hidden md:flex">
      <Button variant="ghost" onClick={() => router.push("/")}>
        Home
      </Button>
      <span className="mx-4">|</span>
      <Button variant="ghost" onClick={() => router.push("/about")}>
        About
      </Button>
    </Animated>
  );
}
